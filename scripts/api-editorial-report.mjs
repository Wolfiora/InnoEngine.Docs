const codes = new Set(['XmlOnly', 'EmptyManual', 'ReviewRequired', 'RemovedApi']);
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

/** Turn canonical editorial observations into a bounded non-blocking GitHub Check Run. */
export function editorialCheck(report, { sha, runUrl, annotationLimit = 100 }) {
  requireValue(/^[a-f0-9]{40}$/.test(sha), 'Editorial reporting requires the triggering run commit.');
  requireValue(/^https:\/\/github\.com\/Wolfiora\/InnoEngine\.Docs\/actions\/runs\/\d+$/.test(runUrl), 'Invalid editorial report source.');
  requireValue(report?.schema === 'inno-api-editorial/1' && report.status === 'Passed'
    && Number.isSafeInteger(report.symbols) && report.symbols > 0 && Array.isArray(report.warnings)
    && Array.isArray(report.pendingSynchronization) && report.pendingSynchronization.length === 0,
  'The editorial tool did not complete against synchronized API facts.');
  requireValue(Number.isSafeInteger(annotationLimit) && annotationLimit >= 0 && annotationLimit <= 100, 'Invalid editorial annotation limit.');
  const counts = Object.fromEntries([...codes].map((code) => [code, 0]));
  const observations = new Set();
  for (const warning of report.warnings) {
    requireValue(codes.has(warning.code) && typeof warning.symbol === 'string' && warning.symbol.length > 0
      && typeof warning.message === 'string' && warning.message.length > 0 && warning.message.length <= 4000
      && /^content\/en\/api\/(engine|scripting)\/.+\.md$/.test(warning.path)
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
    `Reviewed ownership metadata for ${report.symbols} current API symbols.`,
    '', '| Observation | Count |', '| --- | ---: |',
    ...Object.entries(counts).map(([code, count]) => `| ${code} | ${count} |`), '',
    'Editorial observations do not block merging or deployment. Manual ownership does not prove semantic correctness.',
    `Showing at most ${annotationLimit} annotations. The complete report is retained in the [workflow artifacts](${runUrl}).`,
  ].join('\n');
  return { name: 'API editorial coverage', head_sha: sha, status: 'completed', conclusion, details_url: runUrl,
    output: { title: conclusion === 'neutral' ? 'API prose has editorial follow-up' : 'No API editorial observations', summary,
      annotations: report.warnings.slice(0, annotationLimit).map((warning) => ({ path: warning.path, start_line: 1, end_line: 1,
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
