---
uid: api.43e12eb452de145247353bf1bec12120c6e6a6dbd0f147fda99173e432935362
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.ApplyEdit(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValue,InnoEngine.Rendering.MaterialValue,InnoEngine.Rendering.MaterialValue)"
source: xml
reviewed: 9b4701efe4b82402e37146f3c85fd125775a670593839dea6746e90b007457f3
title: "ShaderPropertyInspector.ApplyEdit"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Applies the edited components of a representative value without replacing unrelated mixed components.

**Parameter `type`:** Common exact Shader property type.

**Parameter `before`:** Representative value before the control gesture sample.

**Parameter `edited`:** Representative value after this sample.

**Parameter `target`:** Another selected Material's current effective value.

**Returns:** A detached value preserving the target's untouched channels, texture or sampler.
