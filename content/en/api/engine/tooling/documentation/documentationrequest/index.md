---
uid: api.inno.tooling.documentation.8e6e5522aad9a235
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationRequest"
source: xml
reviewed: ef511955904a1f1a2c075d8a7642701b8e270dc35dd89eac1d4b3fe12f12f0af
title: "DocumentationRequest"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Selects a read-only query against one already published documentation snapshot.

**Parameter `operation`:** Search, read, symbol, resource or status; operation names use lowercase ASCII.

**Parameter `value`:** Search terms, a stable page identity or relative content path, an XML symbol ID, or a resource URI.

**Parameter `project`:** An exact project identity from the source project manifest, or null for every project.

**Parameter `surface`:** An exact API surface identity, or null to return qualified candidates without choosing a surface.

**Parameter `section`:** A section anchor within the selected page, or null for the page.

**Parameter `offset`:** Zero-based UTF-16 continuation offset within the selected content; search uses a result offset.

**Parameter `limit`:** Maximum search candidates, between one and one hundred. Content reads retain complete units or explicit continuations.

**Parameter `scope`:** Declared Runtime, Editor or Authoring scripting scope, or null for every scope.
