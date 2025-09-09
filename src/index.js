export const project = {
  slug: "audit-log-database",
  title: "Audit Log Database",
  description: "Database audit system that records data changes.",
  features: [
  "Audit tables",
  "Change triggers",
  "Actor tracking",
  "Before and after values",
  "Retention queries",
  "Reports"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
