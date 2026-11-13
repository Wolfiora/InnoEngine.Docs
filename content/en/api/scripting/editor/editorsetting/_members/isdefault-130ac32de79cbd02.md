---
uid: api.130ac32de79cbd0245202f8c2c331716245c57d4c181be18309c38a46ecfa9f3
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSetting.IsDefault(InnoEditor.Settings.EditorSettingObject)"
source: xml
reviewed: ab19b23f7133841b6b30333b00bb16d9198f9cb12b49c9ac9c4c96b71d96750d
title: "IsDefault"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Determines whether a staged field object equals this definition's bound default value.

**Parameter `setting`:** The isolated staged object to compare.

**Returns:** `true` when every stored property equals the field default.

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.
