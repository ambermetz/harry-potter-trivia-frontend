import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// Must have the QuizService injected in this component.
// Displays the user’s score.
// Displays the correct answer for each question.
// Displays a link to the “ scores ” route.
