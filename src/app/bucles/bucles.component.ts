import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
    personas: Persona[] = [
      {nombre: 'Juan', edad: 20},
      {nombre: 'Ana', edad: 25},
      {nombre: 'Luis', edad: 30},
      {nombre: 'María', edad: 35}
    ];

      

}
