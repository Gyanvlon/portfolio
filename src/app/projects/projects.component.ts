import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [EducationComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
#apiService = inject(ApiServiceService)
projects = this.#apiService.getProfessionalExperience().professionalExperience;
}
