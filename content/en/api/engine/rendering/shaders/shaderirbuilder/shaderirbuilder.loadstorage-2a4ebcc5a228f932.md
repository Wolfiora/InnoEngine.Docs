---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2a4ebcc5a228f932fc32558a43387b4e6149652207d08b379712cb301815c1af
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.LoadStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.LoadStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 1b9dfd5dfe755fe129e1b487d9a1be3dd27c7be9ca00de77f1b1a8abc1082bce
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
