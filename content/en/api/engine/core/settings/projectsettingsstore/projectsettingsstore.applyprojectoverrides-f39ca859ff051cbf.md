---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f39ca859ff051cbf0b394c60a91995872c74e2bbf9563e73fc9da5057bb57f69
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId})
title: ProjectSettingsStore.ApplyProjectOverrides
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: ab629de33233ca957b86bc9439af3b190754ea1498de3fc35f2ce14d76d2f8c2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `values`:** Setting values keyed by stable protocol identity.

**Parameter `resets`:** Setting identities whose project overrides are removed.

## Returns

`true` when the native document changed.
