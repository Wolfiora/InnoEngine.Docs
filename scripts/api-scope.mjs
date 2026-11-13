/** Validate the approved owner boundary against the exported project inventory. */
export function isDocumentedProject(project) {
  return typeof project?.path === 'string' && project.path.endsWith('.csproj')
    && !project.isTest && /^(src|build)\//.test(project.path);
}

/** Source inventory retains platform dependencies, but implementation projects have no reader pages. */
export function isDocumentedProjectGuide(project) {
  return typeof project?.path === 'string' && !project.path.startsWith('platforms/');
}
