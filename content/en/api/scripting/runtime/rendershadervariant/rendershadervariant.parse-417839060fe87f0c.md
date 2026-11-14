---
uid: api.417839060fe87f0cbbfca153b8d46abf19daad7b25ba4439f1e5309505eabc3a
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderVariant.Parse(System.String)"
source: xml
reviewed: 156c3ecb0c3ee206be162898542642f016f5faf36d5e35f2fbf1fca9b0dd7500
title: "RenderShaderVariant.Parse"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Parses the canonical representation stored in a deployed artifact.

## Parameters

**Parameter `value`:** The canonical semicolon-separated keyword selections.

## Returns

The validated shader variant represented by `value`.

## Exceptions

**Exception `T:System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.
