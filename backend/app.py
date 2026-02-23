import os
from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from models import db
from auth import auth_bp
from routes import routes_bp

load_dotenv()

app = Flask(__name__)

# Configs
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wallet.db'
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'super-secret-key')

# Init
CORS(app)
db.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
app.register_blueprint(auth_bp)
app.register_blueprint(routes_bp)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return {"message": "Wallet Backend Server is Running!"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)
