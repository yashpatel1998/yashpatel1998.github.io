import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CertificatesSectionComponent } from '../components/certificates-section/certificates-section.component';
import { HobbiesSectionComponent } from '../components/hobbies-section/hobbies-section.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsSectionComponent } from '../components/skills-section/skills-section.component';
import { WorkSectionComponent } from '../components/work-section/work-section.component';
import { EducationSectionComponent } from '../components/education-section/education-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificatesSectionComponent,
    HobbiesSectionComponent,
    SkillsSectionComponent,
    WorkSectionComponent,
    EducationSectionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
