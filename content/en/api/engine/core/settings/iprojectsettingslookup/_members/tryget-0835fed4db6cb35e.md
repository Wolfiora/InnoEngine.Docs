---
uid: api.0835fed4db6cb35eeac4402403f37188186d53d344d2f57a3de39954a5b2ecbf
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.IProjectSettingsLookup.TryGet\u0060\u00601(Inno.Core.Settings.ProjectSettingId,\u0060\u00600@)"
source: xml
reviewed: f0017505de2ad0b632deb57f6de758a7ceaee7f6b2b83bc377718e3cfcebdae5
title: "TryGet"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Tries to get an isolated effective setting from the active extension generation.

**Type parameter `TSetting`:** The required setting contract.

**Parameter `id`:** The stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

**Returns:** `true` when a compatible setting exists; otherwise, `false`.
