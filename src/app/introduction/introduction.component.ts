import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  #apiService = inject(ApiServiceService)
  intro = this.#apiService.getSummary();
  professionalExpertise = this.#apiService.getProfessiionalExpertise();
}
