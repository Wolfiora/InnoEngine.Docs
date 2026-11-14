---
uid: api.8cabdf28fbab6251c00abbb4c534ae679b04614d0808a98c0f07861066f44b4c
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Select(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 4175dfae4a71a7c7216031e4c7d43bff18176c6307b991daf26f756c72f1de18
title: "ShaderIrBuilder.Select"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Selects between equal typed values without conditionally executing their producers.

**Parameter `condition`:** Scalar Boolean condition from this builder.

**Parameter `whenTrue`:** Value selected when true.

**Parameter `whenFalse`:** Value selected when false.

**Returns:** A value with the selected operands' complete type.

**Exception `T:System.ArgumentException`:** The condition is not bool or selected value types differ.
