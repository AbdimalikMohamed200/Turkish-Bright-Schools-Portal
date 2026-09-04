import { Program, StatItem, CampusFacility } from '../types';

export const SCHOOL_LOGO = '/school/turkish-bright-logo.jpg';
export const OFFICIAL_FACEBOOK_URL = 'https://www.facebook.com/Turkishbrightschools';
export const SCHOOL_PHONE_PRIMARY = '+252 610 757575';
export const SCHOOL_PHONE_SECONDARY = '+252 610 858585';
export const SCHOOL_HOURS = 'Mon-Wed, Sat-Sun: 7:00 AM - 5:00 PM | Thu: 8:00 AM - 3:00 PM';

// The official public page currently exposes the school mark, not a downloadable gallery.
// Use the mark as a reliable brand fallback until the school supplies approved photos.
export const HERO_IMAGE = SCHOOL_LOGO;
export const CLASSROOM_IMAGE = SCHOOL_LOGO;

export const SCHOOL_STATS: StatItem[] = [
  {
    id: 'locations',
    label: 'Mogadishu Locations',
    value: '3',
    iconName: 'school',
    subtext: 'Hodan and Daarusalaam locations are listed in the school updates.',
  },
  {
    id: 'contact-lines',
    label: 'Official Contact Lines',
    value: '2',
    iconName: 'groups',
    subtext: 'Call or WhatsApp the school on 0610 757575 or 061 0858585.',
  },
  {
    id: 'learning-focus',
    label: 'Learning Focus',
    value: '2',
    iconName: 'workspace_premium',
    subtext: 'Academic education together with Quranic and Islamic learning.',
  },
  {
    id: 'grade-eight',
    label: 'Grade 8 Update',
    value: '100%',
    iconName: 'award',
    subtext: 'The school announced a full pass result for its Grade 8 candidates in 2025.',
  },
];

export const ACADEMIC_PROGRAMS: Program[] = [
  {
    id: 'kindergarten',
    name: 'Early Learning',
    ageGroup: 'Early years placement',
    grades: 'Ask admissions',
    description: 'A supportive start that combines classroom learning, good manners, and a love of discovery.',
    image: SCHOOL_LOGO,
    badgeColor: 'bg-primary text-white',
    weeklyHours: 0,
    curriculumOverview: 'Contact Turkish Bright Schools for the current early learning intake, placement requirements, and timetable.',
    coreSubjects: ['Early academic foundations', 'Quran and Islamic manners', 'Creative student activities'],
    languages: [
      { name: 'Academic learning', description: 'Core classroom learning is shaped around each learner level.' },
      { name: 'Religious learning', description: 'Quran reading and Islamic manners are part of the school identity.' },
    ],
    keyFeatures: ['Child-focused learning environment', 'Quran and Islamic manners', 'Creative and confidence-building activities'],
  },
  {
    id: 'primary',
    name: 'Primary & Middle School',
    ageGroup: 'School-age learners',
    grades: 'Grade 1 - Grade 8',
    description: 'Academic and religious education that helps learners grow in knowledge, character, and confidence.',
    image: SCHOOL_LOGO,
    badgeColor: 'bg-secondary text-white',
    weeklyHours: 0,
    curriculumOverview: 'The public school updates highlight academic and religious education, student activities, and preparation for Grade 8 examinations.',
    coreSubjects: ['Academic education', 'Quran and Islamic Studies', 'Character and manners', 'Student activities'],
    languages: [
      { name: 'Academic learning', description: 'Classroom study and preparation for school examinations.' },
      { name: 'Quranic learning', description: 'Quran recitation and Islamic manners support the whole-child approach.' },
    ],
    keyFeatures: ['Grade 8 examination preparation', 'Quran and Islamic learning', 'Creativity, play, and student confidence'],
  },
  {
    id: 'high-school',
    name: 'Secondary Placement',
    ageGroup: 'Placement details on request',
    grades: 'Contact admissions',
    description: 'Speak with the school directly about current secondary-level availability and the right placement for your child.',
    image: SCHOOL_LOGO,
    badgeColor: 'bg-primary-container text-white',
    weeklyHours: 0,
    curriculumOverview: 'The public page does not publish a secondary timetable or subject list. Admissions can confirm the current programme and requirements.',
    coreSubjects: ['Academic programme information', 'Religious learning', 'Placement guidance', 'Family support'],
    languages: [
      { name: 'Academic track', description: 'Ask admissions for current subjects and grade availability.' },
      { name: 'Character development', description: 'Learning is presented together with values, manners, and responsibility.' },
    ],
    keyFeatures: ['Direct placement guidance', 'Academic and religious education', 'Contact-first admissions support'],
  },
];

export const FACILITIES: CampusFacility[] = [
  {
    title: 'Academic & Religious Learning',
    description: 'A learning programme that brings school subjects together with Quranic and Islamic education.',
    tag: 'Education',
    icon: 'BookOpen',
  },
  {
    title: 'Character & Islamic Manners',
    description: 'Students are encouraged to grow in knowledge, good conduct, confidence, and respect for others.',
    tag: 'Values',
    icon: 'ShieldCheck',
  },
  {
    title: 'Creativity & Student Activities',
    description: 'School activities make learning active, joyful, and connected to students\' everyday development.',
    tag: 'Enrichment',
    icon: 'Sparkles',
  },
  {
    title: 'Grade 8 Exam Support',
    description: 'The school shares examination updates and celebrates learners\' progress with families and the community.',
    tag: 'Achievement',
    icon: 'Trophy',
  },
];

export const CAMPUS_LOCATIONS = [
  {
    name: 'Hodan - Wadada Cabdiqasim',
    district: 'Hodan District, Mogadishu',
    address: 'Wadada Cabdiqasim, Mogadishu, Somalia',
    levels: 'School location',
    phone: `${SCHOOL_PHONE_PRIMARY} / ${SCHOOL_PHONE_SECONDARY}`,
    email: '',
  },
  {
    name: 'Hodan - Behind Hodan Hospital',
    district: 'Hodan District, Mogadishu',
    address: 'Behind Hodan Hospital, Mogadishu, Somalia',
    levels: 'School location',
    phone: `${SCHOOL_PHONE_PRIMARY} / ${SCHOOL_PHONE_SECONDARY}`,
    email: '',
  },
  {
    name: 'Daarusalaam - Near Buruuji',
    district: 'Daarusalaam, Mogadishu',
    address: 'Near Buruuji, Daarusalaam, Mogadishu, Somalia',
    levels: 'School location',
    phone: `${SCHOOL_PHONE_PRIMARY} / ${SCHOOL_PHONE_SECONDARY}`,
    email: '',
  },
];
