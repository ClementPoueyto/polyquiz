import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizListService} from 'src/app/services/quizList.service';
import {Answer} from 'src/app/models/answer.models';
import {Question} from 'src/app/models/question.models';
import {ActivatedRoute, Router} from '@angular/router';
import {Trouble} from 'src/app/models/trouble.models';


@Component({
  selector: 'app-quiz-create-question-page',
  templateUrl: './quiz-create-question-page.component.html',
  styleUrls: ['./quiz-create-question-page.component.css']
})
export class QuizCreateQuestionPageComponent extends Trouble implements OnInit {

  public questionForm: FormGroup;
  public questionType: FormGroup;
  public answers: FormArray;
  public quizId: number;
  public questId: number;
  question: Question;
  public imageQuestion = '';
  public imageAnswers: string[] = [];
  public type: string;
  public answersAreText = true;

  constructor(public formBuilder: FormBuilder, public quizListService: QuizListService, public route: ActivatedRoute, public router: Router) {
    super(router);
    this.questionType = this.formBuilder.group({
      type: [true],
    });
    this.route.paramMap.subscribe(params => {
      if (params != null) {
        this.quizId = Number(params.get('quizId'));
        this.questId = Number(params.get('questionId'));
        if (this.questId) {
          this.quizListService.quizzes$.subscribe((value) => {
            if (value) {
              const quiz = value.find((val) => val.id == this.quizId);
              if (quiz) {
                this.question = quiz.questions.find((ques) => ques.id == this.questId);
                this.questionType = this.formBuilder.group({
                  type: [this.question.answersAreText],
                });
                if (this.question.answers.length > 0) {
                  this.fillQuestionForm();
                }
              }
            }
          });
        }
      }
    });

  }

  ngOnInit() {
    if (this.question) {
      this.fillQuestionForm();
    } else {
      this.initializeQuestionForm();
    }
  }


  get formData() {
    return this.questionForm.get('answers') as FormArray;
  }

  createAnswer(): FormGroup {
    return this.formBuilder.group({
      text: [''],
      isCorrect: [false],
      image: ['']
    });
  }


  addAnswer(): void {
    this.answers = this.questionForm.get('answers') as FormArray;

    for (let i = 0; i < 3; i++) {
      this.answers.push(this.createAnswer());
    }
  }

  addQuestion() {
    if (this.questionForm.valid && this.controlRightAnswer()) {
      const question = this.questionForm.getRawValue();
      question.image = this.imageQuestion;
      question.answersAreText = this.questionType.value.type;
      for (let i = 0; i < question.answers.length; i++) {
        question.answers[i].image = (!question.answersAreText) ? this.imageAnswers[i] : '';
        question.answers[i].text = (question.answersAreText) ? question.answers[i].text : '';
      }
      this.quizListService.addQuestion(this.quizId, question);
      this.initializeQuestionForm();
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  changeQuestion() {
    if (this.questionForm.valid) {
      const question = this.questionForm.getRawValue();
      question.image = this.imageQuestion;
      question.answersAreText = this.questionType.value.type;
      for (let i = 0; i < question.answers.length; i++) {
        question.answers[i].image = (!question.answersAreText) ? this.imageAnswers[i] : '';
        question.answers[i].text = (question.answersAreText) ? question.answers[i].text : '';
      }
      let validQuestion: any;
      if (this.question.image || this.imageQuestion) {
        validQuestion = question;
      } else {
        validQuestion = {text: question.text, quizId: question.quizId, answers: question.answers, answersAreText: question.answersAreText};
      }
      validQuestion.id = this.question.id;
      this.quizListService.editQuestion(this.quizId, validQuestion);
      this.initializeQuestionForm();
      this.router.navigate(['../..'], {relativeTo: this.route});

    }
  }

  initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      text: ['', Validators.required],
      answers: this.formBuilder.array([this.createAnswer()]),
    });
    this.addAnswer();
  }

  fillQuestionForm() {
    this.questionForm = this.formBuilder.group({
      text: [this.question.text, Validators.required],
      answers: this.formBuilder.array([this.fillAnswer(this.question.answers[0])]),
    });
    if (this.question.image) {
      this.imageQuestion = this.question.image;
    }

    this.fillAnswers();

  }

  fillAnswers() {
    this.answers = this.questionForm.get('answers') as FormArray;
    this.imageAnswers[0] = this.question.answers[0].image;
    for (let i = 1; i < 4; i++) {
      this.answers.push(this.fillAnswer(this.question.answers[i]));
      this.imageAnswers[i] = this.question.answers[i].image;
    }
  }

  fillAnswer(answer: Answer): FormGroup {
    return this.formBuilder.group({
      text: [answer.text],
      isCorrect: [answer.isCorrect],
      id: [answer.id]
    });
  }

  invalidImage(index) {
    return (this.imageAnswers[index] == null);
  }

  invalidAnswer(index) {
    return (this.answers.at(index).value.text === '');
  }

  invalidQuestion() {
    return (this.questionForm.controls.text.errors != null);
  }

  controlRightAnswer(): boolean {
    let nbTrue = 0;
    this.answers.value.forEach(element => {
      if (element.isCorrect === true) {
        nbTrue++;
      }
    });
    return nbTrue === 1;
  }

  controlText() {
    let i = 0;
    for (let j = 0; j < 4; j++) {
      if (this.answers.value[j].text == '') {
        i++;
      }
    }
    return i == 0;
  }

  controlImage() {
    for (let i = 0; i < 4; i++) {
      if (this.imageAnswers[i] == null) {
        return false;
      }
    }
    return true;
  }

  receiveImg(img: string) {
    this.imageQuestion = img;
  }

  receiveImgAnsw($img: string, index) {
    this.imageAnswers[index] = $img;
  }


}
