---
uid: api.d75da50db8192b8f8511d210c4987e606edde4bcf74c00a8025bafb48be93632
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationRequest.#ctor(System.String,System.String,System.String,System.String,System.String,System.Int32,System.Int32,System.String)"
source: xml
reviewed: 4b0d0811bf8cc846953946681d20dbbf1e8f2153d51bf61acea8b757d7f0636f
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
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
