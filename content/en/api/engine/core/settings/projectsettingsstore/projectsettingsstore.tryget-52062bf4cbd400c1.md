---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52062bf4cbd400c1c55d1c2e1d4e07c5d240628ee056be3fc607db4116b903ab
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@)
title: ProjectSettingsStore.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 1108fcd33e78bf62453b57ea36ddb9f4486c8d42754c0c6ce2a20e752654a9e1
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
