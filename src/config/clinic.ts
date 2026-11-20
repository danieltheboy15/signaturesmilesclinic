import clinicHeroSuite from '../assets/clinic/clinic-hero-suite.jpg';
import clinicFamilyCare from '../assets/clinic/clinic-family-care.jpg';
import drTomiOrungbe from '../assets/clinic/dr-tomi-orungbe.jpg';
import clinicConsultationRoom from '../assets/clinic/clinic-consultation-room.jpg';
import logoLocalFallback from '../assets/clinic/signature-smiles-logo.png';
import serviceOrthodontics from '../assets/clinic/service-orthodontics.jpg';
import serviceImplants from '../assets/clinic/service-implants.jpg';
import serviceWhitening from '../assets/clinic/service-whitening.jpg';
import serviceRestorative from '../assets/clinic/service-restorative.jpg';
import serviceCrowns from '../assets/clinic/service-crowns.jpg';
import serviceGeneral from '../assets/clinic/service-general.jpg';

/**
 * CENTRAL CLINIC CONFIGURATION
 * ---------------------------------------------------------------------------
 * PRE-DEPLOYMENT VERIFICATION FLAGS:
 * 1. MONDAY CLOSING TIME: The legacy website currently lists "Monday : 9am – 5:300pm".
 *    Normalized here to "9:00 AM – 5:30 PM" to match Tuesday–Friday; confirm with
 *    clinic administration before production deployment.
 * 2. STREET ADDRESS & HOURS: Confirm "43 Diya Street, Ifako, Gbagada, Lagos, Nigeria"
 *    and Saturday hours ("10:00 AM – 4:00 PM") with the clinic before launch.
 * ---------------------------------------------------------------------------
 */

export interface BusinessHourRow {
  days: string;
  hours: string;
  requiresConfirmation?: boolean;
  confirmationNote?: string;
}

export interface TreatmentItem {
  number: string;
  slug: string;
  title: string;
  summary: string;
  focusPoints: string[];
  visitNote: string;
  image: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
}

export const CLINIC_CONFIG = {
  name: 'Signature Smiles Clinic',
  shortLocation: 'Gbagada, Lagos',
  logo: {
    src: 'https://res.cloudinary.com/dpsvazol5/image/upload/v1795195189/signature_smiles_clinic_logo_j6zw5t.png',
    fallbackSrc: logoLocalFallback,
    alt: 'Signature Smiles Clinic logo',
  },
  bookingUrl:
    'https://calendar.google.com/calendar/appointments/AcZssZ2BXIG-osGWnrPWfdt8W-2lWJ3Qn2jUtAHBcRA=',
  phoneDisplay: '+234 806 197 2139',
  phoneHref: 'tel:+2348061972139',
  address: {
    street: '43 Diya Street, Ifako',
    locality: 'Gbagada, Lagos',
    country: 'Nigeria',
    full: '43 Diya Street, Ifako, Gbagada, Lagos, Nigeria',
    requiresConfirmation: true,
    mapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=43+Diya+Street,+Ifako,+Gbagada,+Lagos,+Nigeria',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=43+Diya+Street,+Ifako,+Gbagada,+Lagos,+Nigeria',
  },
  hours: [
    {
      days: 'Monday',
      hours: '9:00 AM – 5:30 PM',
      requiresConfirmation: true,
      confirmationNote: 'Legacy site lists "5:300pm"; verify closing time before launch.',
    },
    {
      days: 'Tuesday – Friday',
      hours: '9:00 AM – 5:30 PM',
    },
    {
      days: 'Saturday',
      hours: '10:00 AM – 4:00 PM',
    },
    {
      days: 'Sunday',
      hours: 'Closed',
    },
  ] as BusinessHourRow[],
  summaryHours: 'Mon – Fri: 9:00 AM – 5:30 PM · Sat: 10:00 AM – 4:00 PM',
  leadClinician: {
    name: 'Dr. Tomi Orungbe',
    role: 'Director of Clinical Services',
    qualifications: 'BDS (Benin) · PGDip (London) · MSc (Swansea)',
    photo: {
      src: drTomiOrungbe,
      alt: 'Dr. Tomi Orungbe providing dental care under clinical lighting at Signature Smiles Clinic in Gbagada, Lagos',
      caption: 'Dr. Tomi Orungbe in the treatment suite at Signature Smiles Clinic.',
    },
  },
  images: {
    heroSuite: {
      src: clinicHeroSuite,
      alt: 'Clinicians preparing and attending to a patient inside the treatment suite at Signature Smiles Clinic, Gbagada',
      caption: 'Treatment suite · 43 Diya Street, Ifako, Gbagada',
    },
    familyCare: {
      src: clinicFamilyCare,
      alt: 'Dental clinicians caring for a young patient in the treatment chair at Signature Smiles Clinic',
      caption: 'Unhurried, attentive care for both adults and younger patients.',
    },
    consultationRoom: {
      src: clinicConsultationRoom,
      alt: 'Dentist and clinical assistant collaborating during an appointment at Signature Smiles Clinic',
      caption: 'Coordinated clinical team inside our Gbagada practice.',
    },
  },
} as const;

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About Us', href: '#about' },
  { label: 'Meet the Dentist', href: '#dentist' },
  { label: 'Find Us', href: '#find-us' },
] as const;

export const TREATMENTS: TreatmentItem[] = [
  {
    number: '01',
    slug: 'orthodontic-treatment',
    title: 'Orthodontic Treatment',
    summary:
      'Whether you are dealing with crowded, crooked, or spaced teeth, our team helps plan alignment that supports both bite comfort and confidence.',
    focusPoints: ['Crowded or crooked teeth', 'Spacing & bite alignment', 'Individual treatment planning'],
    visitNote:
      'Your initial assessment reviews tooth alignment, bite balance, and which orthodontic options are appropriate for your stage of life.',
    image: {
      src: serviceOrthodontics,
      alt: 'Patient wearing orthodontic braces at Signature Smiles Clinic',
      objectPosition: 'object-center',
    },
  },
  {
    number: '02',
    slug: 'dental-implants',
    title: 'Dental Implants',
    summary:
      'Structured tooth replacement options ranging from a single missing tooth to fuller support integrated with crowns, bridges, or dentures.',
    focusPoints: ['Single-tooth replacement', 'Implant-supported bridges', 'Denture integration'],
    visitNote:
      'During consultation, the clinical team evaluates jaw support and discusses whether an implant-supported crown, bridge, or denture is suitable.',
    image: {
      src: serviceImplants,
      alt: 'Clinicians performing precision dental implant care at Signature Smiles Clinic',
      objectPosition: 'object-[50%_20%]',
    },
  },
  {
    number: '03',
    slug: 'professional-teeth-whitening',
    title: 'Professional Teeth Whitening',
    summary:
      'In-clinic teeth whitening supervised by our dental team and tailored to your tooth sensitivity and natural shade.',
    focusPoints: ['Clinician-supervised care', 'Sensitivity-aware pacing', 'Natural shade guidance'],
    visitNote:
      'We check enamel health and existing restorations beforehand so your whitening plan is safe, comfortable, and realistic.',
    image: {
      src: serviceWhitening,
      alt: 'Patient receiving supervised in-clinic LED teeth whitening at Signature Smiles Clinic',
      objectPosition: 'object-[50%_22%]',
    },
  },
  {
    number: '04',
    slug: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    summary:
      'Practical, natural-looking repair for chipped, broken, or decayed teeth to restore strength and comfortable chewing.',
    focusPoints: ['Chipped or fractured teeth', 'Tooth-coloured restorations', 'Structural preservation'],
    visitNote:
      'We examine the extent of tooth wear or damage and walk you through conservative ways to protect and rebuild the tooth.',
    image: {
      src: serviceRestorative,
      alt: 'Dentist and assistant carrying out restorative dental care at Signature Smiles Clinic',
      objectPosition: 'object-[50%_22%]',
    },
  },
  {
    number: '05',
    slug: 'crowns-and-bridges',
    title: 'Crowns and Bridges',
    summary:
      'Custom-fitted crowns to protect weakened teeth and dental bridges to span gaps cleanly and comfortably.',
    focusPoints: ['Custom-crafted fit', 'Weakened tooth protection', 'Fixed gap replacement'],
    visitNote:
      'Each crown or bridge is planned around your existing bite so speaking and chewing feel natural once fitted.',
    image: {
      src: serviceCrowns,
      alt: 'Visual guide showing dental fillings, crowns, contouring, and dental bridges for restorative treatment planning',
      objectPosition: 'object-center',
    },
  },
  {
    number: '06',
    slug: 'general-dental-services',
    title: 'General Dental Services',
    summary:
      'Everyday preventive and family dentistry including routine check-ups, professional teeth cleaning, fillings, and cosmetic procedures.',
    focusPoints: ['Routine check-ups', 'Scale & polishing', 'Fillings & cosmetic care'],
    visitNote:
      'Consistent check-ups help catch minor changes early and keep your gums and teeth comfortable year-round.',
    image: {
      src: serviceGeneral,
      alt: 'Patients smiling comfortably in the waiting lounge at Signature Smiles Clinic in Gbagada',
      objectPosition: 'object-[50%_25%]',
    },
  },
];

export const PATIENT_STEPS = [
  {
    step: '01',
    title: 'Get in touch with the clinic',
    description:
      'Reserve a preferred slot online through our appointment calendar or call our reception desk directly to arrange a convenient time.',
  },
  {
    step: '02',
    title: 'Discuss your dental needs',
    description:
      'Speak openly with the team about what brought you in—whether it is a routine check-up, mild sensitivity, or a treatment you are considering.',
  },
  {
    step: '03',
    title: 'Receive professional guidance',
    description:
      'Following a careful examination, Dr. Tomi and the clinical team explain suitable treatment options in plain language with no pressure.',
  },
  {
    step: '04',
    title: 'Arrange your next steps',
    description:
      'Agree on a clear plan together and schedule any follow-up visit at a pace that works comfortably for you.',
  },
] as const;
