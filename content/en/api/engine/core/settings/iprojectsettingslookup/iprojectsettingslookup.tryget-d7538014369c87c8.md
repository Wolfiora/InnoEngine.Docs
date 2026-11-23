---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d7538014369c87c830f254c6062183002bf3744198d5b6843948ac836baf8bc6
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.IProjectSettingsLookup.TryGet``1(Inno.Core.Settings.ProjectSettingID,``0@)
title: IProjectSettingsLookup.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 858f8af7b997af59008b9b5defd4ed4e1fbd1364fd72da55b2f526b69e71b041
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

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

## Returns

`true` when a compatible setting exists; otherwise, `false`.
