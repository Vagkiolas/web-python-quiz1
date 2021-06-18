from flask import Blueprint, render_template, request, flash
from flask_login import login_required, current_user

from . import db




views = Blueprint('views', __name__)

# this is how the user goes to home page only if he has logged in
@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    return render_template("index.html", user=current_user)

# the same process so as the user starts the quiz
@views.route('quiz')
@login_required
def quiz():
    return render_template("quiz.html", user=current_user)


