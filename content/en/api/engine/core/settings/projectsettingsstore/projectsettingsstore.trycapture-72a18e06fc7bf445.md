---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.72a18e06fc7bf44518a6e7f7d1a9a3134557b76f8aeba69d526e50e5e9b1a084
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.TryCapture(Inno.Core.Settings.ProjectSettingID,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Collections.Generic.IReadOnlySet{System.String},Inno.Core.Settings.ProjectSettingRecord@)
title: ProjectSettingsStore.TryCapture
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 83caffe968e4b427f0833c74fdcc2d0b5f219da3e34da00d128a10087aec441d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable setting protocol identity.

**Parameter `contributorID`:** Stable identity of the Plugin being exported.

**Parameter `declaredDependencies`:** Direct dependency Plugin IDs declared by the exported Plugin.

**Parameter `declaredOverrides`:** Dependency Plugin IDs whose owned values may be replaced.

**Parameter `record`:** Receives the normalized semantic contribution payload.

## Returns

`true` when the project document contains an effective semantic delta.
