from flask import Flask, flash, request, redirect, send_from_directory, url_for, session, jsonify, json
from flask_restful import Resource, Api
from flask_cors import CORS
from flask_pymongo import PyMongo
import urllib3
from urllib.parse import quote_plus
import base64

SECRET_KEY = 'WV\x00\xaf6\x0f`\x19\x88\x07V\xc5\x8d\xc1M\xf1zH\xbc\x7f\xd0)\x92O'

app = Flask(__name__)
api = Api(app)
CORS(app)


app.config['SECRET_KEY'] = SECRET_KEY
app.config["MONGO_URI"] = "mongodb+srv://" + quote_plus("FlaskAPI")+ ":" + quote_plus("Aje@@8JSfPEfkcU") + "@cluster0.6z6kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongo = PyMongo(app)

class Authentication(Resource):
    def post(self):
        data = request.get_json(force=True)
        return None

    def get(self):
        print('something')


api.add_resource(Authentication, '/api/images')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)

