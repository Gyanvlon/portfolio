import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { EducationComponent } from "../education/education.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [EducationComponent, ProjectsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
#ApiService = inject(ApiServiceService)
skills = this.#ApiService.getTechnicalSkills().technicalSkills 
}
