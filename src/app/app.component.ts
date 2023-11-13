import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'custom-angular-pipe';

  ngOnInit() {
    this.fizzBuzz(0);
    this.fizzBuzz(1);
    this.fizzBuzz(3);
    this.fizzBuzz(5);
    this.fizzBuzz(15);
  }

  fizzBuzz(n) {
    // Do your code here

    const result = [];

    if (n===0) {
      return result;
    }

    for (let i = 0; i < n; i++) {

      // if(i === 1) {
      //   result[0] = "fizzbuzz";
      // }

      if (i % 15 === 0) {
        result.push("fizzbuzz");

      } else if (i % 3 === 0) {
        result.push("fizz");

      } else if (i % 5 === 0) {
        result.push("buzz");

      } else {
        result.push("");
      }
    }
    console.log(n, result)
    return result;
  }
}
