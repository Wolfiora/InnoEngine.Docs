---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.97f41d71b03bcbb2aad584d0f97182a34c323e0500888257c5a2f94ebd715105
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryCapture(Inno.Core.Settings.ProjectSettingId,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},Inno.Core.Settings.ProjectSettingRecord@)
title: ProjectSettingsStore.TryCapture
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: c579488d55c49a43638a6bfe4d191ae62f2138a8b8b6f7f3bf241e1acc3bb25a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable setting protocol identity.

**Parameter `contributorId`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `record`:** Receives the normalized semantic contribution payload.

## Returns

`true` when the project document contains an effective semantic delta.
