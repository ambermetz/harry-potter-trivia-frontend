// If you want a bonus, show only the top 10 scores but also include the current user’s score

import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz/quiz.service";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  userScore: any[];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService
      .getScores()
      .subscribe(response => (this.userScore = response));
  }
}
