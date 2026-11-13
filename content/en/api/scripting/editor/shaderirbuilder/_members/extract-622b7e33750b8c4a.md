---
uid: api.622b7e33750b8c4a34bd90c580cd76114743099b8b10447dee19c053d3531488
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Extract(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Int32)"
source: xml
reviewed: e1d25fdba304571894a475a8d3008b416a27ed06f4d5911549193723990e5d91
title: "Extract"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Extracts one static component, structure member or array element without source-language member syntax.

**Parameter `value`:** Aggregate value from this builder.

**Parameter `memberIndex`:** Zero-based member index; a matrix index selects a column vector.

**Returns:** The precisely typed selected member.

**Exception `T:System.ArgumentException`:** The input is not an aggregate.

**Exception `T:System.ArgumentOutOfRangeException`:** The member index is outside the aggregate layout.
