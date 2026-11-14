---
uid: api.79cfbe98a09ad821370547a0f3b6c42951f6b788af757ea627b2b35ce05dc006
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.SetUniform(Inno.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 35dbeb59d6d53459cfbb7a303e9f4727f6311ca03bfaa7da989ee2526bc3412d
title: "RenderCommandEncoder.SetUniform"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Sets the byte value of a shader uniform.

## Parameters

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `value`:** Bytes borrowed for this call. An encoder that defers execution must copy them before returning.
