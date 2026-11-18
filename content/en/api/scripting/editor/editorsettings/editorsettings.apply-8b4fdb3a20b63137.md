---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8b4fdb3a20b6313751052d0d12f8451be701998abed9843eebb61b9a00a5228b
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettings.Apply(System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Settings.EditorSettingObject},System.Collections.Generic.IReadOnlySet{System.String})
title: EditorSettings.Apply
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
sourceFingerprint: cfc3b60596e4061ee2048cebb652fa2ca8dcd4b4af52ce7a05aef6c12d0eda38
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `values`:** The complete or partial path-addressed objects to apply from the active catalog.

**Parameter `resets`:** Optional paths whose persisted overrides are removed during the same Apply.

## Returns

`true` when the persisted document changed and one history entry was recorded.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null` or contains a null object.

**Exception `T:System.ArgumentException`:** Thrown when a supplied path is invalid, absent, or describes a page.

**Exception `T:System.IO.IOException`:** Thrown when the project-root document or its history payload cannot be written.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the project-root document is inaccessible.
