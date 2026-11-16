---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b469a810fc5113a78e7cfde6a6ec7eaa70d9a52513af17fe018729b7bdc9a80a
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})
title: ProjectSettings.ApplyProjectOverrides
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 586bf47c677ff57852d2f960d16a2c70a69ad57faec1b4d516f07fef27749bfb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `values`:** Complete authored values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project-authored contributions are removed.

**Parameter `contributors`:** Dependency-ordered defaults used to rebuild effective values.

## Returns

`true` when the project document changed.
