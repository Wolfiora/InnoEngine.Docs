---
uid: api.inno.tooling.documentation.43fde1f8aa4bab96
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationResult"
source: xml
reviewed: 7fafd74490dc9f1ef61af5620c2773637abab716fd92ad5f3d63f07a7ac2f210
title: "DocumentationResult"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Returns transport-independent documentation content with explicit completeness and provenance.

**Parameter `status`:** Found, Empty, Ambiguous, Missing, Partial, Navigation, Mismatched or Ready. Execution failures throw rather than resemble content.

**Parameter `snapshot`:** The immutable documentation generation identity.

**Parameter `sourceApiStatus`:** Source validation state. Unverified never asserts that declarations match current engine source.

**Parameter `message`:** A concise explanation of the result and any required next action.

**Parameter `hits`:** Ordered content or navigation candidates; each identifies its completeness independently.

**Parameter `continuations`:** Remaining content or necessary contracts that must be read before claiming a complete contract.

**Parameter `nextRequest`:** Structured continuation for a result page or content segment, or null when that selection is exhausted. Associated contracts remain separately listed in continuations.
