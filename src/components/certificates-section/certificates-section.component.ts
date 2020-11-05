import { Component, OnInit } from '@angular/core';
import {certificatesObject} from '../../assets/objects/certificates'

@Component({
  selector: 'app-certificates-section',
  templateUrl: './certificates-section.component.html',
  styleUrls: ['./certificates-section.component.css']
})
export class CertificatesSectionComponent implements OnInit {
  certificates:object;
  constructor() { 

    this.certificates = certificatesObject;

  }

  ngOnInit(): void {
  }

}
