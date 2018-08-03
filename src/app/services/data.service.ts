import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: Http) { 

  }

  getText(lang: string, file: string) {
    return this.http.get('assets/data/' + lang + '/' + file + '.txt').pipe(map(res=>res.text().replace("\r\n", "<br>").replace("\n", "<br>").replace("\t", "　　")));
  }

  getList(lang: string, file: string) {
    return this.http.get('assets/data/' + lang + '/' + file + '.json').pipe(map(res=>res.json()));
  }

  getDetail(lang: string, file: string, id: number) {
    return this.http.get('assets/data/' + lang + '/' + file  + '.json').pipe(map(res=>res.json()[id - 1]));
  }
}
