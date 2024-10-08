import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
#apiService = inject(ApiServiceService)
educations = this.#apiService.getEducation().educations;
professionalDevelopment = this.#apiService.getProfessionalDevelopment().professionalDevelopment
}
