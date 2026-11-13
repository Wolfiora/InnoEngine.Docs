---
uid: api.b369f5ccde5a753faf75174e95bcf53fc640db5362de18c962d409a53c865314
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.Get(Inno.Editor.Settings.ProjectSettingEditor)"
source: xml
reviewed: d5b1577f0c5cb6ffb3b4c4d967ed957ffab5ea7ccb698ca358a7adaa40dc29ad
title: "Get"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Creates an isolated editable snapshot for one registered presentation.

**Parameter `definition`:** The active presentation whose runtime protocol is requested.

**Returns:** An isolated current-generation value.

**Exception `T:System.ArgumentNullException`:** Thrown when `definition` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the runtime setting definition is unavailable.
