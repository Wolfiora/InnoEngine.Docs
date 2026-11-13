---
uid: api.f4df3e0aa9fb1533674ce441313ab8abaa5ac2db0de6e5ee0dfb4b30a8974ba0
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetReferenceResolver.Resolve(System.Guid,System.Guid,System.String,System.Type,System.String)"
source: xml
reviewed: 267cc938afbcf20f5a7461172cec01b7f87b83899489753693807edd9c78b480
title: "Resolve"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Resolves one serialized asset reference to the canonical object owned by this resolver.

**Parameter `persistentId`:** The persistent asset identity encoded in the reference.

**Parameter `stableTypeId`:** The stable concrete asset type identity encoded in the reference.

**Parameter `lastKnownPath`:** The optional logical path retained for diagnostics and authoring recovery.

**Parameter `expectedType`:** The declared property type that the resolved object must satisfy.

**Parameter `propertyPath`:** The serialization property path used when reporting resolution failures.

**Returns:** The canonical compatible asset owned by this resolver's generation.

**Exception `T:System.InvalidOperationException`:** Thrown when the reference cannot be resolved to a compatible asset.
