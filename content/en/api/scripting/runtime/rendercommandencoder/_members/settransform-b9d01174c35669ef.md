---
uid: api.b9d01174c35669ef243cf786e5fa1f1579aae17b76403bb97efafea9ac05f21b
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.SetTransform(System.ReadOnlySpan{System.Single})"
source: xml
reviewed: 852b928c9a7fa766ed151b30162d9fb6bbfa31f045b20241c6fe0517c33a8acd
title: "SetTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Sets the column-major object transform for subsequent draws.

**Parameter `columnMajorMatrix`:** Matrix values borrowed for this call. An encoder that defers execution must copy them before returning.
