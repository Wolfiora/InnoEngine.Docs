---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f39ca859ff051cbf0b394c60a91995872c74e2bbf9563e73fc9da5057bb57f69
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId})
title: ProjectSettingsStore.ApplyProjectOverrides
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
reviewed: 16081eddab9acf08bafee3f25623e54406dea27d2d4ca6391adf107986a61bba

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Applies a native batch of project-authored overrides and removals.

## Parameters

**Parameter `values`:** Setting values keyed by stable protocol identity.

**Parameter `resets`:** Setting identities whose project overrides are removed.

## Returns

`true` when the native document changed.
