import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dato-individual-card',
  templateUrl: './dato-individual-card.component.html',
  styleUrls: ['./dato-individual-card.component.scss']
})
export class DatoIndividualCardComponent implements OnInit{

  @Input() key : string = "";
  @Input() value : string | number = "";
  @Input() icon : string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
