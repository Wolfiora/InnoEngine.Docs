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

State relevant initialization, ownership, borrowing, transfer, threading, generation, cancellation, failure, rollback, and release conditions. Explain the difference between host and script-projected APIs. A normal await does not promise an owner-thread continuation.

Examples must identify their API surface and prerequisites. Executable C# uses a `csharp` fence and complete required context. Do not turn a failing executable example into plain text to evade verification. Never substitute host references to make an invalid script example compile.

## Reference quality

The user-approved scope is the engine, not a mirror of third-party native libraries or generated bindings. Projects under backend native implementation boundaries have `apiDocumentation: backend-native` in the existing bound project inventory. They retain a concise engine integration overview, but no type/member reference, native-call tutorial or executable raw-binding example is required or generated. This classification does not exempt managed adapters, engine service contracts, native correctness tests, legal provenance or product deployment validation.

Preserve all selected engine public and relevant protected symbols, overloads, nullable annotations, default values, generic constraints and inherited contracts. Script-projected engine APIs remain distinct from host APIs. Explain parameters, results, observable failures, and lifecycle obligations. Group genuinely shared contracts explicitly instead of repeating generic filler.

A managed backend can contain an upstream-generated constant catalog alongside engine contracts. Keep its full extraction facts. A reviewed `apiCatalogExclusions` entry in the same bound project inventory may exclude that source's catalog reference only when its exact source capture, source hash, declaration identity/count, upstream origin and rationale are recorded. The shared scope selector rejects changed declarations, executable contracts, partial-type splits, escaping paths and test owners. The report enumerates excluded identities; adjacent managed adapter contracts and concise engine-specific usage remain required. This is not an arbitrary skip-public-API facility or source behavior certification.

Use compact member summaries and readable detail sections. Long signatures scroll independently; long prose does not belong in wide tables. Missing semantics remain visible work, not a successful coverage claim.

## Links and migration

Pages and sections have stable identities. Moves update navigation, incoming links, source links, API ownership, and includes. Reject missing targets, cycles, duplicate authorities, and escaping paths. Record the original source identity and disposition for every migrated page. Preserve raw historical evidence.
