import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// Must have the QuizService injected in this component.
// Displays a list of all of the scores.
// If you want a bonus, show only the top 10 scores but also include
// the current user’s score
