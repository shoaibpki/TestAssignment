import { Component, OnInit } from '@angular/core';
import testData from "../../../assets/test.json";

interface Test{
  id: number,
  question: string,
  answer: string,
  option1: string,
  option2: string,
  option3: string,
  option4: string
}

@Component({
  selector: 'app-test-paper',
  templateUrl: './test-paper.component.html',
  styleUrls: ['./test-paper.component.css']
})
export class TestPaperComponent implements OnInit {

  test: Test[] = testData
  score: number = 0
  result: string = ""
  radioValue: string= ""
  constructor() { }

  ngOnInit(): void {
  }
  answer(e: any){
    let id = parseInt(e.target.name)
    let ans = e.target.value
    let cans: Test[] = this.test.filter(t=> t.id == id)
    let attempt: number[]
    console.log(cans);

    for (const t of cans) {
      (t.answer == ans) ? this.score++ : 0
    }
    
    // display result upon score
    (this.score >= 5) ? this.result ="Pass" : this.result = "Fail"

  }
}
