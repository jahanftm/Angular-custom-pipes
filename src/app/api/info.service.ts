import {Injectable} from "@angular/core";
import {BaseApiClient} from "./base-api-client";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class InfoService extends BaseApiClient{

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  geInfo(): Observable<any> {
    return this.get('https://62ea53abad2954632589dafd.mockapi.io/api/pip/user_info');
  }
}
