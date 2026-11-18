---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0f9017c0f675a23127ecb21c9c70260e226464f766d503f7008925d0d01dcf53
symbol: engine:Inno.Assets:M:Inno.Assets.AssetObject.RestoreProperties``1(System.Guid,System.Byte[],``0)
title: AssetObject.RestoreProperties
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: bcea6dd8cacedc06742ab589ef35aa6fce533a77542589e06024ae0a549cf596
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** Current settings contract with a stable type identity.

## Parameters

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.
