---
uid: api.9e6173fb537d0d800368adf6556cec91ff48394512c9137c3bc404d355ef2eb4
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.StoreStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: dbc55d37705a42f167c3a7a3734f0387d968129c51f2a1387fec64d34ae1b72f
title: "StoreStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Stores a storage value without pruning unused writes or reordering surrounding memory operations.

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

**Exception `T:System.ArgumentException`:** The resource is read-only or operands have incompatible types.
