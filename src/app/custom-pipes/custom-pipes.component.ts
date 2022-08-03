import {Component, OnInit} from '@angular/core';
import {InfoService} from "../api/info.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  text: string = '';

  timestamp: number =0;

  users$: Observable<any>;

  constructor(private infoServiceApi: InfoService) {
  }

  ngOnInit(): void {
    this.timestamp = + new Date();
    this.getUsersAsyncPipe()

  }

  public getUsersAsyncPipe() {
    this.users$ = this.infoServiceApi.geInfo();
  }

}
