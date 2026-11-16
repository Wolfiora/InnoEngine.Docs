---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0247427d455325cea70c1c1ef8860f6777df5d8574fdb68165f52baf53ddbb0f
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetObject.RestoreProperties``1(System.Guid,System.Byte[],``0)
title: AssetObject.RestoreProperties
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 498aa4c90f4380e4733637a600231d2d03ce216b209b03ba3a7b06c836cf5044
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
