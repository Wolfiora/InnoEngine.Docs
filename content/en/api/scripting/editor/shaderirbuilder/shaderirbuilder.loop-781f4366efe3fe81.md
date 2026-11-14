---
uid: api.781f4366efe3fe81ba6fca4adc9b4563531c1ea3b9d066438b2cc64c601bddc8
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Loop(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,InnoEditor.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue},System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}})"
source: xml
reviewed: d0c2db82eca0adc50d57cbb04f26682ab7ce3f903311c55dd73781b86faf9a85
title: "ShaderIrBuilder.Loop"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Builds a counted loop; each iteration receives the preceding iteration's complete carried state.

**Parameter `iterations`:** Unsigned iteration count, evaluated once before entering the loop.

**Parameter `initialState`:** Named values used before the first iteration and returned unchanged for zero iterations.

**Parameter `body`:** Transient callback receiving its builder, uint iteration index and typed carried values.

**Returns:** Final carried values in the enclosing scope; an empty state map permits effect-only loops.

**Exception `T:System.ArgumentException`:** The count is not uint or the body's output state changes names or types.

**Exception `T:System.InvalidOperationException`:** The body mutates the enclosing builder.
