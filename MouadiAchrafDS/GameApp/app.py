from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    if request.method == "POST":
        return render_template("game.html",title="Game")
    return render_template("index.html",title="Home")

@app.route('/game', methods=["GET","POST"])
def game():        
        return render_template("game.html",title="Game")
    


if __name__ == "__main__":
    app.run(debug=True, port=5100)