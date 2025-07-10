from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from urllib.parse import quote_plus

app = Flask(__name__)
CORS(app)

username=quote_plus("rohitvpatil3")
password=quote_plus("Rohitpatil@1")
uri=f"mongodb+srv://{username}:{password}@yd.nldhork.mongodb.net/?retryWrites=true&w=majority&appName=yd"
client=MongoClient(uri)
db=client.get_database("yd")
collection=db["cc"]

@app.route('/submit',methods=['POST'])
def submit():
	data=request.json
	name=data.get("name")
	email=data.get("email")
	if not name or not email:
		return jsonify({"error":"Missing data"}),400
	collection.insert_one({"name":name,"email":email})
	return jsonify({"message":"Data saved successfully!"}),200
if __name__=='__main__':
	app.run(host="0.0.0.0",port=5000)

