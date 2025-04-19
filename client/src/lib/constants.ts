// Services
export const SERVICES = [
  {
    id: 1,
    title: "Consultancy",
    description: "Expert guidance on welding process optimization, quality control, compliance, and project management.",
    icon: "fas fa-comments",
    backgroundImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Training & Certification",
    description: "Comprehensive welding training programs and certifications designed to develop and validate professional skills.",
    icon: "fas fa-graduation-cap",
    backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112c4e22c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Calibration",
    description: "Precision calibration services for welding equipment and tools, ensuring accuracy and compliance.",
    icon: "fas fa-cogs",
    backgroundImage: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    title: "N.D.T. (Non-Destructive Testing)",
    description: "Advanced testing methods including ultrasonic, radiographic, magnetic particle, and dye penetrant testing.",
    icon: "fas fa-search",
    backgroundImage: "https://images.unsplash.com/photo-1622219769396-5d76c65426bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    title: "Welding Placement",
    description: "Connecting skilled welders with industry opportunities through our specialized placement services.",
    icon: "fas fa-users-cog",
    backgroundImage: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    title: "Quality Inspection",
    description: "Comprehensive inspection services to ensure welds meet industry standards and specifications.",
    icon: "fas fa-clipboard-check",
    backgroundImage: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Features
export const FEATURES = [
  {
    id: 1,
    title: "Industry Expertise",
    description: "Our team brings decades of experience in welding inspection, training, and consultancy.",
    icon: "fas fa-certificate"
  },
  {
    id: 2,
    title: "Comprehensive Services",
    description: "From training to testing, we provide all the welding services you need under one roof.",
    icon: "fas fa-tools"
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "We maintain the highest standards in all services, ensuring excellence at every step.",
    icon: "fas fa-check-circle"
  },
  {
    id: 4,
    title: "Experienced Team",
    description: "Our instructors and inspectors are certified professionals with hands-on industry experience.",
    icon: "fas fa-users"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    text: "National Inspection's training program completely transformed our welding processes. Their instructors were knowledgeable and patient, ensuring everyone on our team mastered the techniques.",
    name: "John Martinez",
    position: "Manufacturing Manager, Industrial Solutions Inc.",
    initials: "JM"
  },
  {
    id: 2,
    text: "The consultancy services provided by National Inspection helped us identify critical issues in our welding procedures. Their expertise and attention to detail saved us both time and resources.",
    name: "Sarah Chen",
    position: "Operations Director, Precision Engineering Ltd",
    initials: "SC"
  },
  {
    id: 3,
    text: "Thanks to National Inspection's placement services, we were able to find highly qualified welders for our project on short notice. The quality of candidates exceeded our expectations.",
    name: "Robert Johnson",
    position: "HR Manager, Structural Dynamics Co.",
    initials: "RJ"
  }
];

// Courses
export const COURSES = [
  {
    id: 1,
    title: "Introduction to Welding Techniques",
    category: "Basic Welding Techniques",
    duration: "5 Days",
    level: "Beginner Level",
    price: 1200,
    popular: true,
    description: "A comprehensive introduction to fundamental welding processes including MIG, TIG, and stick welding. This course covers equipment setup, basic techniques, and safety protocols.",
    learningOutcomes: [
      "Equipment setup and maintenance",
      "Basic welding techniques",
      "Material preparation",
      "Safety protocols",
      "Troubleshooting common issues",
      "Quality assessment basics"
    ]
  },
  {
    id: 2,
    title: "Advanced Welding Certification",
    category: "Advanced Welding Processes",
    duration: "10 Days",
    level: "Intermediate Level",
    price: 2800,
    certification: true,
    description: "Advance your welding career with this comprehensive certification program covering specialized techniques, code compliance, and quality control procedures.",
    learningOutcomes: [
      "Advanced welding techniques",
      "Code and standard compliance",
      "Welding procedure specifications",
      "Quality control processes",
      "Defect identification and correction",
      "Certification preparation and testing"
    ]
  },
  {
    id: 3,
    title: "Welding Inspector Training",
    category: "Welding Inspection",
    duration: "7 Days",
    level: "Advanced Level",
    price: 2400,
    description: "Train to become a certified welding inspector with this comprehensive program covering inspection techniques, code requirements, and quality assessment.",
    learningOutcomes: [
      "Visual inspection techniques",
      "Welding code interpretation",
      "Defect identification and evaluation",
      "Documentation and reporting",
      "Basic NDT techniques",
      "Inspector certification preparation"
    ]
  }
];

// Course Categories
export const COURSE_CATEGORIES = [
  "Basic Welding Techniques",
  "Advanced Welding Processes",
  "Welding Inspection",
  "NDT Certification",
  "Quality Control",
  "Safety Standards"
];

// Contact Information
export const CONTACT_INFO = {
  address: "123 Welding Street, Industrial Zone\nHouston, TX 77001, USA",
  phone: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  email: ["info@nationalinspection.com", "training@nationalinspection.com"],
  hours: [
    "Monday - Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 1:00 PM",
    "Sunday: Closed"
  ]
};

// Form subjects
export const CONTACT_SUBJECTS = [
  { value: "consultancy", label: "Consultancy Services" },
  { value: "training", label: "Training & Certification" },
  { value: "calibration", label: "Calibration Services" },
  { value: "ndt", label: "Non-Destructive Testing" },
  { value: "placement", label: "Welding Placement" },
  { value: "other", label: "Other" }
];
