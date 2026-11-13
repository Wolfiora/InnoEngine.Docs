---
uid: api.79cfbe98a09ad821370547a0f3b6c42951f6b788af757ea627b2b35ce05dc006
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.SetUniform(Inno.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: d4f9adf83a354facfa8f3ddf6633bb5b9df043fe32ffe00b4797f9aae71022d8
title: "SetUniform"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Sets the byte value of a shader uniform.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `value`:** Bytes borrowed for this call. An encoder that defers execution must copy them before returning.
