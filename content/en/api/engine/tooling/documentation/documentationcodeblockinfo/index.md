---
uid: api.inno.tooling.documentation.0b12924e5051ea9e
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationCodeBlockInfo"
source: xml
reviewed: 7f5659564f14412c675f11e574f92ddd3339c1d45cf56ec74e0d9f9451f9bba3
title: "DocumentationCodeBlockInfo"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Describes one canonical fenced code block without executing it or inferring a compilation environment.

**Parameter `language`:** The authored fence language. An empty value remains visible for content-policy validation.

**Parameter `text`:** Original code with normalized LF line endings and no closing-fence newline.

**Parameter `contentIdentity`:** SHA-256 of the normalized code, independent of its source position.

**Parameter `line`:** One-based line of the opening fence in the authored Markdown snapshot.

**Parameter `section`:** The containing canonical heading identity, or null when the block precedes every heading.

**Parameter `declarationSymbols`:** Symbols whose recorded declaration identity exactly matches this block. Other blocks remain examples or instructions requiring an explicit validation context. A matching declaration is not a source API or executable-example certificate.
