---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6bf191d27451e52c7eb0a302838a881c2d8100d74b60677f4cca58aa5fe1cd0a
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.Settings.Get``1(Inno.Core.Settings.ProjectSettingId)
title: Settings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 440791658ed336fe40451c51afb0e38ec0596182c6cb8282ee4a99afb5f3da4c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TSetting`:** The required setting contract.

## Parameters

**Parameter `id`:** The stable setting protocol identity.

## Returns

An independently owned effective setting snapshot.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no project settings lookup is active or its owner is no longer initialized.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown by the standard project settings store when the setting is unavailable.

**Exception `T:System.InvalidCastException`:** Thrown by the standard project settings store when the setting does not implement the requested contract.
