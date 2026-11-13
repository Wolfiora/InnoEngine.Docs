---
uid: api.7fbfa960fc7cc3c0bf069b89bf7249be9aa6f158a12a4ec770a83ac3fdc3a718
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.StoreStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)"
source: xml
reviewed: e2217b9c1377aa9d53962c29a88e2b7d2e91d3a398a867100f1e2667262c14b8
title: "StoreStorage"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Stores a storage value without pruning unused writes or reordering surrounding memory operations.

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

**Exception `T:System.ArgumentException`:** The resource is read-only or operands have incompatible types.
