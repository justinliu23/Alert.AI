from flask import Flask,jsonify

from flask_restful import Api
from flask_jwt_extended import JWTManager

from model import User,db
import resources

app = Flask(__name__)
api = Api(app)

app.config['JWT_SECRET_KEY'] = 'this-will-become-thenewsecretkeysupersecuresneakysneaky'
jwt=JWTManager(app)

@app.route('/')
def index():
    return jsonify({"message" : "hello, this is server :)"})

api.add_resource(resources.UserRegistration, '/sign-up')
api.add_resource(resources.UserLogin, '/sign-in')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)

