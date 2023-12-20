from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
from model import chat, create_teacher_prompt, create_teacher_model, create_phone_model, create_career_model

prompt = create_teacher_prompt()
model1 = create_teacher_model(prompt)
model2 = create_phone_model()
model3 = create_career_model()


end_message = "based on this conversation give me small (less than 120 words) suggestion or correction which can help me to improve my communication skill"

@app.route('/teacher', methods=['POST'])
def communication_route_fun():
    data = request.get_json()
    if data['input'] == 'stop':return {'output':chat(end_message,model1)}
    return {'output':chat(data['input'], model1)}
    
   
@app.route('/phone', methods=['POST'])
def telephone_route_fun():
    data = request.get_json()
    if data['input'] == 'stop':return {'output':chat(end_message,model2)}
    return {'output':chat(data['input'], model2)}
    

@app.route('/career', methods=['POST'])
def career_route_fun():
    data = request.get_json()
    if data['input'] == 'stop':return {'output':chat(end_message,model3)}
    return {'output':chat(data['input'], model3)}

app.run(port=2000)