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

Every API element has its own Markdown and published page. A type keeps its `index.md`; its members use dotted filenames such as `value.count-<stable-id>.md` in the same directory. The displayed name is `Value.count`; the identity suffix distinguishes overloads without becoming an API name. Type pages link to members and nested types through description tables. Nested names retain their declaring chain, such as `Outer<T>.Inner<U>.Read`. Project categories use table navigation at every depth.

Each element carries its own declaration, source marker and prose. Member pages link the declaring type and its required usage contracts. Website and AI queries expose the same independent pages; reading one member does not load every sibling's explanation.

Edit the relevant fragment and change its ownership marker:

```yaml
---
# Generated metadata. Keep the existing values.
uid: <keep-the-existing-page-identity>
symbol: <keep-the-exact-symbol-identity>
reviewed: <managed-source-contract-fingerprint>

# Authoring metadata.
source: manual
outdated: false
---
```

Write a meaningful explanation, example or applicable constraint. Merely changing the marker does not complete editorial work. Keep the exact existing `uid` and `symbol`; do not invent a new identity to rename an API. The `reviewed` identity records which source contract an author examined, not a machine guarantee of correctness.

After reviewing your explanation against the current declaration and XML, acknowledge that review from the Docs repository:

```sh
npm run docs:review -- content/en/api/engine/core/identity/identity/index.md
```

Replace the path with the registered page you edited. The command uses the pinned managed documentation tooling, sets `reviewed` to the current contract and clears `outdated`. It never edits the explanation, builds engine products, or publishes the site. It can explicitly fetch/bootstrap the pinned tool on first use. An explicit existing immutable engine checkout can be selected with `--engine-root PATH`. Ordinary read-only queries do not perform this preparation.

The generated summary, declaration, parameters, inheritance and member list always follow the captured source. The summary appears below the title and above the status panel, including on `source: manual` pages; it is not stored in the editable Markdown body. Change source XML to correct that introduction. An authored signature in prose cannot replace generated facts.

| Marker or state | Next synchronization |
| --- | --- |
| `source: xml` | Refreshes the default explanation from XML |
| No `source` marker in a registered API fragment | Treats it as XML-managed |
| `source: manual` | Preserves the explanation; updates displayed source facts |
| Unknown marker | Fails before overwriting content |
| Removed API with XML-managed prose | Removes the fragment and current navigation entry |
| Removed API with manual prose | Retains the file for review, outside current navigation and default search |

These overwrite rules apply only to registered API fragments. Manual guides, tutorials and ordinary Markdown are not claimed by the synchronizer.

## Understand frontmatter and stable addresses

Frontmatter is the YAML block between the opening `---` lines. It describes identity and authoring ownership, not an alternative source of API declarations.

| Field | Meaning | Author action |
| --- | --- | --- |
| `uid` | Stable page identity used by contract links and queries | Preserve it |
| `symbol` | Exact API family, project and XML documentation ID, including overload identity | Preserve it; source changes own API renames |
| `outdated` | Sticky editorial review flag | Set `true` to request review; use the review command to acknowledge it. Clearing/deleting it alone cannot hide a changed contract |
| `source` | `xml` permits automatic prose updates; `manual` transfers prose to the author | Change to `manual` before writing an explanation |
| `reviewed` | Digest of the contract and XML/context inputs last acknowledged by the author | Do not edit this hash; run `npm run docs:review -- <page>` after actual review |
| `title` | Page label; composed API titles follow current source identity | Do not use it to rename a source symbol |
| `kind` | Page type, `api` here | Keep it |
| `owners` | Owning projects; composition reconciles actual ownership | Keep the generated owner |
| `apiSurface` | Host or script compilation surface | Do not confuse it with Scope |
| `apiScope` | Runtime, Editor or Authoring | Actual script projection supplies this |
| `contracts` | Stable page/section references to necessary constraints | Maintain meaningful associations; declaring-type obligations are inherited |
| `aliases` | Additional search terms | Add useful reader terminology |
| `exampleMode`, `exampleProjects` | Compilation context for examples | Select real dependencies; do not relabel invalid examples to bypass checks |

Member filenames use the first 16 hexadecimal characters of SHA-256 over `family:project:xml-documentation-id`. Disambiguated type folders use 12 characters of that identity digest. Machine paths, timestamps, build configuration and operating system are not inputs. Identical symbols therefore retain their suffix across environments. Changing identity, such as project, declaring type, method name, generic arity or parameter-type overload, produces a different identity. Scope/category changes can move the readable path while retaining the suffix. Digests are identifiers, not API names or security certificates.

A manual file is not frozen source code. Its authored explanation is retained when XML or declarations change; displayed declarations and member tables still follow source facts. A path migration can move the file and repair relative links without regenerating its explanation. A deleted API's manual file remains for review, outside current navigation and default queries. Renames are not guessed to be the same API, and text is never silently reassigned to a different overload.

API frontmatter has two groups separated by a blank line and YAML comments. The upper group holds generated identities, classification and the `reviewed` fingerprint. The lower group holds editable ownership, review requests, contract links, aliases and example settings. Comments are ignored by YAML; they are not extra metadata fields. Synchronization can refresh the upper group and set the stale flag while preserving manual body bytes.

A status panel appears above required contracts:

| Status | Meaning |
| --- | --- |
| Synced, pale yellow circle/exclamation | XML-managed explanation, including a missing source marker |
| Outdated, pale red circle/cross | Manual explanation whose declaration/XML/context fingerprint changed, or whose author requested review |
| Verified, pale green circle/check | Manual explanation with no outstanding source review |

Verified describes editorial ownership and review state; it does not certify the explanation's semantic correctness. Editorial gaps remain non-blocking warnings. Source provenance remains directly above the footer's GitHub editing link. Build target/configuration details remain in reference/query provenance instead of cluttering declaration headings.

XML remarks, parameters, returns, exceptions and examples become real Markdown sections in the fragment, using `##` headings at the same level as Declaration. An API with only a summary can have an empty Markdown body. With `source: manual`, you can replace or remove these body sections; synchronization preserves your body while the summary and declaration continue to follow source facts. The website and exact symbol queries include both the generated summary and the editable body. Project, API family and Scope appear immediately above inheritance.

Sidebar groups start collapsed. Top-level headings only expand or collapse and use chevrons. Deeper groups use square plus/minus controls; a linked category name opens its own page independently. Full-row highlights and animated width changes preserve readable labels up to half the desktop viewport. The sidebar remembers groups you opened during the browsing session. Engine project categories and Scripting Scopes list types alphabetically. Select a type to find its members and nested types in the member table.

## Maintain required contract links

The editable `contracts` list identifies prerequisites the reader must understand before using the API. Values are stable page identities with an optional section anchor, not filenames or source signatures. The composer exposes them under **Required contracts**. Member pages also receive their declaring type's contracts.

For example, `InspectorCondition` references:

```yaml
contracts:
- api.projects.inno-editor-annotations#loading-and-script-availability
- manual.scripting.use-script-api
```

The first link explains annotation loading and script availability; the second explains the script API model. Keep both while those prerequisites apply. If a new conditional Inspector guide becomes authoritative, add its actual registered page identity. If a guide moves or its section is renamed, update the identity or anchor. Do not remove a necessary ownership, lifetime or availability constraint merely to shorten the page. Missing destinations and invalid anchors fail documentation validation.

These associations remain editable for both XML-managed and manual explanations. Editing them does not transfer prose ownership: leave `source: xml` when you only maintain links.

## Interpret the checks

**Documentation validation** checks data integrity, identity, links, composition, examples and the site. Errors block publication.

**API editorial coverage** reports XML-only explanations, empty manual text, unchanged defaults marked manual, changed contracts awaiting review and retained text for removed APIs. Pending items produce a neutral result with warnings. They do not block a merge or deployment, and no automatic issue or comment is created. A reporting-program failure is a real failure, not an editorial reminder.

## Publish when the documentation is ready

Continue editing `draft`, or use feature PRs into it. Draft updates produce checks and previews. A maintainer manually opens and merges a `draft` to `main` PR using a merge commit; only then does the checked site deploy. Keep `draft` after publication.

See [publish documentation](publish-documentation.md) for the release boundary and [query documentation locally](documentation-queries.md) for the same type/member content through the shared query model.
