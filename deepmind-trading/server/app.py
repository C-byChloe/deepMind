import os
from flask import Flask, request,render_template, redirect

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/run_script')
def run_script():
    os.system('python3 defalt.py')
    return redirect('http://localhost:3000')


if __name__ == '__main__':
    app.run(debug=True)