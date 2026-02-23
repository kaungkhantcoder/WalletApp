from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)

    wallet = db.relationship('Wallet', backref='owner', uselist=False)

class Wallet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    balance = db.Column(db.Numeric(15, 2), default=1000.00) # Bonus 1000

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_wallet_id = db.Column(db.Integer, db.ForeignKey('wallet.id'))
    receiver_wallet_id = db.Column(db.Integer, db.ForeignKey('wallet.id'))
    amount = db.Column(db.Numeric(15, 2), nullable=False)
    note = db.Column(db.Text)
    status = db.Column(db.String(20), default='success')
    transaction_date = db.Column(db.DateTime, default=datetime.utcnow)
