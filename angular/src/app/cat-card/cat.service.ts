import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatService {

  constructor(private httpClient: HttpClient) { }
  private catCount = 0;
  private cats: Array<object> = [];

  /**
   * 
   * @returns a cat {url: "cat image"}
   */
  public getCat() {
    let cat = this.haveCat();
    this.catCount++;
    return cat;
  }

  private haveCat() {
    if (this.cats[this.catCount]) {
      return this.cats[this.catCount];
    } else {
      this.getMoreCats();
      return this.cats[this.catCount];
    }
  }

  private getMoreCats() {
    this.httpClient.get("https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&api_key=" + environment.API_KEY_GATINHOS).subscribe(success => {
      this.cats = this.cats.concat(this.cats, success); 
    });
  }
  
}
