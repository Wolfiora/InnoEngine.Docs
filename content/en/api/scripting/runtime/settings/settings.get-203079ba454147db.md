---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.203079ba454147db3cf7ae8677f0f5b9794272aeaf0cb629e9e3da5464b79eab
symbol: scripting:Inno.Core.Settings:M:InnoEngine.Settings.Settings.Get``1(InnoEngine.Settings.ProjectSettingId)
title: Settings.Get
kind: api
owners:
- Inno.Core.Settings
apiSurface: editor-script
sourceFingerprint: 782f5af2874ddd1c5c8529a8aed100db00d1684c53b0867d7639c1fa90220651
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
