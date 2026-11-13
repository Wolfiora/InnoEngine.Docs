---
uid: api.24e94235ca5eec970b31e772b28298bb0134a232e233faaf7c616e4a16725d98
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryCapture(Inno.Core.Settings.ProjectSettingId,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Settings.ProjectSettingRecord@)"
source: xml
reviewed: f0d2d48f6873e805ac6ff273ff75b7b16ad3544a623232515edc7641c64bb8c5
title: "TryCapture"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Captures and validates the project-authored delta as one prospective Plugin contribution.

**Parameter `id`:** Stable setting identifier.

**Parameter `contributorId`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `contributors`:** All currently active dependency-ordered contributors.

**Parameter `record`:** Receives the normalized semantic Plugin contribution.

**Returns:** `true` when the project document contains an effective semantic delta.

**Exception `T:System.InvalidOperationException`:** Thrown when a replacement setting depends on an undeclared contributor, or when the authored delta is not permitted by the declared dependency and override ownership.
