---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2a4ebcc5a228f932fc32558a43387b4e6149652207d08b379712cb301815c1af
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.LoadStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.LoadStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 5cbf5c52150fa03474f533f0bf3959aad391f5830b6ad8da89ef82974f7f0aa2
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
