---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2b0dea43e450e3e9271c68210ee9e433bff10eceaa3071c9928b49b4a996df1d
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerRegistry.Resolve(System.Type)
title: PropertyDrawerRegistry.Resolve
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 128d9ab04a0f08a1559b1bcdd3deecd1bafafd232df882669266b38d9f677d51

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `propertyType`:** The declared serialized property type to resolve.

## Returns

The most specific registered drawer, or the unsupported-value fallback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `propertyType` is `null`.
