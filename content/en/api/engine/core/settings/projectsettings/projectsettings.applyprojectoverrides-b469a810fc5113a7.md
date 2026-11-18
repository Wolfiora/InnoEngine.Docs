---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b469a810fc5113a78e7cfde6a6ec7eaa70d9a52513af17fe018729b7bdc9a80a
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})
title: ProjectSettings.ApplyProjectOverrides
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 663d496b882e1c3927b00b172537b18f44553cc9755004692fdcb85bf8a6ec62
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
