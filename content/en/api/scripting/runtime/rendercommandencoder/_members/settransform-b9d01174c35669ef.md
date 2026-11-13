---
uid: api.b9d01174c35669ef243cf786e5fa1f1579aae17b76403bb97efafea9ac05f21b
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.SetTransform(System.ReadOnlySpan{System.Single})"
source: xml
reviewed: a7ba3157813a733057182de24a7a3f103a69062d5f09032ae36ae4a4d20e0190
title: "SetTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Sets the column-major object transform for subsequent draws.

**Parameter `columnMajorMatrix`:** Matrix values borrowed for this call. An encoder that defers execution must copy them before returning.
