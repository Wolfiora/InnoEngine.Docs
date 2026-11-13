---
uid: api.7fcfae73a247ae79dd60f38cfc3cf59da9e80ce671a8cb7adbafe832008c5af1
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryGet\u0060\u00601(Inno.Core.Settings.ProjectSettingId,\u0060\u00600@)"
source: xml
reviewed: fc36bbb1cb46d3406408acbdffe18d0066059a48a8a0b75583d4c8203f584956
title: "TryGet"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Tries to get an isolated snapshot of a current-generation setting.

**Type parameter `TSetting`:** Expected settings contract.

**Parameter `id`:** Stable setting identifier.

**Parameter `setting`:** Receives an independently owned effective snapshot.

**Returns:** `true` when a compatible definition exists.
