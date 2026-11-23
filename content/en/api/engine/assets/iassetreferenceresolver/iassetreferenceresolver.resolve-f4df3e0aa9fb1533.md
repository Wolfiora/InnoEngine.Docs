---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f4df3e0aa9fb1533674ce441313ab8abaa5ac2db0de6e5ee0dfb4b30a8974ba0
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetReferenceResolver.Resolve(System.Guid,System.Guid,System.String,System.Type,System.String)
title: IAssetReferenceResolver.Resolve
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 13a5c197b5dd04006d27fb5230910fc0cd265a0e5174bebfcc714d56e2d8371b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The persistent asset identity encoded in the reference.

**Parameter `stableTypeID`:** The stable concrete asset type identity encoded in the reference.

**Parameter `lastKnownPath`:** The optional logical path retained for diagnostics and authoring recovery.

**Parameter `expectedType`:** The declared property type that the resolved object must satisfy.

**Parameter `propertyPath`:** The serialization property path used when reporting resolution failures.

## Returns

The canonical compatible asset owned by this resolver's generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the reference cannot be resolved to a compatible asset.
