---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0835fed4db6cb35eeac4402403f37188186d53d344d2f57a3de39954a5b2ecbf
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.IProjectSettingsLookup.TryGet``1(Inno.Core.Settings.ProjectSettingId,``0@)
title: IProjectSettingsLookup.TryGet
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 1866bc0b3cd691207dc6f5e3f6fa7076df346202e26cc94bcbede03e90abe3e0
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
