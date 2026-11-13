---
uid: api.0247427d455325cea70c1c1ef8860f6777df5d8574fdb68165f52baf53ddbb0f
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetObject.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 5b4607b52c33ad54cbb8d8d81e71f9b8bde700aa4d46f50121abd86e8922e589
title: "RestoreProperties"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Restores detached extension settings using this asset's actual owner and converter generation.

**Type parameter `TValue`:** Current settings contract with a stable type identity.

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

**Exception `T:System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.
