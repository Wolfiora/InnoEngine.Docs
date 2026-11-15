---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9e6173fb537d0d800368adf6556cec91ff48394512c9137c3bc404d355ef2eb4
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.StoreStorage(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.StoreStorage
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 033c7a83404f11b8d19d76017b82e6d60b49f8db4ec3f213bbbb4554cbf301c4

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

## Exceptions

**Exception `T:System.ArgumentException`:** The resource is read-only or operands have incompatible types.
