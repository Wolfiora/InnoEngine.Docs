---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.65fb26ef9c77c6f9ae20303413629de352ffab2600062ff089672ba5bed81acb
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.Apply(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId})
title: ProjectSettingsEditor.Apply
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
sourceFingerprint: 6e36561517cb871bd54db4e083e8e28fce2313bb822c2f0bb130986481ee9847
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
