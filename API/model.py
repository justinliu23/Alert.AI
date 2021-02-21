from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    username = db.Column(db.String(80), nullable=False,
                         unique=True, primary_key=True)
    password = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f"User('{self.username}', {self.segState})"
