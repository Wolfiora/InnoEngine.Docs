---
uid: api.0835fed4db6cb35eeac4402403f37188186d53d344d2f57a3de39954a5b2ecbf
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.IProjectSettingsLookup.TryGet\u0060\u00601(Inno.Core.Settings.ProjectSettingId,\u0060\u00600@)"
source: xml
reviewed: 0af07641084c1de36c1388e4efc1f4c5176aed905d5ba9e5fc8a65565c164d0e
title: "IProjectSettingsLookup.TryGet"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Tries to get an isolated effective setting from the active extension generation.

## Type parameters

**Type parameter `TSetting`:** The required setting contract.

## Parameters

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

## Returns

`true` when a compatible setting exists; otherwise, `false`.
