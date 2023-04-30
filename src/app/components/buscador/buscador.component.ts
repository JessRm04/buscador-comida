import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent {

  beer: any;

  constructor(private http: HttpClient) {}

  search(query: string) {
    this.http.get(`https://api.punkapi.com/v2/beers?food=${query}`).subscribe(data => {
      this.beer = data;
    });
  }

  sendData(event: KeyboardEvent) {
    const query = (event.target as HTMLInputElement).value;
    this.search(query);

  }
}
