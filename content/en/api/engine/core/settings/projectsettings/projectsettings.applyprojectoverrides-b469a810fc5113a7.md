---
uid: api.b469a810fc5113a78e7cfde6a6ec7eaa70d9a52513af17fe018729b7bdc9a80a
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettings.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId},System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingsContributor})"
source: xml
reviewed: 57882b226fdb957b88b05f8f73d419aa2b9d680b97176b025cf8961b1999fb6a
title: "ProjectSettings.ApplyProjectOverrides"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Applies multiple project contributions and removals as one atomic document update.

**Parameter `values`:** Complete authored values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project-authored contributions are removed.

**Parameter `contributors`:** Dependency-ordered defaults used to rebuild effective values.

**Returns:** `true` when the project document changed.
