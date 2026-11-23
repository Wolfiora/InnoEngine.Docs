---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.25bba11859fa0b5e8e78664cb527b0bd9a2b1a17e8168357030864d526aad6d0
symbol: engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.ApplyProjectOverrides(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingID,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingID})
title: ProjectSettingsStore.ApplyProjectOverrides
kind: api
owners:
- Inno.Core.Settings
apiSurface: source-clr
sourceFingerprint: 318b29beb2ac4be5151565c960d04b88612a08afcb026785e1cc9deab50b6603
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
