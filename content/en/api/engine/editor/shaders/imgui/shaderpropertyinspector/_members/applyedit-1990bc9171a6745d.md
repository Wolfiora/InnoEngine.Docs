---
uid: api.1990bc9171a6745d09e6e302441adfd508360993c216c90161e277a7e8268f6a
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.ApplyEdit(Inno.Rendering.ShaderPropertyType,Inno.Rendering.Assets.MaterialValue,Inno.Rendering.Assets.MaterialValue,Inno.Rendering.Assets.MaterialValue)"
source: xml
reviewed: 736b79bcd38e1213b9b3ec81084b0ae55c8e4511032f8d7f0c6be4fa5c34f23b
title: "ApplyEdit"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Applies the edited components of a representative value without replacing unrelated mixed components.

**Parameter `type`:** Common exact Shader property type.

**Parameter `before`:** Representative value before the control gesture sample.

**Parameter `edited`:** Representative value after this sample.

**Parameter `target`:** Another selected Material's current effective value.

**Returns:** A detached value preserving the target's untouched channels, texture or sampler.
