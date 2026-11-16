---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f4df3e0aa9fb1533674ce441313ab8abaa5ac2db0de6e5ee0dfb4b30a8974ba0
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetReferenceResolver.Resolve(System.Guid,System.Guid,System.String,System.Type,System.String)
title: IAssetReferenceResolver.Resolve
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 63edcabf313fdef8e8b3032a9a79a286ba1f4bb059fe12a96faef01ae286a68d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
