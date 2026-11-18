---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f9c990100c43d6106c58ca1e8eae919c4e27443a291ddf78b61c75093c49cd8e
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.LoadStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.LoadStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: f179e193233f2acc20489d7c8102c24158f0ec24a8d4d8a50f1db98d67256ece
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resource`:** A readable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

## Returns

The declared buffer element or float4 image value.

## Exceptions

**Exception `T:System.ArgumentException`:** The resource is write-only or the coordinate is incompatible.
