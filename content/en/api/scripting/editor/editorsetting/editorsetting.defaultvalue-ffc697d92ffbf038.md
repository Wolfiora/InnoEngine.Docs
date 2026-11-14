---
uid: api.ffc697d92ffbf038c1ab83161c3ac5da84358be39f6c69fc9ac925f1a2032ebf
symbol: "scripting:Inno.Editor.Settings:P:InnoEditor.Settings.EditorSetting.defaultValue"
source: xml
reviewed: 7a03a48276160681494878ce91bb19f83276d2841eb354181a86c50e88373f61
title: "EditorSetting.defaultValue"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Creates the default object for a field. Page definitions keep the base implementation, whose internal value is `null`.

## Remarks

Field implementations must return a newly owned object on every access.
