import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DATA } from './Shared/Data';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private infoSubject = new BehaviorSubject<{ name: string; position: string }>({
    name: DATA.name,
    position: DATA.position
  });
  #http = inject(HttpClient)
  constructor() { }
  getInfo() {
    return {
      name: DATA.name,
      position: DATA.position
    };
  }
  sendMessage(data: any){
     return this.#http.post("https://88fl2lafib.execute-api.us-east-1.amazonaws.com/v1/messages", data)
  }
  getSummary(){
    return { overview: DATA.summary}
  }
  getProfessiionalExpertise(){
    return {professionalExpertise:DATA.professional_expertise}
  }
  getTechnicalSkills(){
    return {technicalSkills:DATA.technical_skills}
  }
  getProfessionalExperience(){
    return {professionalExperience:DATA.professional_experience}
  }

  getEducation(){
    return { educations: DATA.education}
  }
 getProfessionalDevelopment(){
  return {professionalDevelopment: DATA.professional_development}
 }
 getContact(){
  return {contactDetail: DATA.contact}
 }
 getProjects(){
  return {projects: DATA.academic_projects}
 }
}
