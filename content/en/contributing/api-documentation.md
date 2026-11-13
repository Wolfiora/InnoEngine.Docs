---
title: Maintain API documentation
description: Maintain source XML, enrich individual API explanations, and publish documentation through draft and main.
uid: contributing.api-documentation
kind: how-to
owners: [Inno.Tooling.Documentation]
---
# Maintain API documentation

Maintain declarations and XML in InnoEngine. The API synchronizer transfers the selected source facts and default explanations into InnoEngine.Docs `draft`. Authors can enrich individual types or members without losing their text on the next synchronization.

## Change an engine API

1. Implement the engine change and maintain its XML contracts, including applicable ownership, failure, lifetime and cancellation obligations.
2. Run the engine checks selected for the change and submit the normal engine PR.
3. After a human merges the PR into `master`, independent API export prepares the complete eligible API set. It does not wait for unrelated product journeys or the full scheduled matrix.
4. Protected automation validates the export and commits changed API facts and XML-managed fragments to Docs `draft`.

An internal change without different API, XML or projection inputs does not need a Docs commit. A failed export leaves the existing draft and website intact. Tutorials are maintained separately when the reader's workflow changes; an engine PR does not require a paired Docs commit or coordination marker.

## Why export prepares managed references

Export happens in the engine repository. It resolves real C# declarations, referenced types and compiler-produced script projections. That requires the relevant managed compilation inputs; reading XML alone cannot establish inheritance, overloads or which members scripts can actually call.

API preparation uses `InnoBuildPurpose=ApiReferences` and its own output directory. It compiles the selected managed project union, retaining the real reference and generator inputs, but skips runtime Shader resources and Native product preparation. These outputs cannot be published as a runnable product. Ordinary Editor, player and release builds keep their Shader and Native requirements.

Import happens in the Docs checkout. It verifies the exported facts, updates XML-owned fragments and preserves manual explanations. The shared import implementation lives in the engine's documentation tooling library, but importing a package does not build the engine. Its writer lock protects the Docs facts and fragments from competing synchronizations; cancellation before ownership leaves the previous content intact.

Reading an already prepared documentation snapshot is a third, separate operation. It does not export, import, compile, evaluate SDK projects or contact the network.

## Understand the API scope

| Reference | Contents | Navigation |
| --- | --- | --- |
| Engine | Public and externally usable protected C# contracts owned by src/ and build/ | Actual project segments, such as Core / Collections |
| Scripting | Members in the actual compiler-produced projections | Declared Runtime, Editor and Authoring scopes, then alphabetical type indexes |

Engine API accepts only `src/` and `build/` C# owners. `tools/`, `entry/`, `platforms/`, `backends/`, `extern/`, test/fixture and non-C# API references are excluded. Integration guides, resource constraints and legal notices remain where readers need them. Runtime script APIs can also be available to Editor scripts; availability is distinct from the declaration's Scope.

## Take over one explanation

Each type has an `index.md`; its members have separate `_members/*.md` fragments. Members appear together on the type's website page and remain individually addressable through the query model.

Edit the relevant fragment and change its ownership marker:

```yaml
---
uid: <keep-the-existing-page-identity>
symbol: <keep-the-exact-symbol-identity>
source: manual
reviewed: <the-reviewed-contract-identity>
---
```

Write a meaningful explanation, example or applicable constraint. Merely changing the marker does not complete editorial work. Keep the exact existing `uid` and `symbol`; do not invent a new identity to rename an API. The `reviewed` identity records which source contract an author examined, not a machine guarantee of correctness.

The generated declaration, parameters, inheritance and member list always follow the captured source. An authored signature in prose cannot replace those facts.

| Marker or state | Next synchronization |
| --- | --- |
| `source: xml` | Refreshes the default explanation from XML |
| No `source` marker in a registered API fragment | Treats it as XML-managed |
| `source: manual` | Preserves the explanation; updates displayed source facts |
| Unknown marker | Fails before overwriting content |
| Removed API with XML-managed prose | Removes the fragment and current navigation entry |
| Removed API with manual prose | Retains the file for review, outside current navigation and default search |

These overwrite rules apply only to registered API fragments. Manual guides, tutorials and ordinary Markdown are not claimed by the synchronizer.

## Interpret the checks

**Documentation validation** checks data integrity, identity, links, composition, examples and the site. Errors block publication.

**API editorial coverage** reports XML-only explanations, empty manual text, unchanged defaults marked manual, changed contracts awaiting review and retained text for removed APIs. Pending items produce a neutral result with warnings. They do not block a merge or deployment, and no automatic issue or comment is created. A reporting-program failure is a real failure, not an editorial reminder.

## Publish when the documentation is ready

Continue editing `draft`, or use feature PRs into it. Draft updates produce checks and previews. A maintainer manually opens and merges a `draft` to `main` PR using a merge commit; only then does the checked site deploy. Keep `draft` after publication.

See [publish documentation](publish-documentation.md) for the release boundary and [query documentation locally](documentation-queries.md) for the same type/member content through the shared query model.
