import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  { title:'Backend', icon:'server', skills:['C#','.NET 8','ASP.NET Core','EF Core','LINQ','Dapper','REST APIs','Node.js','Express','Identity','JWT'] },
  { title:'Frontend', icon:'layout', skills:['React','TypeScript','JavaScript','Vite','Tailwind CSS','Bootstrap','shadcn/ui','TanStack Query'] },
  { title:'Database', icon:'database', skills:['SQL Server','T-SQL','Stored Procedures','Database Design','MySQL','Query Optimization'] },
  { title:'Architecture', icon:'blocks', skills:['Clean Architecture','REST API Design','Authentication','Authorization','Dependency Injection','DTO Mapping'] },
  { title:'Tools', icon:'wrench', skills:['Git','GitHub','GitLab','Azure DevOps','Postman','Swagger','Visual Studio','VS Code'] },
  { title:'Additional', icon:'plus', skills:['Python fundamentals','Docker fundamentals','IIS','Kestrel','ECharts','Debugging'] },
]
