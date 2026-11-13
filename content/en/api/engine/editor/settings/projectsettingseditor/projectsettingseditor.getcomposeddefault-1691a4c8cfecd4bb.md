---
uid: api.1691a4c8cfecd4bbdf2d3500272bff75227a6862addde3fbad1da0d3bd2d00ad
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingsEditor.GetComposedDefault(Inno.Editor.Settings.ProjectSettingEditor)"
source: xml
reviewed: 6404afab71fc1585d00c480a674b414e40b234c7a0495e278429034b1c4ad430
title: "ProjectSettingsEditor.GetComposedDefault"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Creates the composed host and Plugin default without the project override.

**Parameter `definition`:** The active presentation whose default is requested.

**Returns:** An isolated composed default value.

**Exception `T:System.ArgumentNullException`:** Thrown when `definition` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the runtime setting definition is unavailable.
