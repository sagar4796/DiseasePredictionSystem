import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-patient-actions',
  templateUrl: './patient-actions.component.html',
  styleUrls: ['./patient-actions.component.css']
})
export class PatientActionsComponent implements OnInit {

  @Output()    featureSelected = new EventEmitter<string>();


  // tslint:disable-next-line:typedef
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
