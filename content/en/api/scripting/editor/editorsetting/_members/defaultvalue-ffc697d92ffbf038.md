---
uid: api.ffc697d92ffbf038c1ab83161c3ac5da84358be39f6c69fc9ac925f1a2032ebf
symbol: "scripting:Inno.Editor.Settings:P:InnoEditor.Settings.EditorSetting.defaultValue"
source: xml
reviewed: de8fa3cd1e0673688e835aa7e64ebeaf7a977615f19c410186ed25586c01f621
title: "defaultValue"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Creates the default object for a field. Page definitions keep the base implementation, whose internal value is `null`.

## Remarks

Field implementations must return a newly owned object on every access.
