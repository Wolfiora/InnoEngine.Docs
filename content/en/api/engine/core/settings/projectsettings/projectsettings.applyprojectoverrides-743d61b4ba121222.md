---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.743d61b4ba1212227ae8125c12d3fdd82fee03ece707d0e7e9f0635905ef3500
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingID,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingID},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})
title: ProjectSettings.ApplyProjectOverrides
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: ec0ae6c5b768517a6a6dc6b25f9289a6c1d3fa896f730dddc9d6c7df1287946e
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
