---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52062bf4cbd400c1c55d1c2e1d4e07c5d240628ee056be3fc607db4116b903ab
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@)
title: ProjectSettingsStore.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 17d7dc37e5d654781d5ca0c93e820969cc508d9b3d1c2776b2ba05ad88c5c682
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
