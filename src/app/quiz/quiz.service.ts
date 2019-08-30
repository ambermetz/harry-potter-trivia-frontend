import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:8080/questions");
  }

  // getScores(): Observable<any> {
  //   return this.http.get("http://localhost:8080/cart-items");
  // }

  // postScores(): Observable<any> {}
}
