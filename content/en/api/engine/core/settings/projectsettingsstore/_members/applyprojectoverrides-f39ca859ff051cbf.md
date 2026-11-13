---
uid: api.f39ca859ff051cbf0b394c60a91995872c74e2bbf9563e73fc9da5057bb57f69
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId})"
source: xml
reviewed: d734b728149b88e75b80f37f6e8b4459834c6e36ea4e0e02ca7732b0bf218d35
title: "ApplyProjectOverrides"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Applies a native batch of project-authored overrides and removals.

**Parameter `values`:** Setting values keyed by stable protocol identity.

**Parameter `resets`:** Setting identities whose project overrides are removed.

**Returns:** `true` when the native document changed.
