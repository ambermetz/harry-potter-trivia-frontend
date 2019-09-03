import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz/quiz.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: any[];
  userResult: object;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService
      .getQuestions()
      .subscribe(response => (this.questions = response));
  }

  onSubmit(form: NgForm) {
    this.userResult = this.quizService.checkAnswer(
      form.value,
      this.questions,
      form.value.userName
    );
    this.quizService.postScores(this.userResult, form.value, this.questions);
  }
}
