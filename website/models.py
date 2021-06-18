from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

# this is how i would save each users result data
##class Score(db.Model):
##    id = db.Column(db.Integer, primary_key=True)
##    correct = db.Column(db.Integer)
##    percentage = db.Column(db.Integer)
##    attempt = db.Column(db.Integer)
##    date = db.Column(db.DateTime(timezone=True), default=func.now())
##    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

# this is the part of database that is used to save each users data
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    #score = db.relationship('Score')


# this is the way i would save the questions into the database
##class Quiz(db.Model):
##    id = db.Column(db.Integer, primary_key=True)
##    quizContents = db.relationship('QuizContent', backref='quiz', lazy='dynamic')
##
##class QuizContent(db.Model):
##    id = db.Column(db.Integer,primary_key=True)
##    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'))
##    text_content = db.Column(db.String(128))
##    img_content = db.Column(db.String(80))
##
##class Question(db.Model):
##	id = db.Column(db.Integer,primary_key=True)
##	quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'))
##	question_number = db.Column(db.Integer)
##	question_choices = db.relationship('QuestionChoice', backref='question', lazy='dynamic')
##	question_contents = db.relationship('QuestionContent', backref='question', lazy='dynamic')
##	quiz = db.relationship('Quiz', back_populates='questions')    
##
##class QuestionContent(db.Model):
##	id = db.Column(db.Integer,primary_key=True)
##	question_id = db.Column(db.Integer, db.ForeignKey('question.id'))
##	text_content = db.Column(db.String(150))
##	img_content = db.Column(db.String(80))
##	
##class QuestionChoice(db.Model):
##	id = db.Column(db.Integer,primary_key=True)
##	question_id = db.Column(db.Integer, db.ForeignKey('question.id'))
##	choice_number = db.Column(db.Integer)
##	choice_content = db.Column(db.String(150))
##	choice_correct = db.Column(db.Boolean)
