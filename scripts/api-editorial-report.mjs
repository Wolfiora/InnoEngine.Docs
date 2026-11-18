const apiCodes = new Set(['XmlOnly', 'EmptyManual', 'Outdated', 'RemovedApi']);
const projectCodes = new Set(['Outdated', 'ManualExplanationRequired', 'RemovedProject']);
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Turn canonical editorial observations into a bounded non-blocking GitHub Check Run. */
export function editorialCheck(report, { sha, runUrl, annotationLimit = 100 }) {
  requireValue(/^[a-f0-9]{40}$/.test(sha), 'Editorial reporting requires the triggering run commit.');
  requireValue(/^https:\/\/github\.com\/Wolfiora\/InnoEngine\.Docs\/actions\/runs\/\d+$/.test(runUrl), 'Invalid editorial report source.');
  if (report?.schema === 'inno-api-editorial/1' && report.status === 'NotApplicable') {
    requireValue(['NoApiInputsChanged','CoveredByRelease'].includes(report.reason)
      && (report.reason !== 'CoveredByRelease' || (Number.isSafeInteger(report.run) && report.run > 0)), 'Invalid editorial routing result.');
    return {name:'API editorial coverage',head_sha:sha,status:'completed',conclusion:'neutral',details_url:runUrl,
      output:{title:'No separate API editorial pass selected',summary:report.reason === 'NoApiInputsChanged'
        ? 'Only operational guidance changed. No API ownership counts were recomputed.'
        : `This draft revision is covered by successful release validation in run ${report.run}.`,annotations:[]}};
  }
  requireValue(report?.schema === 'inno-api-editorial/1' && report.status === 'Passed'
    && Number.isSafeInteger(report.symbols) && report.symbols > 0 && Array.isArray(report.warnings)
    && Array.isArray(report.pendingSynchronization) && report.pendingSynchronization.length === 0,
  'The editorial tool did not complete against synchronized API facts.');
  requireValue(Number.isSafeInteger(annotationLimit) && annotationLimit >= 0 && annotationLimit <= 100, 'Invalid editorial annotation limit.');
  const counts = Object.fromEntries([...new Set([...apiCodes, ...projectCodes])].map((code) => [code, 0]));
  const observations = new Set();
  // Keep the v1 wire code readable by the trusted reporter on main during a release.
  const warnings = report.warnings.map(warning => warning.code === 'ReviewRequired' ? { ...warning, code: 'Outdated' } : warning);
  for (const warning of warnings) {
    const validScope = (apiCodes.has(warning.code) && /^content\/en\/api\/(engine|scripting)\/.+\.md$/.test(warning.path))
      || (projectCodes.has(warning.code) && /^content\/en\/architecture\/projects\/.+\.md$/.test(warning.path));
    requireValue(validScope && typeof warning.symbol === 'string' && warning.symbol.length > 0
      && typeof warning.message === 'string' && warning.message.length > 0 && warning.message.length <= 4000
      && !warning.path.includes('\\') && !warning.path.includes(':')
      && warning.path.split('/').every((part) => part !== '' && part !== '.' && part !== '..'), 'Malformed editorial observation.');
    const key = warning.symbol + '\0' + warning.code;
    requireValue(!observations.has(key), 'Duplicate editorial observation.');
    observations.add(key);
    counts[warning.code]++;
  }
  const conclusion = report.warnings.length ? 'neutral' : 'success';
  requireValue(report.conclusion === conclusion, 'Editorial conclusion differs from its observations.');
  const summary = [
    `Checked ownership metadata for ${report.symbols} current API symbols and registered project guides.`,
    '', '| Observation | Count |', '| --- | ---: |',
    ...Object.entries(counts).map(([code, count]) => `| ${code} | ${count} |`), '',
    'Editorial observations do not block merging or deployment. Manual ownership does not prove semantic correctness.',
    `Showing at most ${annotationLimit} annotations. The complete report is retained in the [workflow artifacts](${runUrl}).`,
  ].join('\n');
  return { name: 'API editorial coverage', head_sha: sha, status: 'completed', conclusion, details_url: runUrl,
    output: { title: conclusion === 'neutral' ? 'API prose has editorial follow-up' : 'No API editorial observations', summary,
      annotations: warnings.slice(0, annotationLimit).map((warning) => ({ path: warning.path, start_line: 1, end_line: 1,
        annotation_level: 'warning', title: warning.code, message: warning.message })) } };
}

/** The trusted reporter owns the token; candidate code and report strings are never executed. */
export async function publishEditorialCheck(github, repository, report, context) {
  requireValue(repository === 'Wolfiora/InnoEngine.Docs', 'Editorial checks are restricted to the Docs repository.');
  const check = editorialCheck(report, context);
  const annotations = check.output.annotations;
  const { data: created } = await github.rest.checks.create({ owner: 'Wolfiora', repo: 'InnoEngine.Docs', ...check,
    output: { ...check.output, annotations: annotations.slice(0, 50) } });
  for (let offset = 50; offset < annotations.length; offset += 50) {
    await github.rest.checks.update({ owner: 'Wolfiora', repo: 'InnoEngine.Docs', check_run_id: created.id,
      output: { title: check.output.title, summary: check.output.summary, annotations: annotations.slice(offset, offset + 50) } });
  }
  return created.id;
}
