import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  userScore: number = 0;
  question: any;
  userName: string;
  userResult: any;
  userAndCorrectAnswers: any;
  answer: any;
  scores: any;

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:8080/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:8080/scores");
  }

  checkAnswer(form: object, questions: any, userName: string) {
    this.userName = userName;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.userScore++;
      }
    }
    this.userResult = {
      username: this.userName,
      score: this.userScore
    };
    return this.userResult;
  }

  postScores(item: object, form: object, question: any) {
    this.http.post("http://localhost:8080/scores", item).subscribe(response => {
      this.scores = response;

      this.userAndCorrectAnswers = {
        choices: form,
        questions: question
      };
      this.goToResults();
    });
  }

  goToResults() {
    this.router.navigateByUrl("/results");
  }

  allResults() {
    return this.userAndCorrectAnswers;
  }

  userScoreToResultsPage() {
    return this.userResult;
  }
}
