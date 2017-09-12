/**
 * Created by zyz on 0012 2017/9/12.
 */
import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl= 'api/heroes';
  constructor(private http: Http ) {}
  getHeroes(): Promise< Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', 'error');
    return Promise.reject(error.message || error);
  }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
}
