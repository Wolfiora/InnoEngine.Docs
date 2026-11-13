---
uid: api.inno.tooling.documentation.23c382091e047501
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationSymbolInfo"
source: xml
reviewed: 28823d2a47462c8eded74515e51fa9e040b02ba9ef65497a9b52f1143bb81df5
title: "DocumentationSymbolInfo"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Describes an authored symbol's canonical anchor, declared signature identity and visible code. These facts support source comparisons; they do not certify behavioral prose or examples.

**Parameter `anchor`:** Explicit API anchor derived from the exact XML documentation identity.

**Parameter `signatureIdentity`:** Authored SHA-256 signature mapping to compare with the selected source manifest.

**Parameter `code`:** Original C# code fences within the symbol's section, or inline code in its legacy declaration row. An empty list provides no visible-declaration evidence.
