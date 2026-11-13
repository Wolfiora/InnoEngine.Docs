---
uid: api.b325fcc45dbd2b55e9ee9b88fdbab3daea7ed9a7f8b849664d6a76cd6251ab1b
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.Parse(System.String)"
source: xml
reviewed: 4c1f6345622f19c9d5c0074cdfa93183b6feff0c24603a79394c4772d9af830f
title: "RenderShaderVariant.Parse"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Parses the canonical representation stored in a deployed artifact.

**Parameter `value`:** The canonical semicolon-separated keyword selections.

**Returns:** The validated shader variant represented by `value`.

**Exception `T:System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.
