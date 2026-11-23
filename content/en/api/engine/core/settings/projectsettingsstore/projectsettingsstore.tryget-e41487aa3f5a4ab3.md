---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e41487aa3f5a4ab3b0bfb62726aae23413ce0f07120a82590a3919ffb2b658e8
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryGet``1(Inno.Core.Settings.ProjectSettingID,``0@)
title: ProjectSettingsStore.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 474b1d00512136244c8dedb301a605a83d30aae01da2a48114c3bbb5d25c6f9c
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
