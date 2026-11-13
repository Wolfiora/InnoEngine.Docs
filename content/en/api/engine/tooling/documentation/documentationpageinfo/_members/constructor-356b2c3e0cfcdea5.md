---
uid: api.356b2c3e0cfcdea5a518840ab7154db407d3cfd8895f10fe3acaf91934564960
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationPageInfo.#ctor(System.String,System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Int32},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Tooling.Documentation.DocumentationSymbolInfo},System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationCodeBlockInfo},Inno.Tooling.Documentation.DocumentationExampleContext)"
source: xml
reviewed: 232f7cf617f3af7a45f581f2a4c8cb062414bf5870ac11d50fc30daf6a5b9882
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Supplies canonical page metadata to navigation and rendered-output checks without a second Markdown parser.

**Parameter `id`:** Stable authored page identity.

**Parameter `path`:** Source path relative to the selected Docs checkout.

**Parameter `contentIdentity`:** SHA-256 of original UTF-8 Markdown text.

**Parameter `title`:** Plain-text H1 derived by the canonical parser.

**Parameter `kind`:** Validated page purpose, such as tutorial, project or api.

**Parameter `owners`:** Actual project identities from the bound manifest.

**Parameter `surface`:** Qualified API surface, or null for shared guidance.

**Parameter `sections`:** Canonical heading anchors mapped to one-based source lines.

**Parameter `symbols`:** Exact XML symbol identities mapped to canonical anchors, signature identities and visible code.

**Parameter `contracts`:** Necessary page or section identities that must remain visible to readers.

**Parameter `includes`:** Source-relative API includes, validated for ownership, existence and cycles.

**Parameter `codeBlocks`:** Canonical fenced code for example selection and declaration comparison, without reparsing Markdown. Compilation contexts and execution evidence belong to the validation caller.

**Parameter `examples`:** Explicit authored reference context, or null when the page declares no example context. A validator must report executable examples without a context as blocked, not guess one from a namespace.
