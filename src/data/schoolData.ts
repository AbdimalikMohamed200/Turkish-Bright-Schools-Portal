import { Program, StatItem, CampusFacility } from '../types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzMSx6-wXpu9t3pjsOAOmyyPgsJ_-aqDc_n22MbwpnyVcDTOEvkkCZYfuAkUliqPaQkVoE1dmvOKM_bV3jm3N4swCqie_nk0AtxBFXhyNwDxWy7raFQbxYtZGGpB3S9PrLYhJ9zeausl-1Zy6B0-fOdsU3qj282-y0UzqeyG4OK0vBF7xA96zc8_VaQ266cPPx9OoLI-MsxgT0hic5pLe5Um-On0KmeLDBMPslTMvO-jLm974oDm7m';

export const CLASSROOM_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAazOtN4Y36Jd-XaGrKmwzPtN96Xh9dp4fEHyqq_oT8u_ZzZGtiLhkAFpYPP1KTk453_LGyfjF3MJBVCaKi_Tzd2u4ooWySK0COYnOf9Tf09xWaCsIgEhv0Y-e0xlZ6SvHOG7O4s5BEjWyH253lveibLXhQfyJYhSC11Eg7stFN7lxhVDdudTtqvDlvdbv4kVLGhy7D0-HZe1mm-L3eFjNx_DfsmxH3hhYEktZtnV1d_mEVgdUkopNv';

export const SCHOOL_STATS: StatItem[] = [
  {
    id: 'experience',
    label: 'Years Experience',
    value: '15+',
    iconName: 'school',
    subtext: 'Pioneering Turkish-Somali academic standards since 2009',
  },
  {
    id: 'students',
    label: 'Students',
    value: '2,500+',
    iconName: 'groups',
    subtext: 'Thriving across Kindergarten, Primary and High School campuses',
  },
  {
    id: 'success',
    label: 'Success Rate',
    value: '100%',
    iconName: 'workspace_premium',
    subtext: 'High school graduation and university admission placement',
  },
  {
    id: 'faculty',
    label: 'Faculty Members',
    value: '85+',
    iconName: 'award',
    subtext: 'Certified international and Turkish pedagogical experts',
  },
];

export const ACADEMIC_PROGRAMS: Program[] = [
  {
    id: 'kindergarten',
    name: 'Kindergarten',
    ageGroup: 'Ages 3 - 5 Years',
    grades: 'Pre-K to KG2',
    description: 'Laying the foundation for a lifetime of learning through play, discovery, and structured activities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpVHVCb8gqs9qIMsliTHfYMoVw7ZjLfkO_bL2SYgSXTQV6gzxZwx_GDttldNdIEe7U0pQdM6h4wopSkHzZfmj3B_nymcbJzkwPOLthZOV9h8o6NvaImFsAzetKCuBB8h9M_BfuvBXRNCw8-Wjfcsh7bmhBuMFxuoxbn9b-1YzEhGKMvPfIYquJZZWPhWBiEOpIfcTJNoua5eeyPWTeFGAjmlh3niI5m6V5E-nogtr_5jRsFKligDOz',
    badgeColor: 'bg-primary text-white',
    weeklyHours: 28,
    curriculumOverview: 'Our early years curriculum is inspired by internationally accredited early childhood education methods combined with Turkish preschool standards. Children develop curiosity, emotional intelligence, and multilingual basic foundations in a safe, colorful, and engaging space.',
    coreSubjects: [
      'Early Numeracy & Spatial Awareness',
      'Phonics & Storytelling',
      'Sensory Discovery & Science Exploration',
      'Fine & Gross Motor Development',
      'Artistic Expression & Music',
      'Social-Emotional Learning & Ethics',
    ],
    languages: [
      { name: 'English', description: 'Primary instructional medium for stories, vocabulary, and games.' },
      { name: 'Turkish', description: 'Daily conversational immersion with native Turkish early childhood teachers.' },
      { name: 'Somali', description: 'Mother tongue preservation and cultural enrichment.' },
      { name: 'Arabic', description: 'Basic Quranic phonetics and introductory letters.' },
    ],
    keyFeatures: [
      'Child-safe indoor playground & sensory discovery room',
      '1:8 Teacher-to-student nurturing ratio',
      'Healthy nutritional meals planned with pediatric nutritionists',
      'Daily physical coordination & creative music sessions',
    ],
  },
  {
    id: 'primary',
    name: 'Primary School',
    ageGroup: 'Ages 6 - 13 Years',
    grades: 'Grade 1 - Grade 8',
    description: 'Developing core competencies in STEM, languages, and humanities with a focus on critical thinking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtx5XtI3ZsPk3a_s_MQRWiwA6A0NJFRxMxiH2jlQneka-vaGgrwMJCT7g0CABNYLoZa1-TMYYjfPleGWXtj-Utgad4l_a4BlvvDjR9n5-QP5G3gtgKDJreaCUp0b7VqPJPKxV3DBp2gvHHkTPZ-xcJ7cUUHTJw-MzcwiYdjeNU5PfvB7KPPINgxwrmUUg_eqm3hDD30_ymHytl9uVILnKHt3P7RboWP2-L779XrbAdaZSA4IZHZlWV',
    badgeColor: 'bg-secondary text-white',
    weeklyHours: 35,
    curriculumOverview: 'A rigorous dual-track syllabus blending Cambridge Primary standards with Turkish Ministry of Education pedagogical frameworks. Students are guided to think critically, question thoughtfully, and gain deep mastery in mathematics and science while building strong moral character.',
    coreSubjects: [
      'Mathematics & Mental Arithmetic',
      'General Sciences & Hands-on Laboratory Experiments',
      'Information & Communication Technology (ICT) & Scratch Coding',
      'Social Studies, History & Geography',
      'Physical Education & Team Sports',
      'Islamic Studies & Ethics',
    ],
    languages: [
      { name: 'English', description: 'Academic medium for Science, Math, and Global perspectives.' },
      { name: 'Turkish', description: 'TÖMER-certified language track with grammar, reading, and culture.' },
      { name: 'Somali', description: 'Somali Literature, heritage studies, and local history.' },
      { name: 'Arabic', description: 'Classical grammar, Tajweed, and Islamic literacy.' },
    ],
    keyFeatures: [
      'Modern dedicated computer suite & beginner robotics kits',
      'Interactive smart boards in every primary classroom',
      'Annual Science & Innovation fair for young inventors',
      'Reading buddy clubs and bilingual debate competitions',
    ],
  },
  {
    id: 'high-school',
    name: 'High School',
    ageGroup: 'Ages 14 - 18 Years',
    grades: 'Grade 9 - Grade 12',
    description: 'Rigorous university preparation programs, leadership development, and advanced academic placement.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHoTQ9WEWMCtyP-qo8xGkf507VnHmHesXn3ABxoloK30s2XVEPPqbpjXRliRshX1C9zDrKr2TXLRtq1o8mrE9pCDfT897lfqwLnupdZsbrhtWDgSnIQjeWtKY1wxMqNQVpRjxje8ur7uG_oD44d-J6HPyw4qYGsUkcAeytCClKagltw_2k3epw-sSZ2eP_h4JPhlhdmnfFM1xC6ZQqOdG3UIBJ6RYLBMBjsnfWIDgNOBN2H3B6WXes',
    badgeColor: 'bg-primary-container text-white',
    weeklyHours: 40,
    curriculumOverview: 'An elite pre-university academy preparing Somali students for global scholarship opportunities, Turkish Government Scholarships (Türkiye Bursları), Turkish Universities YÖS exams, and Western higher education admissions. Focus is placed on Olympiad preparation, advanced STEM, and ethical leadership.',
    coreSubjects: [
      'Advanced Mathematics, Calculus & Statistics',
      'Physics, Chemistry & Biology with University-grade Labs',
      'Computer Science, Python & Robotics Engineering',
      'World Literature & Critical Writing',
      'Economics, Leadership & Public Speaking',
      'Civics, Philosophy & Global Affairs',
    ],
    languages: [
      { name: 'English', description: 'TOEFL/IELTS preparation and academic research writing.' },
      { name: 'Turkish', description: 'C1 Fluency for direct undergraduate admission without prep year.' },
      { name: 'Somali', description: 'Somali National Curriculum final examination compliance.' },
      { name: 'Arabic', description: 'Advanced comprehension and historical Islamic jurisprudence.' },
    ],
    keyFeatures: [
      'Dedicated Türkiye Bursları & international scholarship advisory desk',
      'International Science Olympiad coaching (Math, Physics, Informatics)',
      'Modern digital library with global academic database subscriptions',
      'Career internships and alumni mentorship network in Istanbul & Ankara',
    ],
  },
];

export const FACILITIES: CampusFacility[] = [
  {
    title: 'Advanced Science & Robotics Labs',
    description: 'Fully equipped physics, chemistry, biology, and robotics laboratories with modern experiment apparatus.',
    tag: 'STEM Innovation',
    icon: 'FlaskConical',
  },
  {
    title: 'Digital Resource Library',
    description: 'Over 15,000 multilingual titles, quiet study pods, and high-speed terminals for student research.',
    tag: 'Knowledge Center',
    icon: 'BookOpen',
  },
  {
    title: 'Smart Interactive Classrooms',
    description: 'Climate-controlled classrooms with interactive smart panels, ergonomic seating, and optical natural lighting.',
    tag: 'Modern Learning',
    icon: 'MonitorPlay',
  },
  {
    title: 'Sports Arena & Recreation',
    description: 'Futsal court, basketball court, table tennis hall, and shaded recreational green spaces.',
    tag: 'Athletics & Health',
    icon: 'Trophy',
  },
];

export const CAMPUS_LOCATIONS = [
  {
    name: 'Hodan Main Campus',
    district: 'Hodan District, Mogadishu',
    address: 'Near Digfeer Hospital Road, Hodan, Mogadishu, Somalia',
    levels: 'High School & Secondary Academy',
    phone: '+252 61 700 1122',
    email: 'hodan@turkishbrightschools.so',
  },
  {
    name: 'Wadajir Campus',
    district: 'Wadajir District, Mogadishu',
    address: 'Airport Road / Medina Gate, Wadajir, Mogadishu, Somalia',
    levels: 'Kindergarten & Primary School',
    phone: '+252 61 700 1133',
    email: 'wadajir@turkishbrightschools.so',
  },
];
