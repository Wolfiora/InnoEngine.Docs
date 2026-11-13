/** Validate the approved owner boundary against the exported project inventory. */
export function isDocumentedProject(project) {
  return typeof project?.path === 'string' && project.path.endsWith('.csproj')
    && !project.isTest && !/^(backends|extern|tests)\//.test(project.path);
}
