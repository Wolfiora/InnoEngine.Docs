---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.203079ba454147db3cf7ae8677f0f5b9794272aeaf0cb629e9e3da5464b79eab
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.Settings.Get``1(InnoEngine.Settings.ProjectSettingId)
title: Settings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
reviewed: 20a34839212e6b11ea67a5ebf69771657f66586e9f69cfa74fea0b46795ab3a6
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
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
