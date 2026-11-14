---
uid: api.e5eeb89ed3a03f753a6c2c4871785d28a3833c4dbda86fa742a6f89cfc2207c5
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Branch(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}})"
source: xml
reviewed: a574dcfb019fb27b08fa601351294aa5c1c35c0dfc22ff10f2fe5be9defc6e9b
title: "ShaderIrBuilder.Branch"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Builds a real conditional: only the selected region executes, including its memory and source-call effects.

**Parameter `condition`:** Scalar Boolean visible in this region.

**Parameter `whenTrue`:** Transient callback building the true region and its named outputs.

**Parameter `whenFalse`:** Transient callback building the false region with exactly matching output names/types.

**Returns:** Values merged into the enclosing scope; empty output maps represent effect-only branches.

**Exception `T:System.ArgumentException`:** The condition or branch output contracts are incompatible.

**Exception `T:System.InvalidOperationException`:** A callback mutates the enclosing scope or declares a nested stage input.
