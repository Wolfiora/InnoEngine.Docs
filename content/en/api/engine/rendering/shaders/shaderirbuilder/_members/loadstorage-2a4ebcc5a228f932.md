---
uid: api.2a4ebcc5a228f932fc32558a43387b4e6149652207d08b379712cb301815c1af
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.LoadStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: 6ab32519a27108fc30c49b16513cd599dc6d3627faf6b61564cc9ec19a26c160
title: "LoadStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Loads a storage value at this exact point in the block's memory-effect sequence.

**Parameter `resource`:** A readable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Returns:** The declared buffer element or float4 image value.

**Exception `T:System.ArgumentException`:** The resource is write-only or the coordinate is incompatible.
