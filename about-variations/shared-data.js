// shared-data.js — Verified content for the three About Us variations.
// Single shared data object (window.ABOUT), reused by about-v1/v2/v3.html.
// All names, roles, images, LinkedIn URLs and team order verified against
// https://whitelabelresell.com/team/ on 2026-08-07. Members with no real
// LinkedIn on the live page (links render as "#") have li: null.
// Images are local copies in /assets/images/team/ (relative to this folder).
// This is plain JavaScript (no JSX) so it loads from <script src> even when
// pages are opened directly via file:// .

window.ABOUT = {

  // First eight people in the current live Team page order.
  team: [
    { name: 'Christian Clark',        role: 'Founder',                 img: '../assets/images/team/christian-clark.jpeg', w: 562,  h: 562,  li: 'https://www.linkedin.com/in/christian-clark-9a352b179/' },
    { name: 'Himanshu Raikwar',       role: 'Lead Digital Designer',   img: '../assets/images/team/himanshu-raikwar.png', w: 1024, h: 1024, li: 'https://www.linkedin.com/in/himanshuraikwar/' },
    { name: 'Mohammad Muneeb',        role: 'Lead SEO Specialist',     img: '../assets/images/team/mohammad-muneeb.png', w: 1024, h: 1024, li: 'https://www.linkedin.com/in/mohammad-muneeb-204418215/' },
    { name: 'Anil Raikwar',           role: 'Analytics Engineer',      img: '../assets/images/team/anil-raikwar.png', w: 651,  h: 649,  li: 'https://www.linkedin.com/in/anil-raikwar/' },
    { name: 'Haider Ali',             role: 'SEO Specialist',          img: 'https://i.ibb.co/mrwyT0Tr/Haider-new.png', w: 1024, h: 1024, li: 'https://www.linkedin.com/in/haider-naeem-888378249/' },
    { name: 'Brandon Carroll',        role: 'Acquisition Specialist',  img: '../assets/images/team/brandon-carroll.png', w: 1024, h: 1024, li: null },
    { name: 'Taofeek Abdulrauf',      role: 'Cloud Engineer',          img: '../assets/images/team/taofeek-abdulrauf.png', w: 1024, h: 1024, li: 'https://www.linkedin.com/in/taofeek-abdulrauf-a95815226/' },
    { name: 'Munir Nadayako',         role: 'Web Developer',           img: '../assets/images/team/munir-nadayako.png', w: 1024, h: 1022, li: null },
  ],

  // Eight disciplines that make up the company (roles verified on live team page).
  departments: [
    { name: 'Leadership and Strategy',       desc: 'Direction, scoping and the standards the whole bench works to.' },
    { name: 'UI/UX and Product Design',      desc: 'Interfaces, flows and brand systems that turn strategy into something people can use.' },
    { name: 'SEO and Content',               desc: 'Technical and on-page SEO, keyword strategy and content built to earn rankings.' },
    { name: 'Paid Acquisition',              desc: 'Search and social campaigns measured against pipeline, not vanity clicks.' },
    { name: 'Development',               desc: 'WordPress, eCommerce and custom builds — fast, accessible and production-ready.' },
    { name: 'Analytics',                     desc: 'GA4, Tag Manager and Looker reporting that turns data into decisions.' },
    { name: 'Cloud and Infrastructure',      desc: 'Hosting, security and uptime that keep the work online around the clock.' },
    { name: 'Operations and Client Success', desc: 'The coordinators who keep projects moving and partners in the loop.' },
  ],

  // Six core values. Each variation presents a different selection/treatment.
  values: [
    { n: '01', name: 'Ownership',                          short: 'Every specialist runs their discipline like it is their own project — and answers for it.' },
    { n: '02', name: 'Clear Communication',                short: 'Straight answers, honest timelines and no hiding behind process.' },
    { n: '03', name: 'Continuous Improvement',             short: 'We refine the systems, not just the deliverables, so every engagement beats the last.' },
    { n: '04', name: 'Quality Without Unnecessary Complexity', short: 'Work that is simple to maintain, easy to explain and built to last.' },
    { n: '05', name: 'Collaboration Across Disciplines',   short: 'Designers, engineers, marketers and analysts work as one team on every client.' },
    { n: '06', name: 'Work That Creates Lasting Value',    short: 'We measure success in results our partners keep, not reports we hand over.' },
  ],

// Year timeline of the company's own story, from its 2018 start to today (2026).
  // Each entry is a period, its stage title, and short prose about ourselves.
  journey: [
    { tag: '2018–2019', title: 'Where it started.',  desc: 'White Label Resell is founded as a focused production team — SEO, content and web work shipped quietly under partner brands from day one.' },
    { tag: '2020–2024', title: 'The bench grows.',    desc: 'Design, engineering, paid, analytics and cloud join one by one, each led by a named specialist, all working to a single standard.' },
    { tag: '2025–2026', title: 'One connected team.', desc: 'Today the team runs complete digital growth programs end to end — a full in-house bench for each partner, always behind their brand.' },
  ],

  // Verified client marks only (from case-studies.html). Rendered as
  // monochrome typographic wordmarks — no logo image files exist yet.
  clients: [
    { name: 'Guild Golf Carts',   style: { letterSpacing: '.06em', fontWeight: 500 } },
    { name: 'Unemployment Society', style: { fontWeight: 300, fontStyle: 'italic' } },
    { name: 'Flat Bid Moving',    style: { letterSpacing: '.14em', fontWeight: 600 } },
  ],

  // Company-focused questions only; answers supported by existing site copy.
  faqs: [
    {
      q: 'Who is behind White Label Resell?',
      a: 'The company was founded by Christian Clark in 2018. Today it is a team of specialists across design, SEO, development, paid acquisition, analytics, cloud and operations, each discipline led by a named lead.',
    },
    {
      q: 'How does the team work across different disciplines?',
      a: 'Every engagement is staffed by the specialist leads it needs — strategy, design, build, marketing, analytics — who work from one shared brief and one shared standard instead of passing work between silos.',
    },
    {
      q: 'Will clients ever work directly with the team?',
      a: 'No. All work ships under the partner’s brand, never ours. We sign mutual NDAs as standard and stay invisible to the end client.',
    },
    {
      q: 'What kind of support is available after launch?',
      a: 'Hosting, maintenance, reporting and ongoing growth work continue after launch. Most partners start with one discipline and grow to a full bench over time.',
    },
  ],

  // Video — the company’s own film, reusing the Home Version 1 embed.
  video: {
    url: 'https://player.vimeo.com/video/901595251?h=9ee652be42&autoplay=1&title=0&byline=0&portrait=0',
    label: '2 Minutes Watch',
  },

  cta: {
    headline: 'Bring the right people.',
    support: 'Tell us what you are building, improving or growing, and we’ll connect the right specialists around it.',
    link: '../contact.html',
  },

  teamHref: '../team.html',
};
