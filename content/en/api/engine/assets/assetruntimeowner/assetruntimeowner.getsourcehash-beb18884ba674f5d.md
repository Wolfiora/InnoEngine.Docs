---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.beb18884ba674f5d45f7abda8767ae53823bc180c1ac144a9f97bdf8f4ced05e
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.GetSourceHash(Inno.Assets.AssetObject)
title: AssetRuntimeOwner.GetSourceHash
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: c39ab60d43982c22d40d721a9681afd920fb4b4dff0ff9c135385a78d2175768

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `asset`:** The owned asset.

## Returns

The fingerprint currently committed to the asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
