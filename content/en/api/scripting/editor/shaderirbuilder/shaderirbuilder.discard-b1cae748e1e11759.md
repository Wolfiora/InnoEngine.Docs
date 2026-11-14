---
uid: api.b1cae748e1e1175921f75f82c9f02d673cb86a262eb86c4a24b23e8cbfe07463
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Discard(InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 0b578f928b51fec605689b6d127ab68f0be58ef6fe0fe5194a046b4bfcddd468
title: "ShaderIrBuilder.Discard"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Discards a fragment when the Boolean condition is true; other stages reject this instruction.

## Parameters

**Parameter `condition`:** Scalar Boolean from this block.

## Exceptions

**Exception `T:System.ArgumentException`:** The condition is not a Boolean or belongs to another builder.
