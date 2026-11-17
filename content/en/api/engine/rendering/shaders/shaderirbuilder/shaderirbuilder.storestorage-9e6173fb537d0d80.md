---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9e6173fb537d0d800368adf6556cec91ff48394512c9137c3bc404d355ef2eb4
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.StoreStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.StoreStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 20df889ba320de1dcb44b6aa5d6e6519df449fac5017c17194ff79ff9d54dc82
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

## Exceptions

**Exception `T:System.ArgumentException`:** The resource is read-only or operands have incompatible types.
