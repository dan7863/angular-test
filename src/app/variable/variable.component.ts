import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrl: './variable.component.css'
})
export class VariableComponent {
  openAlert: boolean = false;
  
  mostrar_en_consola(name: string){
    console.log(name);

    this.openAlert = true;
  }
}
