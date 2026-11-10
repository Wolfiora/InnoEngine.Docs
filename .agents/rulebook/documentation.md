# Documentation requirements

Product documentation explains the implemented engine to users and extension authors. It is not an implementation diary or a replacement for engine development rules.

## Authority and English

Use the pinned engine source for declarations and XML, the engine's actual manifests for project/API identity, and Markdown for tutorials and cross-member explanation. Active prose is English. Preserve legal text, historical quotations, and exact identifiers. Describe unsupported and unverified behavior accurately.

## Page purpose

Every page has one primary purpose: landing, tutorial, how-to, explanation, project overview, API reference, or troubleshooting. Begin with what the reader can learn or accomplish. Use one H1, meaningful section headings, focused paragraphs, and descriptive links. Do not create empty template sections.

Teach tasks before requiring assembly knowledge. Keep one authoritative explanation and link to it. Separate public promises from internal implementation. Source links locate code but do not replace behavior documentation.

## Contracts and examples

State relevant initialization, ownership, borrowing, transfer, threading, generation, cancellation, failure, rollback, and release conditions. Explain the difference between host and script-projected APIs. A normal await does not promise an owner-thread continuation.

Examples must identify their API surface and prerequisites. Executable C# uses a `csharp` fence and complete required context. Do not turn a failing executable example into plain text to evade verification. Never substitute host references to make an invalid script example compile.

## Reference quality

Preserve all selected public and relevant protected symbols, overloads, nullable annotations, default values, generic constraints, inherited contracts, and generated/native surfaces. Explain parameters, results, observable failures, and lifecycle obligations. Group genuinely shared contracts explicitly instead of repeating generic filler.

Use compact member summaries and readable detail sections. Long signatures scroll independently; long prose does not belong in wide tables. Missing semantics remain visible work, not a successful coverage claim.

## Links and migration

Pages and sections have stable identities. Moves update navigation, incoming links, source links, API ownership, and includes. Reject missing targets, cycles, duplicate authorities, and escaping paths. Record the original source identity and disposition for every migrated page. Preserve raw historical evidence.
