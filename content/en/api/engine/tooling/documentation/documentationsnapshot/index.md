---
uid: api.inno.tooling.documentation.b438c8aef139e820
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationSnapshot"
source: xml
reviewed: d7ffa1c50b1011532c7b7a6468ab2f5efdb5d9af76742bd8a06741a82e14bbb2
title: "DocumentationSnapshot"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Owns a protected immutable snapshot and answers transport-independent documentation requests. Concurrent queries are supported; the owner must finish them before disposing the session. Exact reads and symbol lookups do not initialize keyword-search postings.
