---
uid: api.4af51b00c207f5ceb47f1014feb662f71f0c862d21727784aaffd9fefe024684
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryCloneComposedDefault(Inno.Core.Settings.ProjectSettingId,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Serialization.ISerializable@)"
source: xml
reviewed: 0a7bca3ef5c73351136c84490fb6b7c4c1e4d295609751a07f3d24a1f02a6563
title: "ProjectSettings.TryCloneComposedDefault"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Creates an isolated copy composed without the project-authored contribution.

## Parameters

**Parameter `id`:** Stable setting identifier.

**Parameter `contributors`:** Dependency-ordered Plugin default contributors.

**Parameter `setting`:** Receives the composed default value.

## Returns

`true` when the setting is defined.
