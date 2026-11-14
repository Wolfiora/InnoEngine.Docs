---
uid: api.0f9017c0f675a23127ecb21c9c70260e226464f766d503f7008925d0d01dcf53
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetObject.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 34efd046c5b9f34af2ab178954f38c1e9f48d297a9473d1fccb53c89a7826662
title: "AssetObject.RestoreProperties"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Restores detached extension settings using this asset's actual owner and converter generation.

## Type parameters

**Type parameter `TValue`:** Current settings contract with a stable type identity.

## Parameters

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.
