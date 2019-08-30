import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuizService } from "../quiz/quiz.service";
// import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any[];

  constructor(private http: HttpClient, private quizService: QuizService) {}

  ngOnInit() {
    this.quizService
      .getQuestions()
      .subscribe(response => (this.questions = response));
  }
}

// ■ In a form:
// ● Ask the user to enter their name.
// ● Display the 10 random questions and choices using
// *ngForOf .
// ● When this form is submitted, pass the answers to
// QuizService . QuizService will calculate their score and
// POST their score to the database, and redirect the user to
// the “ results ” route.
