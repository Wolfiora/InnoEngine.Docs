---
uid: api.b1cae748e1e1175921f75f82c9f02d673cb86a262eb86c4a24b23e8cbfe07463
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Discard(InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 21aaf346dd069badcfb08aacd1342febc7659f16188e2e5cd8ff8f91d93d06b8
title: "Discard"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Discards a fragment when the Boolean condition is true; other stages reject this instruction.

**Parameter `condition`:** Scalar Boolean from this block.

**Exception `T:System.ArgumentException`:** The condition is not a Boolean or belongs to another builder.
