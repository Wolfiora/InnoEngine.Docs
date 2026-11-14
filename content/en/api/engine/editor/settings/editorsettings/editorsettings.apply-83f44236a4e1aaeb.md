---
uid: api.83f44236a4e1aaeb34e1a317a0f33575c1ef2aab8cd4ff3a3a09b1a93b2b226f
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.Apply(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Editor.Settings.EditorSettingObject},System.Collections.Generic.IReadOnlySet{System.String})"
source: xml
reviewed: f45fb1a31cb20752d418eec19cbc33815c0800c8cae6f949eb2f49ed37bd59df
title: "EditorSettings.Apply"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Atomically applies staged field objects as one shared Undo and Redo history entry.

**Parameter `values`:** The complete or partial path-addressed objects to apply from the active catalog.

**Parameter `resets`:** Optional paths whose persisted overrides are removed during the same Apply.

**Returns:** `true` when the persisted document changed and one history entry was recorded.

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null` or contains a null object.

**Exception `T:System.ArgumentException`:** Thrown when a supplied path is invalid, absent, or describes a page.

**Exception `T:System.IO.IOException`:** Thrown when the project-root document or its history payload cannot be written.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the project-root document is inaccessible.
