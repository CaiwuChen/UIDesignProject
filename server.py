from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def start_screen():
    return render_template('start.html')

@app.route('/index')
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

@app.route('/yue/learn')
def yue_dishes():
    return render_template('yue/learn.html')

@app.route('/yue/dimsum')
def dimsum_page():
    return render_template('yue/dimsum.html')

@app.route('/yue/chicken')
def chicken_page():
    return render_template('yue/chicken.html')

@app.route('/yue/congee')
def congee_page():
    return render_template('yue/congee.html')

@app.route('/yue/quiz')
def yue_quiz():
    return render_template('yue/quiz.html')




@app.route('/min/learn')
def min_dishes():
    return render_template('min/learn.html')

@app.route('/min/fotiaoqiang')
def fotiaoqiang_page():
    return render_template('min/fotiaoqiang.html')

@app.route('/min/lycheepork')
def lycheepork_page():
    return render_template('min/lycheepork.html')

@app.route('/min/fishball')
def fishball_page():
    return render_template('min/fishball.html')

@app.route('/min/quiz')
def min_quiz():
    return render_template('min/quiz.html')





@app.route('/lu/learn')
def lu_dishes():
    return render_template('lu/learn.html')

@app.route('/lu/intestine')
def intestine_page():
    return render_template('lu/intestine.html')

@app.route('/lu/shrimp')
def shrimp_page():
    return render_template('lu/shrimp.html')

@app.route('/lu/seacucumber')
def seacucumber_page():
    return render_template('lu/seacucumber.html')




@app.route('/cuisine-quiz')
def cuisine_quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
