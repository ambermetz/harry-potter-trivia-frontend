import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz/quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  allResults: any;
  userResults: object;
  questionAnswers: any;
  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.allResults = this.quizService.allResults();
    this.userResults = this.quizService.userScoreToResultsPage();
    this.questionAnswers = this.allResults.questions;

    console.log(this.allResults.questions);
    console.log(this.userResults);
  }

  goToScores() {
    this.router.navigateByUrl("/scores");
  }
}

// const { username, ...choices } = this.results.choice;
// this.userChoices = Object.values(choices);
