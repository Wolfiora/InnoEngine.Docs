---
uid: api.622b7e33750b8c4a34bd90c580cd76114743099b8b10447dee19c053d3531488
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Extract(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Int32)"
source: xml
reviewed: c920103b7697353d2b74d21b86c36fdef6705079613533f77feb8d19087d67c1
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
