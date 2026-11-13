# Documentation requirements

Product documentation explains the implemented engine to users and extension authors. It is not an implementation diary or a replacement for engine development rules.

## Authority and English

Use the pinned engine source for declarations and XML, the engine's actual manifests for project/API identity, and Markdown for tutorials and cross-member explanation. Active prose is English. Preserve legal text, historical quotations, and exact identifiers. Describe unsupported and unverified behavior accurately.

Each API manifest records its captured source revision and tree independently of the current documentation candidate. Preserve those immutable source links when unchanged facts are reused. Changing the candidate revision alone must not rewrite every API page. Revalidate compatibility against the new engine input before certifying it; old captured facts or a matching declaration hash alone do not establish current source behavior. When extraction changes, bind the new facts and their actual capture provenance together.

Write derived project/API JSON with canonical UTF-8 and LF line endings before hashing it. A locally matching hash is insufficient if Git normalizes different bytes at commit time. Preserve original licensed asset bytes through the declared binary/non-text attributes and verify their provenance hashes; do not normalize legal payloads to satisfy the derived-fact rule.

## Page purpose

Every page has one primary purpose: landing, tutorial, how-to, explanation, project overview, API reference, or troubleshooting. Begin with what the reader can learn or accomplish. Use one H1, meaningful section headings, focused paragraphs, and descriptive links. Do not create empty template sections.

Teach tasks before requiring assembly knowledge. Keep one authoritative explanation and link to it. Separate public promises from internal implementation. Source links locate code but do not replace behavior documentation.

## Contracts and examples

The inherited complete units below define exact ownership, lifetime, API and example obligations. Link those contracts from tasks where readers need them.

Use the canonical page example context to select the required host or script surface. Compilation evidence is separate from readable prose and semantic review.

## Reference quality

The user-approved API scope includes public and externally usable protected C# engine, Editor, Build and tooling contracts, and actual script projections. Exclude every project under backends/, extern/ and tests/, declared test/fixture projects elsewhere, and non-C# projects. The actual project inventory owns these boundaries; do not maintain another project list. Preserve useful integration guidance, native correctness tests, legal provenance and product deployment validation.

Preserve all selected engine public and relevant protected symbols, overloads, nullable annotations, default values, generic constraints and inherited contracts. Script-projected engine APIs remain distinct from host APIs. Explain parameters, results, observable failures, and lifecycle obligations. Group genuinely shared contracts explicitly instead of repeating generic filler.

Each type and member has its own Markdown and stable symbol identity. source: xml or a missing source marker is automatically managed only within registered API files. source: manual preserves authored prose; facts, declarations, parameters and membership remain generated. Unknown source markers fail. Preserve removed manual prose outside current navigation and default search. Contract changes require editorial review; the tool does not claim to prove semantic quality. Manual gaps are neutral warnings, while invalid facts, broken links and invalid examples remain blocking.

Use compact member summaries and readable detail sections. Long signatures scroll independently; long prose does not belong in wide tables. Missing semantics remain visible work, not a successful coverage claim.

## Links and migration

Pages and sections have stable identities. Moves update navigation, incoming links, source links, API ownership, and includes. Reject missing targets, cycles, duplicate authorities, and escaping paths. Record the original source identity and disposition for every migrated page. Preserve raw historical evidence.

## Inherited engine documentation requirements

These complete units retain their original identities and source mappings in the engine rule registry. They are owned here; engine tasks load them from an explicit Docs checkout.

<!-- rule-unit: wiki -->
<a id="wiki"></a>
## 11. Documentation maintenance
- Product and API documentation belongs to InnoEngine.Docs under content/en/, entered through its task-oriented home page. The retired engine docs/ tree and its callers have been removed; do not recreate a parallel authority.
- Organize documentation into About, Getting Started, Manual, Architecture, Extending, Platforms/Backends, API and Contributing. Every category has a useful landing page; assembly navigation is secondary.
- Every actual csproj has one authoritative project entry, identified by source inventory and explicit owner metadata. Do not infer ownership from translated titles or filenames.
- Engine project entries cover responsibility/boundaries, dependencies/initialization, all public APIs, important protected extension points for derived implementers, common workflows, compilable examples, errors/lifetimes/reload and related navigation. All backend, extern, test/fixture and non-C# API references are excluded under the approved API draft/main plan; retain useful integration guides without excluded member-reference obligations.
- API declarations and examples follow current source. Do not describe internal implementation as a stable public contract. Explicitly identify internal mechanisms when explaining them.
- Adding, deleting, renaming or changing eligible APIs maintains source XML; master-to-draft synchronization updates their reference facts, fragments and derived navigation. Maintain affected Manual workflows separately on Docs draft. New projects receive their authoritative entry and coverage registration; paired PR metadata is not required.
- Use relative Markdown links between content pages. Project entries provide category and home/related-page navigation. Page moves repair every incoming link.
- Active prose is English under the approved modernization plan. API names, code, source comments and public XML remain English. Use small, complete composition examples instead of copying large source blocks.
- Distinguish currently supported behavior, internal details and future plans. Never present planned APIs as already implemented.
- Before extending documentation, inspect actual public types/members and relevant csproj dependencies. Afterward, reconcile Markdown links, navigation and source signatures.
<!-- /rule-unit: wiki -->

<!-- rule-unit: documentation-standard-0 -->
<a id="documentation-standard-0"></a>
# Documentation maintenance and verification

Use the [documentation repository](https://github.com/Wolfiora/InnoEngine.Docs), the [architecture overview](https://github.com/Wolfiora/InnoEngine.Docs/blob/main/content/en/architecture/overview.md) and the engine's documentation/architecture tooling as the content and verification entry points.
<!-- /rule-unit: documentation-standard-0 -->

<!-- rule-unit: documentation-standard-1 -->
<a id="documentation-standard-1"></a>
## One authoritative entry per project

Every actual project has one authoritative project entry and appears in its category navigation. Test-project pages explain verification scope, fixtures, prerequisites and execution rather than presenting test methods as product APIs. Current usage documentation belongs in InnoEngine.Docs; dated plans, execution records and historical acceptance remain in the owning repository's .agents/records/.

Explain responsibility, a quick workflow, initialization and shutdown before API detail, extension, failures and verification. Ownership descriptions identify creation, borrowing/transfer, threads and lifetime termination. Explicitly identify internal implementation details.
<!-- /rule-unit: documentation-standard-1 -->

<!-- rule-unit: documentation-standard-2 -->
<a id="documentation-standard-2"></a>
## API reference and source

Map engine public types, constructors, members, enum values and protected members usable by external derived types individually. Signatures preserve overloads, nullability, defaults and generic constraints; types also preserve inheritance, interfaces and delegate signatures. Synthesized public record members are in scope. Under the approved API draft/main plan, all backend, extern, test/fixture and non-C# API references are excluded; eligible engine, Editor, Build/tooling and actual script-projected contracts remain in scope.

Each member receives source facts and XML default explanations of behavior/results, usage constraints and failures. Authors can enrich individual type/member prose with source: manual; missing or stale editorial work is a non-blocking warning, not proof of semantic completeness. Source links do not replace use contracts. Resolve inheritdoc and retain local additions; explain eligible generated members without editing generated source.

The api comment marker associates a symbol with its signature for verification; it does not prove behavioral quality. Automatically refreshed reference data still requires ownership, threading and context review. An entry with no additional stated constraints does not imply thread safety or infallibility.
<!-- /rule-unit: documentation-standard-2 -->

<!-- rule-unit: documentation-standard-3 -->
<a id="documentation-standard-3"></a>
## Examples

- Executable C# examples use csharp fences and include required using directives, parameters and host prerequisites.
- Borrow Sessions, asset pipelines and build contexts through parameters rather than assuming undeclared globals.
- Script examples use logical namespaces and are checked against current trimmed script references. Do not make invalid examples pass by switching to implementation namespaces.
- Asynchronous examples explain owner-thread resumption and resource release. Ordinary await does not promise resumption on a specified thread.
- Explicitly identify declaration-only or procedural text. Do not convert failing executable examples into ordinary prose to bypass verification.
<!-- /rule-unit: documentation-standard-3 -->

<!-- rule-unit: documentation-standard-4 -->
<a id="documentation-standard-4"></a>
## Content boundaries

Explain capabilities through the engine's own public contracts, without depending on external plugin products, consumer-repository paths or their specific business models. The engine's Plugin mechanism, .iplugin, Source Mounts, Stable IDs and generations are current engine documentation topics. Browser Canvas and general canvas concepts may also be described normally.

Concrete third-party implementation names belong in their backend, Native, integration or toolchain pages. Neutral service pages explain capabilities and contracts. Deleted APIs, project paths and commands must not remain documented as usable.
<!-- /rule-unit: documentation-standard-4 -->

<!-- rule-unit: documentation-standard-5 -->
<a id="documentation-standard-5"></a>
## Native implementation boundaries

Backend projects retain useful engine integration guidance covering initialization, ownership, callbacks, threads and shutdown. Their type/member references, extern, tests/fixtures and non-C# API references are excluded under the approved API draft/main plan. Derive scope from the actual project inventory without a second project list. Eligible API includes resolve within the selected snapshot; cycles and path escapes fail, and moves repair incoming anchors. Native correctness, implementation tests, deployment validation and legal provenance remain required.
<!-- /rule-unit: documentation-standard-5 -->

<!-- rule-unit: documentation-standard-6 -->
<a id="documentation-standard-6"></a>
## Canonical source and example verification

Build validate plan/run consumes an explicitly prepared external documentation snapshot. Canonical source comparison and executable-example checks share actual SDK graph inputs. Build docs index prepares content; docs search/read/symbol only read the selected immutable generation. Retired Wiki switches are not supported.

Logical script examples explicitly select runtime-script or editor-script contexts and the current ScriptCompiler-generated references through the unified validation plan. Validators freeze and hash each reference's bytes. Host implementation assemblies must not supply types absent from the script surface. Record generation provenance and current product state together.

Documentation verification covers project entries, signature mappings, relative links, content boundaries and C# examples across all pages. Project examples use their owner's compilation references; architecture guides and category pages default to .NET contracts only. Logical script examples use explicit trimmed references. Complete examples requiring concrete engine composition live with their owning project, and guides link to them without duplicate maintenance.

Complete Host-example acceptance uses the explicitly selected SDK, compiles against actual ReferencePath and the current owning assembly, and records successful compiler evidence. SDK-free host checks are preliminary diagnostics only. Assemblies elsewhere in the repository do not establish an example's allowed references.

With an SDK selected, API models enumerate actual Compile items and conditional symbols. Selected engine generated types, nested types and partial members enter the same inventory; obj or Generated placement alone is not an exclusion. All backend, extern, test/fixture and non-C# API references are excluded, and other targets' unselected generated files are outside the current contract. Documentation scope does not disable extraction capabilities needed by architecture or ABI tests. Extraction does not execute Roslyn source generators, replace post-generation assembly boundary checks or verify every product configuration.

Native project overviews distinguish engine integration from generated ABI surfaces without reproducing their members. Review the actual facade and consumers to explain engine-facing borrowing, release and thread restrictions rather than assuming managed-object lifetimes. Do not count excluded native members as missing engine documentation or completed semantic review. Complete engine signature markers still do not establish complete semantics.

Analyzers understand the project's actual C# language version. Unknown LangVersion values fail rather than guessing Preview. Prepare the selected project when target/configuration/reference output is missing. Do not substitute another configuration or DLLs that happen to exist elsewhere in the repository.

Per-page semantic review remains separate work. Read [engine acceptance](https://github.com/Wolfiora/InnoEngine/blob/ai-pipeline/.agents/records/acceptance/current.md) and do not mistake page existence or complete markers for full documentation acceptance.
<!-- /rule-unit: documentation-standard-6 -->
