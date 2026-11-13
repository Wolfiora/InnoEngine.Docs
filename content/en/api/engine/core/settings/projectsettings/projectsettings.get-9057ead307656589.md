---
uid: api.9057ead3076565893875601adf57fe761c5df909102c011a689584bc8850cb2b
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.Get\u0060\u00601(Inno.Core.Settings.ProjectSettingId)"
source: xml
reviewed: fbbe8e7bde8356476771ca94ca76a06813df05ab65fcfad04d335f236596c5b5
title: "ProjectSettings.Get"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Gets an isolated snapshot of a current-generation setting.

**Type parameter `TSetting`:** Expected settings contract.

**Parameter `id`:** Stable setting identifier.

**Returns:** An independently owned snapshot of the effective current-generation value.

**Exception `T:System.Collections.Generic.KeyNotFoundException`:** Thrown when no definition exists.

**Exception `T:System.InvalidCastException`:** Thrown when the definition does not implement the requested contract.
