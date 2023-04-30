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
    console.log('Función search llamada con el valor:', query);
    this.http.get(`https://api.punkapi.com/v2/beers?food=${query}`).subscribe(data => {
      console.log('Respuesta de la API:', data);
      this.beer = data;
    });
  }

  sendData(event: KeyboardEvent) {
    const query = (event.target as HTMLInputElement).value;
    console.log('Valor del input:', query);
    this.search(query);

  }
}
