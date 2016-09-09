import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero }           from './hero';
@Injectable()
export class HeroSearchService {
  private heroesUrl = 'http://localhost:8080/api/hero/heroesSearch';
  
  constructor(private http: Http) {}
  
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(this.heroesUrl + `/${term}`)
               .map((r: Response) => r.json() as Hero[]);
  }
  
}
