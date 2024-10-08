import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { SkillsComponent } from "../skills/skills.component";
import { IntroductionComponent } from "../introduction/introduction.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillsComponent, IntroductionComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  #apiService = inject(ApiServiceService)
  info = this.#apiService.getInfo();
  intro = this.#apiService.getSummary();
  professionalExpertise = this.#apiService.getProfessiionalExpertise();
 downloadResume(){
    const resumeUrl = 'public/Java Full-Stck Developer.docx'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Java Full-Stck Developer.docx'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);  
 }
}
