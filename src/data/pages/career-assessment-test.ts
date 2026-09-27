import type { ContentPageData } from '../types';
import { U } from './_shared';

const page: ContentPageData = {
  slug: 'career-assessment-test',
  seo: {
    title: 'Career Assessment Test – Eval',
    description:
      'Looking for career clarity? Take the free career test and the Premium Eval Test for a detailed report of your interests, education and future careers.',
  },
  hero: {
    badge: 'Eval Test',
    title: 'Looking for Career Clarity? You are at the Right Place…',
    highlight: 'Career Clarity?',
    intro:
      'Use a quick and a fun way to find a match for your personal interests with the right career. To start with, you can take our “Free Career Test” and then proceed to the “Premium Eval Test” for a detailed report of your interests, education and future careers.',
    actions: [
      { label: 'Visit – www.evaltest.com', href: 'http://www.evaltest.com', variant: 'white' },
      { label: 'Talk to a counsellor', href: '/contact-us', variant: 'ghost', icon: 'chat' },
    ],
    image: { src: `${U}/2022/05/ezgif.com-gif-maker.jpg`, alt: 'Career test' },
  },
  sections: [
    {
      kind: 'steps',
      badge: 'Steps to achieve career clarity',
      badgeIcon: 'route',
      title: 'Follow these steps to get complete clarity in your career',
      items: [
        { title: 'Register', text: 'First, visit our website www.evaltest.com, and register for the Eval Test.' },
        { title: 'Pick your test', text: 'Pick the most appropriate Eval Test based on your education background and career goals.' },
        { title: 'Answer 40 questions', text: 'Answer 40 easy questions. Read the pairs of phrases and select the phrase that most accurately describes you.' },
        { title: 'Get your report', text: 'After your test, you will receive a detailed report about your strengths and preferences, including career paths you may want to explore.' },
        { title: 'Talk to a counsellor', text: 'We help students explore their options by providing career counselors, who will help them interpret their career report and find careers that suit them.' },
      ],
    },
    {
      kind: 'split',
      tone: 'surface',
      badge: 'What is an Evaltest?',
      badgeIcon: 'brain',
      title: 'Gain a Detailed Understanding of Yourself With Eval Test',
      body: [
        'Eval test is a systematic means of testing a student’s ability to perform specific tasks and interests.',
        'It is designed in a way that it measures your ability in many areas of work and the interest level. The concept behind this test is that each test question will have only one correct answer and everyone can correctly solve each question.',
      ],
      list: ['No Prior Knowledge', 'No preparation', 'Simple Questions', 'Takes less than 30 minutes'],
      actions: [{ label: 'Visit – www.evaltest.com', href: 'https://evaltest.com/tests-info' }],
      image: { src: `${U}/2022/05/5ec32b21a107760d5e322b97_new-home-image.png`, alt: 'Eval test illustration' },
    },
    {
      kind: 'features',
      badge: 'Premium Report',
      badgeIcon: 'file',
      title: 'What does Premium Eval Test Report Include?',
      columns: 3,
      items: [
        { icon: 'file', title: 'Quantitative & Descriptive Reports' },
        { icon: 'chart', title: 'Graphical Representation of Interest Scores' },
        { icon: 'compass', title: 'Detailed and Diverse Career Categories' },
        { icon: 'graduation', title: 'Complete Guidance on Education Options' },
        { icon: 'briefcase', title: 'Exhaustive List of Job Recommendations' },
      ],
    },
    {
      kind: 'pricing',
      tone: 'surface',
      badge: 'Eval Test Series',
      badgeIcon: 'clipboardList',
      title: 'Eval Test Series',
      intro: 'Pick the most appropriate Eval Test for your education background and career goals.',
      items: [
        { title: 'Eval for Humanities', price: '₹500', image: `${U}/2022/05/759-422-5.jpg` },
        { title: 'Eval General Test', price: '₹500', image: `${U}/2022/05/main-image_647_041317043939.jpeg` },
        { title: 'Eval for Science', price: '₹500', image: `${U}/2022/05/f0301035-800px-wm.jpg` },
        { title: 'Eval for Commerce', price: '₹500', image: `${U}/2022/05/0_AzAabOOnxN9OM1SY.png` },
        { title: 'Eval for Engineering', price: '₹500', image: `${U}/2022/05/blog-05.jpg` },
      ],
      action: { label: 'Sign Up for your Eval', href: 'https://evaltest.com/home' },
    },
    {
      kind: 'cards',
      badge: 'Benefits of the Eval Test',
      badgeIcon: 'award',
      title: 'Benefits of the Eval Test',
      aspect: 'landscape',
      items: [
        { title: 'For Students', image: `${U}/2022/05/Asena_hero_cut_out_744x588_v2.png` },
        { title: 'For Parents', image: `${U}/2022/05/indian-family-cropped.jpg` },
        { title: 'For Educators', image: `${U}/2022/05/AdobeStock_292109976_Post_Secondary.jpeg.jpg` },
        { title: 'For Class Owners', image: `${U}/2022/05/SeekPng.com_students-png_1189849.png` },
      ],
    },
    {
      kind: 'cta',
      title: 'Sign Up for your Eval',
      text: 'Take the free career test, then unlock the Premium Eval report for complete clarity.',
      actions: [
        { label: 'Sign Up for your Eval', href: 'https://evaltest.com/home', variant: 'white' },
        { label: 'Book a counselling session', href: '/contact-us', variant: 'ghost', icon: 'calendarCheck' },
      ],
    },
  ],
};

export default page;
