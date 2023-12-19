from flask import Flask, jsonify, request

app = Flask(__name__)

from model import comp

@app.route('/data', methods=['POST'])
def get_data():
    prompt = '''
i will provide you some answer for question which asked for counselling and basis of my provided answers you'll understand what are my current skills, interests and capabilities. and after understanding them can you sugeest me couple of career options which are suitable for me.'''
    end = '''answer must be very short and straightforward''' 
    data= request.get_json()
    for q in data:
        prompt += q
        prompt += data[q]
    prompt += end 
    ans = comp(prompt)
    return jsonify(ans)
@app.route('/', methods=['GET'])
def hello():
    return "hello"

app.run(port=4000)