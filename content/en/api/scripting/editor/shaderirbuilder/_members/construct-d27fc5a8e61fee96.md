---
uid: api.d27fc5a8e61fee965950788bf6f0b3eb78aa58851c1551a712a50e970b976e48
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Construct(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderIrValue[])"
source: xml
reviewed: 0ea463002b63e913f48b7c33034f786444e00b8152846228907f1708fb77c08c
title: "Construct"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Constructs a complete vector, column-major matrix, structure or fixed array from typed members.

**Parameter `type`:** The complete aggregate type.

**Parameter `members`:** Scalar vector/matrix components, declaration-ordered structure fields, or array elements.

**Returns:** A value of the requested type.

**Exception `T:System.ArgumentException`:** The type is not an aggregate or members have incorrect count or types.
