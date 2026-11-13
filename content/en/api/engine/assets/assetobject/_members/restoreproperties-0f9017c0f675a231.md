---
uid: api.0f9017c0f675a23127ecb21c9c70260e226464f766d503f7008925d0d01dcf53
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetObject.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 281541b56b9a1f5fe57ca95c5781e7f15ad2d466e77e9fefa8bec8c4a2a57493
title: "RestoreProperties"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Restores detached extension settings using this asset's actual owner and converter generation.

**Type parameter `TValue`:** Current settings contract with a stable type identity.

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

**Exception `T:System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.
