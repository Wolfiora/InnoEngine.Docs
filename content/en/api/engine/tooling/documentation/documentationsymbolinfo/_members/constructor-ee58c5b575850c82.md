---
uid: api.ee58c5b575850c825fa517330705ab46d33cd61c70e834674bfadbf93524ba36
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationSymbolInfo.#ctor(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: d1e7cc79b2e36ad91395aa69b5465741b0644e03433e37e2067fb8afe020425d
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Describes an authored symbol's canonical anchor, declared signature identity and visible code. These facts support source comparisons; they do not certify behavioral prose or examples.

**Parameter `anchor`:** Explicit API anchor derived from the exact XML documentation identity.

**Parameter `signatureIdentity`:** Authored SHA-256 signature mapping to compare with the selected source manifest.

**Parameter `code`:** Original C# code fences within the symbol's section, or inline code in its legacy declaration row. An empty list provides no visible-declaration evidence.
