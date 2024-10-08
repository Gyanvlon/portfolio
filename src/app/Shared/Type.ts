export interface Contact {
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  }
  
  export interface ProfessionalExperience {
    company: string;
    location: string;
    dates: string;
    projects: string[];
    role: string;
    responsibilities: string[];
    technologies_used: string[];
  }
  
  export interface AcademicProject {
    title: string;
    institution: string;
    date: string;
    description: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    location: string;
    date: string;
    gpa: number;
  }
  
  export interface ProfessionalDevelopment {
    title: string;
    url: string;
  }
  
  export interface TechnicalSkills {
    languages: string[];
    web: string[];
    web_services: string[];
    frameworks: string[];
    design_approach: string[];
    databases: string[];
    testing_frameworks: string[];
    messaging: string[];
    containerization: string[];
    design_patterns: string[];
    tools: string[];
    development_methodologies: string[];
    cloud_technologies: string[];
    operating_systems_platforms: string[];
  }
  
  export interface Data {
    name: string;
    contact: Contact;
    position: string;
    availability: string;
    summary: string;
    professional_expertise: string[];
    technical_skills: TechnicalSkills;
    professional_experience: ProfessionalExperience[];
    academic_projects: AcademicProject[];
    education: Education[];
    professional_development: ProfessionalDevelopment[];
  }
  