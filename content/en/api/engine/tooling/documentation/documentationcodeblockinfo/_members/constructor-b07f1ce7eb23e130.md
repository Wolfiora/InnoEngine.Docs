---
uid: api.b07f1ce7eb23e130e9d503f80cdd3e7958565fff453ba331b5bb3c8635f4b0ec
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationCodeBlockInfo.#ctor(System.String,System.String,System.String,System.Int32,System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: a216138a1fe6079d14991150a3ef375f3c5e134c82915d922a1dd30d8d05d423
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Describes one canonical fenced code block without executing it or inferring a compilation environment.

**Parameter `language`:** The authored fence language. An empty value remains visible for content-policy validation.

**Parameter `text`:** Original code with normalized LF line endings and no closing-fence newline.

**Parameter `contentIdentity`:** SHA-256 of the normalized code, independent of its source position.

**Parameter `line`:** One-based line of the opening fence in the authored Markdown snapshot.

**Parameter `section`:** The containing canonical heading identity, or null when the block precedes every heading.

**Parameter `declarationSymbols`:** Symbols whose recorded declaration identity exactly matches this block. Other blocks remain examples or instructions requiring an explicit validation context. A matching declaration is not a source API or executable-example certificate.
