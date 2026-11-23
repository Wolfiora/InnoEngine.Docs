---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a9379ef4ded6bb6b3087c5da89dc3970f3c8689f52bbf2874864a42cbcb0f9f7
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.TryCapture(Inno.Core.Settings.ProjectSettingID,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor},Inno.Core.Settings.ProjectSettingRecord@)
title: ProjectSettings.TryCapture
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 552ae16446d6ff3f75f902925230aa870aa5d2e81b7d571e79ac5c6a7cb9d047
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable setting identifier.

**Parameter `contributorID`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `contributors`:** All currently active dependency-ordered contributors.

**Parameter `record`:** Receives the normalized semantic Plugin contribution.

## Returns

`true` when the project document contains an effective semantic delta.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when a replacement setting depends on an undeclared contributor, or when the authored delta is not permitted by the declared dependency and override ownership.
