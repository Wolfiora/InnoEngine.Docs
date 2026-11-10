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

Ordinary prepared-snapshot queries do not scan the authored document tree, acquire its update lock, rewrite its manifest, contact the network, evaluate SDK projects or start engine/Native builds. A corrupt selected payload fails visibly; explicit preparation can rebuild it.

## Integrate another transport

`docs catalog --format json` exports canonical page identities, section anchors, project entries and source binding for website or coverage tooling. A null project entry identifies missing coverage. The export reads the prepared snapshot; it does not certify that every project is documented or that source API checks passed.

An adapter can call `DocumentationStore.OpenAsync` and `DocumentationSnapshot.QueryAsync` directly with `DocumentationRequest`. Dispose a snapshot after its outstanding queries finish. Do not implement an adapter by shelling out to Build and parsing console text.

Results expose resources with this shape:

```text
inno-doc://innoengine/snapshots/<snapshot>/pages/<encoded-page-id>#<section>
```

Resources retain snapshot identity and exact page ownership. The current implementation supplies the transport-independent core; it does not deploy an MCP server.

## Build the website without building engine products

From the Docs repository, run the explicit preparation adapter against the tooling revision in `reference/engine.lock.json`:

```powershell
./scripts/prepare-catalog.ps1 -EngineRoot C:/work/InnoEngine
npm ci
npm test
npm run check
npm run build
node scripts/check-projection.mjs artifacts/canonical-catalog.json dist
```

The adapter requires a clean, exactly selected tooling checkout. It creates a managed build adapter under owned `artifacts/tooling-bootstrap/`, references the documentation library and calls its structured API. It does not create a new engine executable project, build Editor products or prepare Native dependencies. Build output remains stable across repeated preparation.

The generated catalog is disposable. Refresh it after content changes; do not hand-edit its identities or add a second authored page inventory. Projection checks compare the exact file set, content hashes, navigation and rendered anchors with canonical facts.

Available-page checks and complete publication acceptance are distinct. Add `--complete` to require every actual project entry and matching source API evidence. Missing coverage or an `Unverified` API state fails that check; a successful preview build does not override the failure.

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
