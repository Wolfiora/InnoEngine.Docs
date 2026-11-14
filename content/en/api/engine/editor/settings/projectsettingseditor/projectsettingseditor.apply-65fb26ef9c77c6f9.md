---
uid: api.65fb26ef9c77c6f9ae20303413629de352ffab2600062ff089672ba5bed81acb
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.Apply(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId})"
source: xml
reviewed: 07019d462dc49fe50650bb734c0b1e49c1f3e01c66967bce91fd716e603c605c
title: "ProjectSettingsEditor.Apply"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Atomically applies project-authored overrides and records one stable history entry.

## Parameters

**Parameter `values`:** Staged exact-type values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project overrides should be removed.

## Returns

`true` when the project override document changed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null`.
