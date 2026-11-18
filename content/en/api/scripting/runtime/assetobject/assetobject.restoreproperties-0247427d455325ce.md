---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0247427d455325cea70c1c1ef8860f6777df5d8574fdb68165f52baf53ddbb0f
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetObject.RestoreProperties``1(System.Guid,System.Byte[],``0)
title: AssetObject.RestoreProperties
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: eca05598e8726bbee19a7646e1dc3c3b58af9ef6494b6932df725abe26ca4e00
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

**Parameter `stableTypeId`:** Persisted settings type identity.

**Parameter `propertyData`:** Native property payload to restore.

**Parameter `target`:** Detached target, never retained by the asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset is unowned, retired, or lacks property-state services.
