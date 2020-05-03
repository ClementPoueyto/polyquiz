import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../models/quiz.models';
import {QUIZ_LIST} from '../mocks/quizzes-list.mock';
import {httpOptionsBase, serverUrl} from '../../configs/server.config';
import {Question} from '../models/question.models';

@Injectable({
    providedIn: 'root'
})
export class QuizListService {
  private URL: string = serverUrl + '/quizzes';
  public createPageRoute = 'quiz';
  public createPageRoute$: BehaviorSubject<string> = new BehaviorSubject(this.createPageRoute);
  public postQuiz: Quiz;
  public postQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.postQuiz);
  public quizzes: Quiz[] = QUIZ_LIST;
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public quizSelected$: Subject<Quiz> = new Subject();
  private httpOptions = httpOptionsBase;
  private questionsPath = 'questions';

  constructor(private http: HttpClient) {
    this.setQuizzesFromUrl();

  }


  setQuizzesFromUrl() {
    this.http.get<Quiz[]>(this.URL).subscribe((result) => {
      this.quizzes = result;
      this.quizzes$.next(this.quizzes);

    });
  }

  deleteQuiz(quiz: Quiz) {
    this.http.delete<Quiz>(this.URL + '/' + quiz.id, this.httpOptions).subscribe(() => {
      this.setQuizzesFromUrl();
    });
  }

  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.URL, quiz, this.httpOptions);
  }

  editQuiz(quiz: Quiz) {
    return this.http.put<Quiz>(this.URL + '/' + quiz.id, quiz, this.httpOptions).subscribe(() => {
      this.setQuizzesFromUrl();
    });
  }

  addQuestion(quizId: number, question: Question) {
    const questionUrl = this.URL + '/' + quizId + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => {
      this.setSelectedQuiz(quizId);
      this.setQuizzesFromUrl();
    });
  }

  editQuestion(quizId: number, question: Question) {
    const questionUrl = this.URL + '/' + quizId + '/' + this.questionsPath + '/' + question.id;
    this.http.put<Question>(questionUrl, question, this.httpOptions).subscribe(() => {
      this.setSelectedQuiz(quizId);
      this.setQuizzesFromUrl();
    });
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    const questionUrl = this.URL + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    this.http.delete<Question>(questionUrl, this.httpOptions).subscribe(() => {
      this.setSelectedQuiz(quiz.id);
      this.setQuizzesFromUrl();
    });
  }

  setSelectedQuiz(quizId: number) {
    const urlWithId = this.URL + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    });
  }


}
