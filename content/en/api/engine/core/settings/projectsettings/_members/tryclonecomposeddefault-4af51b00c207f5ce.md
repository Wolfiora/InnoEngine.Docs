---
uid: api.4af51b00c207f5ceb47f1014feb662f71f0c862d21727784aaffd9fefe024684
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Serialization.ISerializable@)"
source: xml
reviewed: bd4266354fe7cd34f3d56f745edd49c4a7b1d7a1d1d2af3f3964742d40ebc4ae
title: "TryCloneComposedDefault"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates an isolated copy composed without the project-authored contribution.

**Parameter `id`:** Stable setting identifier.

**Parameter `contributors`:** Dependency-ordered Plugin default contributors.

**Parameter `setting`:** Receives the composed default value.

**Returns:** `true` when the setting is defined.
