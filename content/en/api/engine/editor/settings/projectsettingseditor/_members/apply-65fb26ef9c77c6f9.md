---
uid: api.65fb26ef9c77c6f9ae20303413629de352ffab2600062ff089672ba5bed81acb
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.Apply(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Settings.ProjectSettingId,Inno.Core.Serialization.ISerializable},System.Collections.Generic.IReadOnlySet{Inno.Core.Settings.ProjectSettingId})"
source: xml
reviewed: 32f6f2338c6a01a95898f523043d5de178a13c397bf3292ad12d18882dee9bc8
title: "Apply"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Atomically applies project-authored overrides and records one stable history entry.

**Parameter `values`:** Staged exact-type values keyed by stable setting identity.

**Parameter `resets`:** Setting identities whose project overrides should be removed.

**Returns:** `true` when the project override document changed.

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null`.
