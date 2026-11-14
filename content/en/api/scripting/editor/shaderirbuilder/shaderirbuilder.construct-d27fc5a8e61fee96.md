---
uid: api.d27fc5a8e61fee965950788bf6f0b3eb78aa58851c1551a712a50e970b976e48
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Construct(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderIrValue[])"
source: xml
reviewed: 6dff8f56170ee22f2b57270603a4138544f5c211fc38d5a6a136ed8a426c5f6b
title: "ShaderIrBuilder.Construct"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Constructs a complete vector, column-major matrix, structure or fixed array from typed members.

## Parameters

**Parameter `type`:** The complete aggregate type.

**Parameter `members`:** Scalar vector/matrix components, declaration-ordered structure fields, or array elements.

## Returns

A value of the requested type.

## Exceptions

**Exception `T:System.ArgumentException`:** The type is not an aggregate or members have incorrect count or types.
