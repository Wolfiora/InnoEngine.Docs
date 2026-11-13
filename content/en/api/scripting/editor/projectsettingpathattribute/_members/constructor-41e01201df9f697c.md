---
uid: api.41e01201df9f697cba1b12626f29b0384b2f91f5e035795742acd07152b9bba1
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 48250f5c762e3f8db03887906a5e3b2808cca23535e9008bc95caf0e30cc4c9a
title: "Constructor"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Creates a project setting placement.

**Parameter `path`:** The slash-delimited field path beginning with `Project/`.

**Parameter `order`:** The stable order among fields in the same section.

**Exception `T:System.ArgumentException`:** Thrown when `path` is outside the Project root or contains an empty segment.
