import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    company: 'Algorithm Energy AB', role: 'Senior Software Engineer (Level 1)', startDate: 'July 2025', endDate: 'Present',
    description: 'Building the AlgoAPM wind Asset Performance Management platform across frontend, API, reporting, and database layers. Promoted twice: Junior Software Engineer (Jul 2025), Software Engineer (Oct 2025), Senior Software Engineer (Oct 2026).',
    achievements: [
      'Develop the condition monitoring (CMS) drivetrain module, taking engineers from a heatmap anomaly to its waveform and spectrum in one click.',
      'Rebuilt GE Bently Nevada ADAPT spectrum analysis in-house on GE Proficy data, with fault markers that snap to real spectral peaks.',
      'Designed and implemented the CMS criticality ranking, scoring drivetrain components by severity and trend.',
      'Extended predictive maintenance with an updated CMS regression, a monitored daily job, and OEM generator-brush warnings.',
      'Developed the Wind Resource Assessment module, my largest work area, including P50/P75 energy calculations.',
      'Built role-based event code categorization for 8 plants and maintained the Downtime, EPL, IPL, and Warnings pages.',
      'Built Pulse-Ops, a central QA tool that monitors database jobs, turbine states, and data health across client sites.',
      'Automated monthly fleet reporting in Excel, web, and PDF over secured plant-to-plant APIs, removing manual preparation.',
      'Built per-second parameter reports with graph and table views and Excel/CSV export.',
      'Integrated Slack alerts into the CI/CD deployment workflow for instant success and failure notifications.',
      'Resolved a critical auto-logout issue across 7 plants by fixing multi-tab token refresh conflicts and adding proactive refresh.',
      'Built a free, Git-based application that tracks database schema changes and versions the schema in a Git repository.',
      'Unified differing client database schemas into one uniform schema, including tables and stored procedures.',
      'Split large SQL Server integration jobs so one slow job no longer blocks the rest.',
      'Closed 323 tasks across 12 wind plants, including all 26 critical issues, and coordinated a remote development team.',
    ],
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'TanStack Query', 'ECharts', 'GE Proficy'],
  },
]
