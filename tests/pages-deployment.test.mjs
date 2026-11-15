import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm, link } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { checkSize, publicationInput, deploy } from '../scripts/pages-deployment.mjs';

test('Pages publication rejects draft, PRs, foreign repositories and missing artifacts', () => {
  const env = { GITHUB_REPOSITORY:'Wolfiora/InnoEngine.Docs', GITHUB_REF:'refs/heads/main', GITHUB_EVENT_NAME:'push', GITHUB_SHA:'a'.repeat(40), SITE_ARTIFACT_ID:'42' };
  publicationInput(env);
  publicationInput({...env,GITHUB_EVENT_NAME:'workflow_dispatch'});
  for (const patch of [{GITHUB_REF:'refs/heads/draft'}, {GITHUB_EVENT_NAME:'pull_request'}, {GITHUB_REPOSITORY:'other/repository'}, {GITHUB_SHA:'main'}, {SITE_ARTIFACT_ID:''}]) assert.throws(()=>publicationInput({...env,...patch}));
});

test('publication counts all files and rejects oversized or linked content', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(),'inno-pages-size-'));
  t.after(()=>rm(root,{recursive:true,force:true}));
  await writeFile(path.join(root,'index.html'),'1234');
  await writeFile(path.join(root,'publication.json'),'56');
  assert.equal(await checkSize(root,6),6);
  await assert.rejects(checkSize(root,5),/publication limit/);
  await link(path.join(root,'index.html'),path.join(root,'linked.html'));
  await assert.rejects(checkSize(root,100),/ordinary files/);
});

test('an obsolete main revision fails before requesting an identity or starting deployment', async () => {
  const original = globalThis.fetch;
  const requested=[];
  globalThis.fetch = async url => { requested.push(url); return Response.json({object:{sha:'b'.repeat(40)}}); };
  try {
    await assert.rejects(deploy({GITHUB_REPOSITORY:'Wolfiora/InnoEngine.Docs',GITHUB_REF:'refs/heads/main',GITHUB_EVENT_NAME:'push',GITHUB_SHA:'a'.repeat(40),SITE_ARTIFACT_ID:'42'}),/superseded/);
    assert.equal(requested.length,1);
  } finally { globalThis.fetch=original; }
});
