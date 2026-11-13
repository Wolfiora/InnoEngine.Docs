---
uid: api.c6247e8625ae665ec6783062dd5566475a5a8869dbc4596e9e14a227b0335c8f
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingEditor.ValuesEqual(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.ISerializable)"
source: xml
reviewed: 3bf736ffc76761c86a285a924990b3b3a7df2e5b410b31e47c5e12c15f57ddad
title: "ProjectSettingEditor.ValuesEqual"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Compares two exact-type values through their native serialized property data.

**Parameter `left`:** The first setting value.

**Parameter `right`:** The second setting value.

**Returns:** `true` when both values contain equal serialized properties.

**Exception `T:System.ArgumentException`:** Thrown when either value has another runtime type.
