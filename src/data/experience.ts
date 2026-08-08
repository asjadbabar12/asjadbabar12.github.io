import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    company: 'Algorithm Energy AB', role: 'Software Engineer', startDate: 'July 2025', endDate: 'Present',
    description: 'Building and maintaining an OEM-independent wind asset performance management application across frontend, API, reporting, and database layers.',
    achievements: [
      'Build React and TypeScript dashboards, turbine-status views, charts, filters, tables, and dialogs for operational workflows.',
      'Develop reusable components with TanStack Query, Tailwind CSS, shadcn/ui, and ECharts for performance, alarms, availability, energy, historian, and production-loss data.',
      'Integrate ASP.NET Core REST APIs and implement protected routes, session restoration, JWT authentication, refresh-token handling, and role-based flows.',
      'Develop and debug C# API functionality, SQL Server queries, stored procedures, and scheduled database jobs.',
      'Trace production issues across interfaces, network requests, application services, authentication, and database procedures.',
      'Develop .NET reporting and archiving workflows for Excel and PDF output, file-hash validation, and report metadata submission.',
    ],
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'TanStack Query', 'ECharts'],
  },
]
