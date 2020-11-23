import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-patient-predict-disease',
  templateUrl: './patient-predict-disease.component.html',
  styleUrls: ['./patient-predict-disease.component.css']
})
export class PatientPredictDiseaseComponent implements OnInit {

  @Output()    featureSelected = new EventEmitter<string>();


  // tslint:disable-next-line:typedef
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
