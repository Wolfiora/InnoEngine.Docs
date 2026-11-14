---
uid: api.1990bc9171a6745d09e6e302441adfd508360993c216c90161e277a7e8268f6a
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.ApplyEdit(Inno.Rendering.ShaderPropertyType,Inno.Rendering.Assets.MaterialValue,Inno.Rendering.Assets.MaterialValue,Inno.Rendering.Assets.MaterialValue)"
source: xml
reviewed: 0c96e2c0ca89666d3364cc9cb6aaf820afbe4d0f1e14becdf17f46d70cdfadad
title: "ShaderPropertyInspector.ApplyEdit"
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
