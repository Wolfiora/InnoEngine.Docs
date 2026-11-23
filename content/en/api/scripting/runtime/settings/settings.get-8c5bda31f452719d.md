---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8c5bda31f452719dfe326cd4158e7ba0508d5f4c0b7a8712f6756f2fee4a9fe9
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.Settings.Get``1(InnoEngine.Settings.ProjectSettingID)
title: Settings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: 5f0cdcc9505d364d49f7850528c2de81d73df24dd3eea5b36e317197884e599a
apiScope: Runtime
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
