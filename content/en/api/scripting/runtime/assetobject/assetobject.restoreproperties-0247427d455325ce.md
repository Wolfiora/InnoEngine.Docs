---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0247427d455325cea70c1c1ef8860f6777df5d8574fdb68165f52baf53ddbb0f
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetObject.RestoreProperties``1(System.Guid,System.Byte[],``0)
title: AssetObject.RestoreProperties
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 5d8d5e29db38cd3e6dc4e69cfef9ebf7e053836669c26142b3c9db93db44f469
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** Current settings contract with a stable type identity.

## Parameters

**Parameter `stableTypeID`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.
