from flask import Flask, flash, request, redirect, send_from_directory, url_for, session, jsonify, json
from flask_restful import Resource, Api
from flask_cors import CORS

SECRET_KEY = 'WV\x00\xaf6\x0f`\x19\x88\x07V\xc5\x8d\xc1M\xf1zH\xbc\x7f\xd0)\x92O'

app = Flask(__name__)
api = Api(app)
CORS(app)


app.config['SECRET_KEY'] = SECRET_KEY

class FirstResource(Resource):
    def post(self):
        print('something')
    def get(self):
        print('something')


api.add_resource(FirstResource, '/API/FirstResource')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)

