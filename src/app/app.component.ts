import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'automata';
  status: boolean;
  terminal: boolean;
  timeExecute: any;
  contenido: any;
  vocabulario = [];
  estadoInicio;
  estadoActual;
  estadoFinal = [];
  contador;
  fin: boolean;
  err: string;

  constructor() {
    this.status = false;
    this.contenido = 'Palabras reservadas admitibles: \n' +
      '1.- case \n' +
      '2.- catch \n' +
      '3.- char';
    this.vocabulario = ['c','a','s','e','t','c','h','r'];
    this.estadoFinal = [6,8,10];
    this.contador = 0;
  }

  main(value: string) {
    this.updateValue();
   /* value = value.replace(/ /g, '');
    value = value.replace(/(\r\n|\n|\r)/gm, '');*/
    let start = performance.now();

    while (!this.fin){
      if(this.contador > value.length - 1){
        this.fin = true;
        break;
      }

      if(this.estadoActual == 0){
        if(this.vocabulario[0] == value.charAt(this.contador)){
          this.estadoActual = 1;
        } else {
          this.err += value.charAt(this.contador);
          this.contador = value.length;
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 1){
        if(this.vocabulario[1] == value.charAt(this.contador)){
          this.estadoActual = 2;
        } else {
          if(this.vocabulario[6] == value.charAt(this.contador)){
            this.estadoActual = 3;
          } else {
            this.err += value.charAt(this.contador);
            this.contador = value.length;
          }
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 2){
        if(this.vocabulario[2] == value.charAt(this.contador)){
          this.estadoActual = 4;
        } else {
          if(this.vocabulario[4] == value.charAt(this.contador)){
            this.estadoActual = 5;
          } else {
            this.err += value.charAt(this.contador);
            this.contador = value.length;
          }
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 4){
        if(this.vocabulario[3] == value.charAt(this.contador) && value.length - 1 == this.contador){
          this.estadoActual = 6;
        } else {
          this.err += value.charAt(this.contador);
          this.contador = value.length;
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 5){
        if(this.vocabulario[5] == value.charAt(this.contador)){
          this.estadoActual = 7;
        } else {
          this.err += value.charAt(this.contador);
          this.contador = value.length;
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 3){
        if(this.vocabulario[1] == value.charAt(this.contador)){
          this.estadoActual = 9;
        } else {
          this.err += value.charAt(this.contador);
          this.contador = value.length;
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 7){
        if(this.vocabulario[6] == value.charAt(this.contador) && value.length - 1 == this.contador){
          console.log(value.charAt(this.contador));
          this.estadoActual = 8;
        } else {
          this.err += value.charAt(this.contador);
          this.contador = value.length;
        }
        this.contador++;
        continue;
      }

      if(this.estadoActual == 9){
        if(this.vocabulario[7] == value.charAt(this.contador) && value.length - 1 == this.contador){
          this.estadoActual = 10;
        } else {
          this.err += value.charAt(this.contador);
          this.contador = value.length;
        }
        this.contador++;
      }

      if (this.estadoActual == 6 && value.length - 1 == this.contador){
        this.contador++;
      } else {
        this.contador = value.length;
      }

      if (this.estadoActual == 8 && value.length - 1 == this.contador){
        this.contador++;
      } else {
        this.contador = value.length;
      }

      if (this.estadoActual == 10 && value.length - 1 == this.contador){
        this.contador++;
      } else {
        this.contador = value.length;
      }

    }

    let end = performance.now();
    this.timeExecute = end - start;
    this.timeExecute = this.timeExecute.toFixed(4);
    if (this.estadoActual == this.estadoFinal[0] || this.estadoActual == this.estadoFinal[1] || this.estadoActual == this.estadoFinal[2]){
      this.status = true;
    } else {
      if (this.err != ' ') {
        this.err = 'No se ha reconocido el siguiente patrón de simbolos: ' + this.err;
      } else {
        this.err = 'Los simbolos/caracteres ingresados son correctos, pero no concluye con respecto a la estructura correcta';
      }
    }
  }

  terminalOpen() {
    this.terminal = !this.terminal;
  }

  updateValue() {
    this.contador = 0;
    this.estadoActual = 0;
    this.estadoInicio = this.estadoActual;
    this.status = false;
    this.fin = false;
    this.timeExecute = 0;
    this.err = '';
  }


}
