import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit, AfterViewInit {

  @ViewChild(MatInput) input!: MatInput;
  @ViewChild(NgxMaterialTimepickerComponent) timepicker!: NgxMaterialTimepickerComponent;

  @Input() timeInput: string = "";
  @Input() min: string = "00:00";
  @Input() max: string = "";
  @Input() idx1: number | null = null;
  @Input() idx2: number | null = null;
  @Input() denyOpen: boolean = false;
  @Input() disabled: boolean = false;
  @Output() timeOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.timeOutput.emit([this.input.value, this.idx1, this.idx2].join(","))
  }

  onClosedEvent() {
    this.timeOutput.emit([this.input.value, this.idx1, this.idx2].join(","))
  }

  open() {
    if(this.denyOpen){
      try {
        this.timepicker.close()
      } catch (error) {

      }
    }else{
      this.timepicker.open()
    }
  }

  preventOpen() {
    if(this.denyOpen){
      try {
        this.timepicker.close()
      } catch (error) {

      }
    }
  }

}
