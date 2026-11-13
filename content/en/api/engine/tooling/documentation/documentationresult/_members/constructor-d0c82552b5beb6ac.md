---
uid: api.d0c82552b5beb6ac3da7101b23c60424c8c59ea7ec8b474f296fea18d84454cc
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationResult.#ctor(System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationHit},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationContinuation},Inno.Tooling.Documentation.DocumentationRequest)"
source: xml
reviewed: 95ddb0020e3b0111729ea5f532a67d6f0e8fed71eefffeefbbd05942058a44ef
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Returns transport-independent documentation content with explicit completeness and provenance.

**Parameter `status`:** Found, Empty, Ambiguous, Missing, Partial, Navigation, Mismatched or Ready. Execution failures throw rather than resemble content.

**Parameter `snapshot`:** The immutable documentation generation identity.

**Parameter `sourceApiStatus`:** Source validation state. Unverified never asserts that declarations match current engine source.

**Parameter `message`:** A concise explanation of the result and any required next action.

**Parameter `hits`:** Ordered content or navigation candidates; each identifies its completeness independently.

**Parameter `continuations`:** Remaining content or necessary contracts that must be read before claiming a complete contract.

**Parameter `nextRequest`:** Structured continuation for a result page or content segment, or null when that selection is exhausted. Associated contracts remain separately listed in continuations.
