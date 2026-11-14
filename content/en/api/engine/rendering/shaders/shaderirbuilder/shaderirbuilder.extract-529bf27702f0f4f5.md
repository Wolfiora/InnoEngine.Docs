---
uid: api.529bf27702f0f4f578d6dc264e024e245d4faa9e49779693c371aa1989f1b7cb
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Extract(Inno.Rendering.Shaders.ShaderIrValue,System.Int32)"
source: xml
reviewed: f663c8ba651cfb514bbb1b9fa63388fc8ab76fbef3be3d2eab9904c316d4927f
title: "ShaderIrBuilder.Extract"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Extracts one static component, structure member or array element without source-language member syntax.

**Parameter `value`:** Aggregate value from this builder.

**Parameter `memberIndex`:** Zero-based member index; a matrix index selects a column vector.

**Returns:** The precisely typed selected member.

**Exception `T:System.ArgumentException`:** The input is not an aggregate.

**Exception `T:System.ArgumentOutOfRangeException`:** The member index is outside the aggregate layout.
