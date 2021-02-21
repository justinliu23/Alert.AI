from flask import Flask,jsonify
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required,
                                get_jwt_identity, get_raw_jwt)
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from lib2to3.refactor import _identity
import hashlib

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('userName', help = 'Username cannot be blank', required = True)
parser.add_argument('password', help = 'Password cannot be blank', required = True)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
app.config['JWT_SECRET_KEY'] = 'this-will-become-thenewsecretkeysupersecuresneakysneaky'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
jwt=JWTManager(app)
db = SQLAlchemy(app)

class User(db.Model):
    username = db.Column(db.String(80), nullable=False,
                         unique=True, primary_key=True)
    password = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f"User('{self.username}', {self.segState})"

class UserRegistration(Resource):
    def post(self):
        #try:
            data = parser.parse_args()
            print(hashlib.md5(data['password'].encode()).hexdigest())
            if User.query.filter(User.username==data['userName']).first():
                return {"error" : "User already exists"}

            u = User(username=data['userName'], password=hashlib.md5(data['password'].encode()).hexdigest())
            db.session.add(u)
            db.session.commit()

            access_token = create_access_token(identity=data['userName'])
            refresh_token = create_refresh_token(identity=data['userName'])
            return {
                'userName': data['userName'],
                'access_token': access_token,
                'refresh_token': refresh_token
            }
        #except:
         #   raise Exception()

class UserLogin(Resource):
    def post(self):
        try:
            data = parser.parse_args()
            current_user = User.query.filter(User.username==data['userName']).first()

            if not current_user:
                return {"error":"User not in DB. Register as a new user"}

            password = hashlib.md5(data['password'].encode()).hexdigest()
            if current_user.password == password :
                access_token = create_access_token(identity=data['username'])
                refresh_token = create_refresh_token(identity=data['username'])
                return {
                    'username': current_user.username,
                    'access_token': access_token,
                    'refresh_token': refresh_token
                }
            else:
                return {'error': 'Wrong credentials'}
        except:
            raise Exception("Cannot login user")

@app.route('/')
def index():
    return jsonify({"message" : "hello, this is the server :)"})

api.add_resource(UserRegistration, '/sign-up')
api.add_resource(UserLogin, '/sign-in')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)

