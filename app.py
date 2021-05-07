from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def bonjour():
    a="bonjour"
    return a


@app.route('/index')
def index():
    return render_template("index.html",title="Home")

@app.route('/contact', methods=["GET","POST"])
def contact():
    if request.method == "POST":
        return "DONE!!!"
    return render_template("contact.html",title="Contact")

@app.route('/apropos')
def Apropos():
    a="Apropos"
    return render_template("apropos.html",title="A propos")


@app.route('/articles')
def article():
    arts=[{"titre":"JavaScript","blog":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores maxime harum velit! Pariatur ipsum minima deleniti eaque a, recusandae vel maxime nam natus ducimus optio tempore. Quaerat, nesciunt expedita.","id":"js"},
              {"titre":"Python","blog":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores maxime harum velit! Pariatur ipsum minima deleniti eaque a, recusandae vel maxime nam natus ducimus optio tempore. Quaerat, nesciunt expedita.","id":"python"},
              {"titre":"SQL","blog":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores maxime harum velit! Pariatur ipsum minima deleniti eaque a, recusandae vel maxime nam natus ducimus optio tempore. Quaerat, nesciunt expedita.","id":"sql"}]
    return render_template("articles.html",arts=arts,title="Articles")


if __name__ == "__main__":
    app.run(debug=True, port=5012)
