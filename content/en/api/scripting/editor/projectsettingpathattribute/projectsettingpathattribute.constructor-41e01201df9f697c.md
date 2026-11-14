---
uid: api.41e01201df9f697cba1b12626f29b0384b2f91f5e035795742acd07152b9bba1
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 43e60d3a35a51cf032fa8ccf71f20a375bcb8126623b9360d8b21b71fbe72be4
title: "ProjectSettingPathAttribute.Constructor"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Creates a project setting placement.

## Parameters

**Parameter `path`:** The slash-delimited field path beginning with `Project/`.

**Parameter `order`:** The stable order among fields in the same section.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is outside the Project root or contains an empty segment.
