---
uid: api.2a4ebcc5a228f932fc32558a43387b4e6149652207d08b379712cb301815c1af
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.LoadStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 8b1fcb0ee1d6358d71c41e5a29e2b6ac2a4b0ca72c4c88dbc6aa78e5ac813040
title: "ShaderIrBuilder.LoadStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Loads a storage value at this exact point in the block's memory-effect sequence.

**Parameter `resource`:** A readable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Returns:** The declared buffer element or float4 image value.

**Exception `T:System.ArgumentException`:** The resource is write-only or the coordinate is incompatible.
