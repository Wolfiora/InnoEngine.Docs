---
uid: api.8ba484df300fa92026ce1188414b69ca0f39d9d48ca891c5d6829d54af6e4377
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.SetUniform(InnoEngine.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 4a09042f7b7784cef74e73cb69b8dc098fd105626f3f0e633cdd422fb7a6ccd8
title: "SetUniform"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Sets the byte value of a shader uniform.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `value`:** Bytes borrowed for this call. An encoder that defers execution must copy them before returning.
