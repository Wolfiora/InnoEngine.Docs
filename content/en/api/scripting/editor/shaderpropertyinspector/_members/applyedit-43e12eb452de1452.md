---
uid: api.43e12eb452de145247353bf1bec12120c6e6a6dbd0f147fda99173e432935362
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.ApplyEdit(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValue,InnoEngine.Rendering.MaterialValue,InnoEngine.Rendering.MaterialValue)"
source: xml
reviewed: d9b380a63dc45d864a51646686f221eb7fa7095ca744cf5460dcec94bef8487e
title: "ApplyEdit"
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
