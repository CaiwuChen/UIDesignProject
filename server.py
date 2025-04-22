from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sichuan/learn')
def sichuan_dishes():
    return render_template('sichuan/learn.html')

@app.route('/sichuan/tofu')
def tofu_page():
    return render_template('sichuan/tofu.html')

@app.route('/sichuan/fish')
def fish_page():
    return render_template('sichuan/fish.html')

@app.route('/sichuan/cabbage')
def cabbage_page():
    return render_template('sichuan/cabbage.html')

@app.route('/sichuan/quiz')
def quiz():
    return render_template('sichuan/quiz.html')

@app.route('/cuisine-quiz')
def cuisine_quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
