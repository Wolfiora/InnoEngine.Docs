---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.52062bf4cbd400c1c55d1c2e1d4e07c5d240628ee056be3fc607db4116b903ab
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@)
title: ProjectSettingsStore.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 4f7e58e03dccb741b9d3a43340588c09e0d7317dd7b15eb11c6e9ffe4c56a4a8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TSetting`:** Expected setting contract.

## Parameters

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

## Returns

`true` when a compatible setting exists.
