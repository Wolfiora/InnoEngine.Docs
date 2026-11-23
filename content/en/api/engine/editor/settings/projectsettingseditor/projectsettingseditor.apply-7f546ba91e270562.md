---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7f546ba91e27056276cffcde65d60eec472128c07eecc69f31122b622becb608
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.Apply(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingID,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingID})
title: ProjectSettingsEditor.Apply
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
sourceFingerprint: 5ef00ee397dcb2b6fcd18af435c2df0e5059df1afb6096558149c6c77eb5d47d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `values`:** Staged exact-type values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project overrides should be removed.

## Returns

`true` when the project override document changed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null`.
