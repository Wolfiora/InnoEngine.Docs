---
uid: api.f4df3e0aa9fb1533674ce441313ab8abaa5ac2db0de6e5ee0dfb4b30a8974ba0
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetReferenceResolver.Resolve(System.Guid,System.Guid,System.String,System.Type,System.String)"
source: xml
reviewed: 851899bdbd61936de155379726de5df757ee65377decf24008b06ad8e51924d7
title: "IAssetReferenceResolver.Resolve"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Resolves one serialized asset reference to the canonical object owned by this resolver.

## Parameters

**Parameter `persistentId`:** The persistent asset identity encoded in the reference.

**Parameter `stableTypeId`:** The stable concrete asset type identity encoded in the reference.

**Parameter `lastKnownPath`:** The optional logical path retained for diagnostics and authoring recovery.

**Parameter `expectedType`:** The declared property type that the resolved object must satisfy.

**Parameter `propertyPath`:** The serialization property path used when reporting resolution failures.

## Returns

The canonical compatible asset owned by this resolver's generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the reference cannot be resolved to a compatible asset.
