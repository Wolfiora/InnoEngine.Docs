---
uid: api.b369f5ccde5a753faf75174e95bcf53fc640db5362de18c962d409a53c865314
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.Get(Inno.Editor.Settings.ProjectSettingEditor)"
source: xml
reviewed: 31c9fb4627232b894848da747713cf3b206b122136527c2f5fe58e46f227f7f7
title: "ProjectSettingsEditor.Get"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Creates an isolated editable snapshot for one registered presentation.

## Parameters

**Parameter `definition`:** The active presentation whose runtime protocol is requested.

## Returns

An isolated current-generation value.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `definition` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the runtime setting definition is unavailable.
