---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c86c657718fe8a974bc43b076b53f8ecf86e5badc9c9ecb8d883c46be42a9477
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSetting.Draw(InnoEditor.Settings.EditorSettingObject)
title: EditorSetting.Draw
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: d5a8192b3ab9b3c6bf6a366f07dcc4d66b39bef251813b6a950c9128c9bd66ca
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `setting`:** The isolated mutable object being edited.

## Returns

`true` when the staged object differs from the value it held when this frontend first drew that object.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.
