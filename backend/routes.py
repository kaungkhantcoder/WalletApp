from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Wallet, Transaction
from decimal import Decimal

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/transfer', methods=['POST'])
@jwt_required()
def transfer():
    current_user_id = get_jwt_identity()
    data = request.get_json()

    receiver_phone = data.get('receiver_phone')
    amount = Decimal(str(data.get('amount')))
    note = data.get('note', '')


    sender_wallet = Wallet.query.filter_by(user_id=current_user_id).first()

    receiver_user = User.query.filter_by(phone=receiver_phone).first()

    if not receiver_user:
        return jsonify({"message": "Account has not been created."}), 404

    receiver_wallet = receiver_user.wallet

    if sender_wallet.balance < amount:
        return jsonify({"message": "Amount not enough, Cash In first"}), 400

    try:
        sender_wallet.balance -= amount
        receiver_wallet.balance += amount

        new_tx = Transaction(
            sender_wallet_id=sender_wallet.id,
            receiver_wallet_id=receiver_wallet.id,
            amount=amount,
            note=note
        )

        db.session.add(new_tx)
        db.session.commit()

        return jsonify({"message": "Transaction Successful"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@routes_bp.route('/history', methods=['GET'])
@jwt_required()
def get_history():
    current_user_id = get_jwt_identity()
    user_wallet = Wallet.query.filter_by(user_id=current_user_id).first()

    history = Transaction.query.filter(
        (Transaction.sender_wallet_id == user_wallet.id) |
        (Transaction.receiver_wallet_id == user_wallet.id)
    ).order_by(Transaction.transaction_date.desc()).all()

    results = []
    for tx in history:
        results.append({
            "id": tx.id,
            "amount": str(tx.amount),
            "type": "sent" if tx.sender_wallet_id == user_wallet.id else "received",
            "note": tx.note,
            "date": tx.transaction_date.strftime("%Y-%m-%d %H:%M:%S")
        })

    return jsonify(results), 200


@routes_bp.route('/balance', methods=['GET'])
@jwt_required()
def get_balance():
    current_user_id = get_jwt_identity()
    wallet = Wallet.query.filter_by(user_id=current_user_id).first()
    return jsonify({"balance": float(wallet.balance)}), 200
