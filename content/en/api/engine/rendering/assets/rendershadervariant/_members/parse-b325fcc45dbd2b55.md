---
uid: api.b325fcc45dbd2b55e9ee9b88fdbab3daea7ed9a7f8b849664d6a76cd6251ab1b
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.Parse(System.String)"
source: xml
reviewed: 923548b19ae4e48590bd0cb34bb628ce50d6065208891aaf4f8f418d1a5bea77
title: "Parse"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Parses the canonical representation stored in a deployed artifact.

**Parameter `value`:** The canonical semicolon-separated keyword selections.

**Returns:** The validated shader variant represented by `value`.

**Exception `T:System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.
