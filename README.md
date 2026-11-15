# InnoEngine Documentation

English manuals, architecture explanations, extension guides, and API reference for [InnoEngine](https://github.com/Wolfiora/InnoEngine).

[Read the documentation](https://wolfiora.github.io/InnoEngine.Docs/) · [Contribute](CONTRIBUTING.md) · [Publication guide](content/en/contributing/publish-documentation.md) · [API authoring guide](content/en/contributing/api-documentation.md)

## What this repository does

InnoEngine.Docs explains how to use and extend the engine. It owns the English Manual, tutorials, architecture explanations, authored API explanations, navigation, and static website. It is also the content source for the engine's local documentation queries: the website and AI readers use the same page and symbol relationships.

| Information | Authoritative location |
| --- | --- |
| Engine behavior, C# declarations and XML comments | [InnoEngine](https://github.com/Wolfiora/InnoEngine) source |
| API extraction, script projection and documentation query tooling | InnoEngine tooling |
| Manual, tutorials, architecture and API explanations | `content/en/` in this repository |
| Captured API facts, project metadata and engine version binding | `reference/` in this repository |
| Website layout, shared navigation and browser search | This repository's site implementation |
| Development rules and task workflows | Each repository's `AGENTS.md` and `.agents/` |

Product documentation describes capabilities and contracts; it does not replace repository development rules or historical acceptance records. The API version is recorded in [engine.lock.json](reference/engine.lock.json). Publishing a documentation correction does not require updating to the newest engine commit.

## The complete workflow

```text
InnoEngine feature branch
  → maintain C# declarations and XML; perform applicable engine checks
  → human merges the engine PR into master
  → independent API export verifies the complete selected reference set
  → protected synchronization updates InnoEngine.Docs/draft when content changes
                                      ↑
                 Manual/tutorial changes enter through a PR into draft
                                      ↓
                      Docs validation and preview artifacts
                                      ↓
                      human opens a draft → main PR
                                      ↓
                      required documentation checks pass
                                      ↓
                      human merges using a merge commit
                                      ↓
                 main validates or reuses matching successful evidence
                                      ↓
                 GitHub Pages deploys the exact verified site artifact
```

API synchronization updates documentation inputs; it does **not** publish the website. Neither workflow automatically creates or merges the release PR. Docs publication does not wait for unrelated full-engine CI matrices and does not certify engine functionality.

### When changing engine code

- Maintain XML for changed public contracts in the engine repository. After a human master merge, the API workflow exports real C# facts and actual script projections, then synchronizes changed content to Docs `draft`.
- Internal changes with unchanged API/XML/projection content do not require a new Docs commit. Ordinary commits, pushes and session restarts do not each require a documentation release.
- If the user's workflow changes, update the affected Manual or tutorial separately in a Docs branch based on `draft`. API export cannot write those tutorials for you.
- Export or synchronization failures leave the existing documentation snapshot and published site intact. Inspect the engine's **Export documentation API** workflow separately from the Docs workflow.

Engine API includes public and externally usable protected C# contracts owned by `src/` and `build/`, excluding tests and fixtures. Tooling, entry points, concrete platform implementations, backends, extern and non-C# APIs are outside this reference. Scripting API uses actual projected declarations, organized by Runtime, Editor and Authoring Scope. Engine API navigation follows actual project segments.

### When editing documentation

Create a feature branch from `draft`, change the relevant content, and open a PR into `draft`. Manual, architecture and tutorial pages are maintained here independently of API synchronization.

Every API type and member has its own explanation and stable symbol identity:

| API prose marker | Synchronization behavior |
| --- | --- |
| `source: xml`, or no marker in a registered API file | Refreshes the explanation from source XML; removes the generated file when the API is removed |
| `source: manual` | Preserves authored prose while source declarations and relationships continue to update |
| Unknown marker | Fails rather than guessing ownership |

Set `source: manual` before taking over an API explanation. Preserve its `uid` and `symbol`. A source contract change can require editorial review even when the prose is preserved. Removed APIs with manual prose retain their files for review outside current navigation and default search. These rules never authorize overwriting ordinary Manual pages. See the [API authoring guide](content/en/contributing/api-documentation.md) for frontmatter, stable addresses and review identities.

### When publishing

1. Open a **`draft → main`** PR when the documentation is ready to publish. Multiple documentation updates may be released together.
2. If GitHub requires **Update branch**, merge main's ancestry into draft and resolve any real conflicts. Do not force-push or reset draft.
3. Wait for required **Documentation validation**. API editorial reminders are advisory.
4. Merge manually using **Create a merge commit**. Keep the persistent `draft` branch.
5. In [Actions → Documentation](https://github.com/Wolfiora/InnoEngine.Docs/actions/workflows/documentation.yml), open the **main push** run. Confirm both validation and **Deploy GitHub Pages** succeed.
6. Open the [published site](https://wolfiora.github.io/InnoEngine.Docs/), check an API deep link and search, and confirm the expected API version. A merged PR alone does not prove deployment succeeded.

GitHub Pages is the sole publisher. One verified Pages archive serves as both preview and delivery artifact; deployment does not rebuild the website or upload a second copy. Failed publication retains the previous successful site. Setup and recovery instructions live in the [publication guide](content/en/contributing/publish-documentation.md).

## What CI checks, and why jobs can be skipped

| Event | Expected behavior |
| --- | --- |
| Feature branch push without a PR | No automatic Docs workflow; local work remains available |
| PR into draft or main | Validate the candidate and retain a preview; skip Pages deployment |
| Draft push, including API synchronization | Validate and retain a preview; skip Pages deployment |
| Main push after a human merge | Validate or reuse matching evidence, then deploy through Pages |
| Manual Documentation run on main | Validate or reuse eligible evidence, then publish main |
| Merge-group check | Validate the candidate; do not publish |

**Documentation validation** is the required aggregate. It reconciles evidence selection, Windows projection and Linux preparation; missing, canceled or failed prerequisites cannot silently pass. Checks cover content and API integrity, links, examples, rendering and browser journeys.

**API editorial coverage** reports missing, unchanged-default or stale manual explanations. A `neutral` result is a non-blocking reminder, not a failed deployment and not proof of semantic completeness. Failure of the reporting tool itself is a real fault.

**Documentation projection** may be skipped when evidence selection authenticates a successful trusted draft/main run with the same Git tree, origin, Node version and Windows runner image, and its original site artifact is still available. Linux preparation still runs. The selection job identifies the reused run and artifact. Example compilation can also be skipped when matching example evidence is reused. If no completed matching producer exists yet, two events may both perform work; reuse never assumes that an in-progress run will succeed.

**Deploy GitHub Pages** is intentionally skipped on PRs and draft. On main, a skip caused by failed validation means nothing was published and requires investigation. Check the run's branch and event before interpreting a skipped job. Push and PR checks may appear together on the same commit; the PR preview and main publication serve different purposes.

Diagnostics are retained for 30 days; site artifacts and reusable evidence for 90 days. Versioned content, captured API facts and pinned tools allow rebuilding after artifacts expire.

## Automation permissions

| Operation | Authorization |
| --- | --- |
| Engine export → Docs draft | Restricted GitHub App installation token with Docs Contents write |
| Documentation validation | Repository-scoped GitHub Actions token |
| Editorial report | Protected reporting workflow with Checks write |
| GitHub Pages publication | Deploy job's Pages write permission and short-lived OIDC identity; main-only environment |
| Release decision | Human merge into main |

The synchronization App's private key stays in the engine's Actions secret. GitHub Pages does not use that private key or require a separate hosting token. No external hosting integration should remain connected to these repositories. A historical external deployment status on an older commit is not a Docs workflow failure and must not be replaced with a fabricated success.

## Local work and AI queries

Use the repository's pinned tool versions and lockfile:

```sh
npm ci
npm run build
npm run preview
```

The build explicitly prepares the pinned managed documentation tool when needed; it does not prepare Native dependencies or engine products. Read [CONTRIBUTING.md](CONTRIBUTING.md) for focused authoring and browser checks.

AI queries use the engine's existing Build `docs` command group. Select an explicit Docs checkout or prepared snapshot, prepare it with `docs index`, then use `docs search`, `docs read` or `docs symbol`. Reading a prepared snapshot does not compile, evaluate SDK projects or access the network. Snapshot freshness and source-API verification are separate states; refresh after relevant content changes rather than reindexing for every read.

## License

Documentation follows the engine's Apache-2.0 license unless an individual asset states otherwise. InnoEngine branding retains its separate license and attribution.
