import { Component, OnInit , Input , Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() actual : number = 1;
  @Input() ultima : number = 1;

  @Output() actualizar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  obtenerPagina(boton: string){
    switch (boton) {
      case "primera":
        this.actual = 1;
        break;
      case "anterior":
        if (this.actual > 1) --this.actual;
        break;
      case "siguiente":
        if (this.actual < this.ultima) ++this.actual;
        break;
      case "ultima":
        this.actual = this.ultima;
        break;

      default:
        break;
    }

    this.actualizar.emit(this.actual);

  }

}
