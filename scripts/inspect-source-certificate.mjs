import { appendFile, lstat, readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

/** Bind imported data to the actual authenticated producer tree before giving it a reusable identity. */
export async function inspectSourceCertificate({ certificate, selection, token, request = fetch }) {
  const source = selection.engine;
  if (!token || !/^[a-f0-9]{40}$/.test(source?.commit) || !Number.isSafeInteger(source.run) || source.run <= 0
    || !Number.isSafeInteger(source.attempt) || source.attempt <= 0
    || certificate.format !== 'inno-documentation-source/1' || certificate.repository !== 'https://github.com/Wolfiora/InnoEngine'
    || !/^[a-f0-9]{40}$/.test(certificate.sourceTree)) throw new Error('Imported source identity is incomplete or unsupported.');
  const origin = `https://github.com/Wolfiora/InnoEngine/actions/runs/${source.run}/attempts/${source.attempt}`;
  if (!Array.isArray(certificate.producers) || !certificate.producers.some(producer => producer.origin === origin
    && /^[a-f0-9]{64}$/.test(producer.receiptIdentity))) throw new Error('Imported certificate does not name its authenticated producer.');
  const response = await request(`https://api.github.com/repos/Wolfiora/InnoEngine/git/commits/${source.commit}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error'
  });
  if (!response.ok) throw new Error(`Cannot authenticate the producer source tree (${response.status}).`);
  const commit = await response.json();
  if (commit.sha !== source.commit || commit.tree?.sha !== certificate.sourceTree) throw new Error('Imported certificate describes a different producer source tree.');
  return { sourceTree: certificate.sourceTree, producerCommit: source.commit, run: source.run, attempt: source.attempt };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [certificateFile, selectionFile] = process.argv.slice(2);
  if (!certificateFile || !selectionFile || process.argv.length !== 4) throw new Error('Usage: inspect-source-certificate.mjs CERTIFICATE SELECTION');
  const documents = [];
  for (const file of [certificateFile, selectionFile]) {
    const info = await lstat(file);
    if (!info.isFile() || info.isSymbolicLink() || info.size <= 0 || info.size > 8 * 1024 * 1024) throw new Error('Source evidence must be a bounded ordinary JSON file.');
    documents.push(JSON.parse(await readFile(file, 'utf8')));
  }
  const identity = await inspectSourceCertificate({ certificate: documents[0], selection: documents[1], token: process.env.GH_TOKEN });
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `source-tree=${identity.sourceTree}\n`);
  console.log(JSON.stringify(identity));
}
