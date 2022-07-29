import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  text: string = '';

  timestamp: number =0;

  constructor() {
  }

  ngOnInit(): void {
    this.timestamp = + new Date();
  }

}
