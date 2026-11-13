---
uid: api.52062bf4cbd400c1c55d1c2e1d4e07c5d240628ee056be3fc607db4116b903ab
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryGet\u0060\u00601(Inno.Core.Settings.ProjectSettingId,\u0060\u00600@)"
source: xml
reviewed: 82fa3a94c4839226e8e082fea9b22d374098e567465a8bd3931f6f2167342d71
title: "TryGet"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Tries to get an isolated effective setting snapshot from the active extension generation.

**Type parameter `TSetting`:** Expected setting contract.

**Parameter `id`:** Stable setting protocol identity.

**Parameter `setting`:** Receives an independently owned effective snapshot when available.

**Returns:** `true` when a compatible setting exists.
