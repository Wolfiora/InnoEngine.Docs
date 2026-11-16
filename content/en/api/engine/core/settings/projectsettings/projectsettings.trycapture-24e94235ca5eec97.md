---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.24e94235ca5eec970b31e772b28298bb0134a232e233faaf7c616e4a16725d98
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryCapture(Inno.Core.Settings.ProjectSettingId,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Settings.ProjectSettingRecord@)
title: ProjectSettings.TryCapture
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: d1dcd7610f9f95b9382a72c2189ec5fe610c7b20b2387ba45e34a77cc5cf7266
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable setting identifier.

**Parameter `contributorId`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `contributors`:** All currently active dependency-ordered contributors.

**Parameter `record`:** Receives the normalized semantic Plugin contribution.

## Returns

`true` when the project document contains an effective semantic delta.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when a replacement setting depends on an undeclared contributor, or when the authored delta is not permitted by the declared dependency and override ownership.
