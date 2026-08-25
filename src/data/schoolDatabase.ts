export interface GPAAchiever {
  name: string;
  gpa: string;
  year: string;
  village: string; // Khammam parents love seeing local village representations
}

export interface Program {
  title: string;
  description: string;
  badge?: string;
}

export const SCHOOL_DATA = {
  basicInfo: {
    name: "Balaji High School",
    teluguName: "బాలాజి హై స్కూల్",
    tagline: "Nurturing Character, Intellect & Leadership Since 1998",
    affiliation: "Recognized by Govt. of Telangana | Co-Educational",
    board: "TS SSC Board Curriculum (English & Telugu Medium)",
    udiseCode: "36222401XXX (Mock Code)",
    address: "Opp. Govt. Hospital Road, Kalluru, Khammam District, Telangana - 507209",
    phone: "+91 9440X XXXXX / +91 8919X XXXXX",
    email: "contact@balajihskalluru.edu.in",
  },
  achievers: [
    { name: "K. Tejaswini", gpa: "10/10 GPA", year: "2023-24", village: "Kalluru Town" },
    { name: "Banoth Naveen", gpa: "10/10 GPA", year: "2023-24", village: "Sattupalli Road GP" },
    { name: "M. Deepika", gpa: "9.8 GPA", year: "2023-24", village: "Chinnakorukondi" },
    { name: "Shaik Sameer", gpa: "9.8 GPA", year: "2022-23", village: "Yerraboinapalli" }
  ] as GPAAchiever[],
  academicPrograms: [
    {
      title: "IIT-JEE & NEET Foundation Program",
      description: "Rigorous scientific aptitude training commencing early from Class VI. Conceptual mathematics, physical sciences, and logical reasoning modules designed by regional experts.",
      badge: "High Demand"
    },
    {
      title: "TS SSC Board Secondary School",
      description: "Comprehensive English & Telugu medium learning tracks adhering fully to the Telangana SCERT guidelines. Proven record of top-tier GPA performance in regional public examinations.",
      badge: "State Syllabus"
    },
    {
      title: "Digital Smart-Classroom Curriculum",
      description: "Classrooms integrated with advanced visual projection modules to demystify complex science theories and spatial geometry.",
      badge: "Modern Infrastructure"
    }
  ] as Program[],
  events: [
    {
      title: "Bathukamma Sambaralu",
      date: "October 2024",
      desc: "Our annual grand celebration of Telangana's floral festival. Inspiring respect for cultural roots and environmental conservation among young students."
    },
    {
      title: "National Science Day Exhibition (Kalluru Mandal Level)",
      date: "February 28, 2024",
      desc: "Balaji students secured 1st prize for their smart-irrigation and crop protection system engineered specifically for Khammam's agricultural issues."
    }
  ]
};
