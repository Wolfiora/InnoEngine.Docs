---
title: Query documentation locally
description: Prepare a documentation snapshot once, then retrieve tasks and contracts without rebuilding the engine.
uid: contributing.documentation-queries
kind: how-to
owners:
  - Inno.Tooling.Documentation
---
# Query documentation locally

The Build entry provides a local documentation interface for people and agents. Preparation reads an explicitly selected Docs checkout. Queries read a published, immutable snapshot and return its identity with every result.

## Prepare a snapshot

Use a built `InnoEngine.Build` entry from the selected tooling revision. The examples below use its Debug output; select the matching configuration in your workspace.

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs index \
  --engine-root /work/InnoEngine \
  --docs-root /work/InnoEngine.Docs \
  --format json
```

The Docs checkout must contain `content/en/` and a matching `reference/engine.lock.json` and project manifest. The indexer checks stable page identities, project ownership, API includes and required contract relationships before selecting a generation. An absent or invalid source produces a failure; no sibling checkout is guessed.

The default cache is `artifacts/documentation-query/` under the selected engine root. `--cache-root` selects another owned cache beneath that workspace. Preparation does not compile an engine product or prepare Native dependencies.

The commands use shell line continuation for readability. In PowerShell, put each command on one line or use PowerShell's continuation syntax.

## Find a task

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs search \
  --engine-root /work/InnoEngine --query "Console presentation" --limit 5 --format json
```

Search returns navigation excerpts with match reasons and source locations. An excerpt is not a complete contract. Read the selected page or section and follow its necessary contract relationships before relying on the behavior.

For a multiword task such as `instantiate prefab`, equally ranked heading matches prefer how-to and tutorial pages. Exact method identifiers and qualified XML symbol IDs retain reference priority. A task page that only mentions the words in its body does not displace a stronger heading match.

Heading terms rank above incidental body matches even when punctuation or connecting words differ. For example, `read keyboard pointer text input` locates the input task without requiring its exact title. Exact symbols, project identities and authored aliases remain explicit matches. Being an assembly overview does not give a page priority over a matching task.

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs read \
  --engine-root /work/InnoEngine --page extending.console-style --format json
```

Use a stable page ID or a path such as `content/en/extending/customize-console.md`. A project selector resolves its authoritative project entry when that entry is present in the selected snapshot.

## Select an exact snapshot or symbol

Add `--snapshot <identity>` to keep all reads in a task on the same immutable generation. Without it, a command resolves the current pointer once. Neither mode claims that an independently mutable checkout is still unchanged.

Use `docs symbol --project <project> --surface <surface> --id <xml-documentation-id>` for a qualified API contract. The symbol and surface must be present in the prepared reference. An incomplete or ambiguous name returns candidates; it does not choose an overload for you.

`--source-tree <engine-tree>` checks the documentation binding against an expected engine input tree. A mismatch is explicit. Binding agreement and documentation freshness are separate from source API verification.

## Read continuations

Every JSON result identifies its status, snapshot, source API state, selected content and remaining continuations. Hits distinguish `Excerpt`, `CompleteUnit` and `Partial` content. `CompleteUnit` means that the selected unit was returned in full; it may still require associated contracts.

Long reads return original text segments with UTF-16 continuation offsets. `nextRequest` provides a structured request for the next segment or result page. `continuations` separately identifies required contracts. Consumers must not discard these fields and then claim to have read the complete contract.

Useful status distinctions:

| Status | Meaning |
| --- | --- |
| `Found` | The selected content or search candidates are available. Inspect each hit's completeness. |
| `Empty` | A search has no matching results. |
| `Missing` | The requested page, project, section or symbol is absent. |
| `Ambiguous` | More qualification is needed; no overload or surface was chosen. |
| `Partial` | Read the remaining text or associated contracts. |
| `Navigation` | Read the indicated section to obtain the complete declaration. |
| `Mismatched` | The requested engine tree or resource belongs to another snapshot. |
| `Ready` | A prepared snapshot can report its binding; this is not API certification. |

Invalid requests, cancellation and corrupted cache payloads are execution failures. They are not empty searches.

## Refresh deliberately

Run `docs index` after relevant documentation or binding changes. It compares content rather than relying on timestamps, reuses matching parsed pages and publishes a new complete generation. Existing readers retain their original snapshot.

Parsed-page identity is separate from the complete query/index implementation. A search-ranking or result-format change requires a current index but can reuse unchanged Markdown parsing. Parser, page-model or parser-dependency changes require fresh parsing. Reuse still verifies the source path, text and stored payload hash; it never treats an old query generation as a current one.

Ordinary prepared-snapshot queries do not scan the authored document tree, acquire its update lock, rewrite its manifest, contact the network, evaluate SDK projects or start engine/Native builds. A corrupt selected payload fails visibly; explicit preparation can rebuild it.

## Integrate another transport

`docs catalog --format json` exports canonical page identities, section anchors, project entries and source binding for website or coverage tooling. A null project entry identifies missing coverage. The export reads the prepared snapshot; it does not certify that every project is documented or that source API checks passed.

An adapter can call `DocumentationStore.OpenAsync` and `DocumentationSnapshot.QueryAsync` directly with `DocumentationRequest`. Dispose a snapshot after its outstanding queries finish. Do not implement an adapter by shelling out to Build and parsing console text.

## Attach authenticated source evidence

Index freshness and source verification are independent. A newly indexed checkout remains `Unverified` until a trusted producer has compared all selected API references against the bound engine source tree.

The preparation transport first authenticates a successful engine workflow and its exact artifact digest. Only then may it load `DocumentationEvidence.ReadAsync` with the authenticated certificate file and SHA-256 identity, and pass that immutable value to `DocumentationStore.OpenAsync` as `sourceEvidence`. The query library performs no network request or compilation. It rejects another source tree, project inventory, reference hash, configuration, target or owner set.

The CLI exposes the same explicit boundary:

```bash
docs status --engine-root <workspace> --cache-root <prepared-cache> \
  --snapshot <snapshot-id> \
  --evidence-file <authenticated-source-certificate.json> \
  --evidence-sha256 <independently-trusted-sha256>
```

Do not obtain the trusted digest merely by hashing an arbitrary downloaded certificate: that checks consistency, not producer authenticity. Use an authenticated producer or locally reconciled evidence you explicitly trust. This optional source-verification attachment is not a website publication prerequisite; the retired cross-repository certification callback is not part of the draft/main flow.

Verified results include `sourceEvidenceIdentity`. The certificate does not change page identities, rewrite the index or certify a mutable checkout. It can apply to a prose-only snapshot with the same source tree, project inventory and API references. A search result remains an excerpt, and required ownership contracts still need their explicit continuation reads. Source API verification also does not prove native execution, device behavior or semantic completeness of prose.

Keep one protected snapshot session for related reads instead of starting a new CLI process for each section. Exact page and symbol lookups use direct maps. Keyword postings initialize once when that session first performs a keyword search; concurrent searches share the completed map. Opening a snapshot still verifies its manifest, and selected page payloads still undergo integrity checks. This avoids unrelated search preparation without weakening provenance.

Results expose resources with this shape:

```text
inno-doc://innoengine/snapshots/<snapshot>/pages/<encoded-page-id>#<section>
```

Resources retain snapshot identity and exact page ownership. The current implementation supplies the transport-independent core; it does not deploy an MCP server.

## Build the website without building engine products

From the Docs repository, run the explicit preparation adapter against the tooling revision in `reference/engine.lock.json`:

```powershell
node scripts/prepare-catalog.mjs --engine-root C:/work/InnoEngine
npm ci
npm test
npm run check
npm run build
node scripts/check-projection.mjs artifacts/canonical-catalog.json dist
```

The adapter requires a clean, exactly selected tooling checkout. It creates a managed build adapter under owned `artifacts/tooling-bootstrap/`, references the documentation library and calls its structured API. It does not create a new engine executable project, build Editor products or prepare Native dependencies. Build output remains stable across repeated preparation.

The generated catalog is disposable. Refresh it after content changes; do not hand-edit its identities or add a second authored page inventory. Projection checks compare the exact file set, content hashes, navigation and rendered anchors with canonical facts.

Complete publication acceptance uses `--complete --example-manifest artifacts/examples/manifest.json`. CI creates this manifest from authenticated default-branch receipts and newly compiled example groups. Its content-addressed report files contain exact compilation inputs and SHA-256 digests. Missing or changed evidence requires actual compilation; prose changes can reuse matching groups. Publication does not require a full-engine certificate, the latest engine master revision, or manual API editorial completion.

## Export source facts explicitly

Source extraction is separate from a documentation read. When preparing references for a candidate, select the actual engine project and SDK explicitly:

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs export-api \
  --engine-root /work/InnoEngine \
  --dotnet /sdk/dotnet \
  --project src/foundation/core/Inno.Core.Identity/Inno.Core.Identity.csproj \
  --output /work/InnoEngine/artifacts/reference/identity.json
```

Repeat `--project` to capture multiple owners together. The existing SDK graph and source extractor evaluate the selected closure without requesting product builds. Dependencies and restore inputs must already be available. Unavailable compilations and unresolved public signatures fail before replacing the previous output.

The exported `source-clr` model preserves exact declarations, documentation IDs, signature hashes, source locations and inherited XML descriptions. It describes the requested configuration and target. It does not invent runtime/editor script surfaces or certify prose, examples, Native execution or platform support. Source API verification remains a distinct evidence obligation. Normal snapshot queries never invoke this operation.

## Capture actual script surfaces

First generate the project's current logical references through the [scripts command](compile-project-scripts.md). Use the exact Runtime and Editor DLL paths recorded in the generated project, including their adjacent XML. The XML carries type origins from the compiler's resolved exports; the DLL determines which members actually exist. Namespace substitution is not an API selector.

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs export-api \
  --engine-root /work/InnoEngine \
  --dotnet /selected-sdk/dotnet \
  --surface runtime-script \
  --framework-project src/foundation/core/Inno.Core.Identity/Inno.Core.Identity.csproj \
  --runtime-reference /prepared/IDE/Inno.ScriptApi.Runtime.dll \
  --source-reference /work/InnoEngine.Docs/reference/api/host.json \
  --output /work/InnoEngine/artifacts/reference/runtime-script.json
```

Repeat `--source-reference` for the complete captured source-owner set required by the selected facade. The two paths above illustrate the option syntax; a complete engine facade requires additional owner manifests. Missing or ambiguous owners fail explicitly. `--framework-project` selects one actual project for SDK framework resolution; it does not select script exports or evaluate every documented assembly.

For the Editor surface, use `--surface editor-script` and add `--editor-reference` with the actual Editor DLL. Its metadata closure includes the Runtime reference. The emitted facts retain the actual owner, exact logical symbol, declaration, XML and input hashes. Compiler-supplied members retain their source classification. A constructor present only in the facade is marked `projectionOnly` and receives an explicit unsupported-construction constraint, not a fabricated engine implementation.

These preparation commands do not run during a query. After publishing the new pages into a snapshot, resolve logical symbols with `docs symbol --surface runtime-script` or `--surface editor-script`; source CLR lookups remain independently qualified.

## Maintain symbol-owned reference content

Engine master export produces a complete package from actual eligible C# owners and real script projections. Protected automation imports it into Docs draft. Ordinary authors maintain the Manual separately and edit API prose only after explicitly selecting `source: manual` for the individual type or member.

For an explicitly prepared authoring checkout, the shared tooling supports:

```sh
docs api-plan --docs-root /work/InnoEngine.Docs
docs api-sync --docs-root /work/InnoEngine.Docs
docs api-check --docs-root /work/InnoEngine.Docs
```

These commands consume the bound facts; they do not extract source, build products or contact the network. Synchronization updates registered API pages and derived navigation, repairing incoming links when pages move. It preserves manual prose, updates declarations independently and reports removed or changed contracts for review. Each type and member is published as its own page for both website and query readers. Type pages contain tables of immediate members and nested types; member results carry explicit continuations to their declaring type and required contracts.

Engine API uses only src/ and build/; tools, entries, platforms, backends, extern, test/fixture and non-C# APIs are excluded. Their useful engine integration and validation guides remain independent. Engine APIs follow the actual project tree; script APIs follow declared Runtime, Editor and Authoring Scope. Compilation availability is a separate fact, so Runtime APIs available to Editor scripts share one authored body.

Use `docs symbol --scope Runtime` with an exact symbol ID to select a declared Scope; `--surface runtime-script` selects a compilation surface instead. [API documentation ownership](api-documentation.md) explains manual takeover, removal and the non-blocking editorial report.

After changes, refresh the canonical catalog and run content, reference and website checks. If preparation fails, the previous immutable query snapshot remains selected; do not describe it as the current mutable checkout.
