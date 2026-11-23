---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: contributing.api-documentation
kind: how-to

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners: [Inno.Tooling.Documentation]

# Authoring metadata. Edit these fields and the text below.
title: Maintain API documentation
description: Maintain source XML, enrich individual API explanations, and publish documentation through draft and main.
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
| Scripting | Members in the actual compiler-produced projections | Declared Runtime, Editor and Authoring scopes, then owning-project categories and alphabetical types |

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
sourceFingerprint: <managed-source-contract-fingerprint>

# Authoring metadata.
source: FLwolfy
outdated: false
---
```

Set `source` to the human or AI author, edit the explanation and commit it. The page shows Authored immediately on the next build. When upstream facts change, synchronization records the affected prose and the page shows Outdated. Editing the body or description changes it back to Authored. Keep the existing `uid` and `symbol`.

Declarations, parameters, inheritance and member lists always follow captured source. Summary text uses source XML unless the author supplies a description list. The compact editorial status appears at the right end of the page context header, immediately left of the desktop TABLE OF CONTENTS column. On narrow screens it remains in the context area. The TOC divider can be dragged or adjusted with arrow keys; Home and End select its bounds, and double-click restores the default. The width is remembered for the current browsing session. The summary appears immediately below the title in a Markdown blockquote, including on `source: FLwolfy` pages; it is not stored in the editable Markdown body. Use `description: null` (or `~`) for XML summaries; supply a nonempty list to override them. An authored signature in prose cannot replace generated facts.

For a partial type, the compiler can combine XML comments from more than one declaration. For example, `NativeBindingGenerator` has a summary in both `NativeBindingGenerator.cs` and `NativeBindingGenerator.Inputs.cs`; both are present in the captured type XML. Each distinct summary appears as a separate bullet inside the quote. Paragraph breaks within one summary do not create additional bullets. A single summary also has one bullet. Unless overridden with description metadata, these introductions are source summaries, not generated explanatory prose. Inspect every partial declaration when comparing the reference with source. The renderer must not silently discard a summary, invent additional sentences or relabel source summaries as remarks.

| Marker or state | Next synchronization |
| --- | --- |
| `source: xml` | Refreshes the default explanation from XML |
| No `source` marker in a registered API fragment | Treats it as XML-managed |
| `source: FLwolfy` | Preserves the explanation; updates displayed source facts |
| Empty author name | Fails before overwriting content |
| Removed API with XML-managed prose | Removes the fragment and current navigation entry |
| Removed API with manual prose | Retains the file for review, outside current navigation and default search |

These overwrite rules apply only to registered API fragments. Manual guides, tutorials and ordinary Markdown are not claimed by the synchronizer.

## Understand frontmatter and stable addresses

Frontmatter is the YAML block between the opening `---` lines. It describes identity and authoring ownership, not an alternative source of API declarations.

| Field | Meaning | Author action |
| --- | --- | --- |
| `uid` | Stable page identity used by contract links and queries | Preserve it |
| `symbol` | Exact API family, project and XML documentation ID, including overload identity | Preserve it; source changes own API renames |
| `outdated` | Explicit author warning | Optionally set `true` to mark an authored page outdated until cleared |
| `source` | `xml` permits automatic prose updates; any nonempty author name other than `xml` transfers prose to that author | Set your name before writing an explanation |
| `sourceFingerprint`, `outdatedFor` | Current source identity and the text affected by a source change | Maintained automatically |
| `title` | Page label; composed API titles follow current source identity | Do not use it to rename a source symbol |
| `kind` | Page type, `api` here | Keep it |
| `owners` | Owning projects; composition reconciles actual ownership | Keep the generated owner |
| `apiSurface` | Host or script compilation surface | Do not confuse it with Scope |
| `apiScope` | Runtime, Editor or Authoring | Actual script projection supplies this |
| `contracts` | Stable page/section references to necessary constraints | Tool-maintained; do not edit during prose authoring |
| `aliases` | Additional search terms | Add useful reader terminology |
| `exampleMode`, `exampleProjects` | Compilation context for examples | Select real dependencies; do not relabel invalid examples to bypass checks |

Member filenames use the first 16 hexadecimal characters of SHA-256 over `family:project:xml-documentation-id`. Disambiguated type folders use 12 characters of that identity digest. Machine paths, timestamps, build configuration and operating system are not inputs. Identical symbols therefore retain their suffix across environments. Changing identity, such as project, declaring type, method name, generic arity or parameter-type overload, produces a different identity. Scope/category changes can move the readable path while retaining the suffix. Digests are identifiers, not API names or security certificates.

A manual file is not frozen source code. Its authored explanation is retained when XML or declarations change; displayed declarations and member tables still follow source facts. A path migration can move the file and repair relative links without regenerating its explanation. A deleted API's manual file remains for review, outside current navigation and default queries. Renames are not guessed to be the same API, and text is never silently reassigned to a different overload.

API frontmatter has two groups separated by a blank line and YAML comments. The upper group holds generated identities, classification, required `contracts` and source and prose fingerprints. The lower group holds editable ownership, description overrides, explicit outdated warnings, aliases and example settings. Comments are ignored by YAML; they are not extra metadata fields. Synchronization can refresh the upper group and set the stale flag while preserving manual body bytes.

The status header shows an icon and name, without a description paragraph:

| Status | Meaning |
| --- | --- |
| Synced, pale yellow circle/exclamation | XML-managed explanation, including a missing source marker |
| Outdated, pale red circle/cross | Manual explanation whose declaration/XML/context fingerprint changed, or explicitly marked outdated by the author |
| Authored, pale green circle/check | Explanation maintained by its named author |

Authored identifies who maintains the explanation. Editorial gaps remain non-blocking warnings. Source provenance remains directly above the footer's GitHub editing link. Build target/configuration details remain in reference/query provenance instead of cluttering declaration headings.

XML remarks, parameters, returns, exceptions and examples become real Markdown sections in the fragment, using `##` headings at the same level as Declaration. An API with only a summary can have an empty Markdown body. With `source: FLwolfy`, you can replace or remove these body sections; synchronization preserves your body while the declaration continues to follow source facts and description overrides remain intact. The website and exact symbol queries include both the effective introduction and the editable body. API metadata appears before Declaration, one field per line in alphabetical order.

Sidebar groups start collapsed. Top-level headings only expand or collapse and use chevrons. At any depth, a group without its own page also uses a chevron. Only linked categories inside API Reference use square plus/minus controls; their names open their pages independently. All non-API groups use disclosure-only chevrons. The current page has a stronger full-row highlight than its expanded ancestor groups. Animated width changes preserve readable labels up to one third of the desktop viewport, with horizontal scrolling beyond that limit. The sidebar remembers groups you opened during the browsing session. Engine uses the owning project hierarchy. Scripting preserves Authoring, Editor and Runtime scopes, then uses the same project hierarchy within each scope. Remove only the fixed Inno. project prefix and split its remaining segments into categories. Types within each project sort alphabetically; expandable API categories precede leaves. Category tables, sidebar and sibling pagination share these relationships. Script category files live under each scope's _projects directory to avoid collisions with existing type URLs; this storage directory is not a visible navigation level. Select a type to find its members and nested types in the member table.

## Generated contract links

The tool-maintained `contracts` list links stable page or section identities to necessary lifecycle, ownership and availability constraints. It belongs to the generated frontmatter group; ordinary prose editing must not change it. Members inherit the declaring type's obligations. Changes to these associations belong to documentation-tool maintenance, with link and contract validation.

## Override the introduction

Leave `description: null` to use the captured XML summaries. To supply your own introduction, use a list:

```yaml
source: FLwolfy
description:
- Explains the first aspect of this API.
- Explains a second important constraint.
```

Each item becomes one bullet below the page title. Type and member tables show the same items as separate paragraphs without bullets. The override also appears in local documentation queries. Synchronization preserves this field independently of XML-managed body updates; reset it to null to follow XML again. Empty strings, empty lists, null items and structured list items are invalid. Source declarations remain generated.

`source: xml` (or a missing source field) permits body synchronization. Any other nonempty string is the displayed author name and protects the body. Use your actual name, not the former `manual` marker. The six pre-existing manual explanations retain their bodies and are attributed to InnoEngine contributors during migration. The website footer credits FLwolfy as its creator and separately identifies each page's prose source.

## Interpret the checks

**Documentation validation** checks data integrity, identity, links, composition, examples and the site. Errors block publication.

**API editorial coverage** reports XML-only explanations, empty manual text, unchanged defaults marked manual, authored explanations affected by source changes and retained text for removed APIs. Pending items produce a neutral result with warnings. They do not block a merge or deployment, and no automatic issue or comment is created. A reporting-program failure is a real failure, not an editorial reminder.

## Publish when the documentation is ready

Continue editing `draft`, or use feature PRs into it. Draft updates produce checks and previews. A maintainer manually opens and merges a `draft` to `main` PR using a merge commit; only then does the checked site deploy. Keep `draft` after publication.

See [publish documentation](publish-documentation.md) for the release boundary and [query documentation locally](documentation-queries.md) for the same type/member content through the shared query model.
