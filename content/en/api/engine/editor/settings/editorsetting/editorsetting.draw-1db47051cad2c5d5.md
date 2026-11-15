---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1db47051cad2c5d59d999712fc03fc6980c4888a5a217ac820a93f9cec07b0cb
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSetting.Draw(Inno.Editor.Settings.EditorSettingObject)
title: EditorSetting.Draw
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: 1dad48916f59fd9c73fa182df753b440c9d6d15c038f5eb8ed7135d8c34b3417

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `setting`:** The isolated mutable object being edited.

## Returns

`true` when the staged object differs from the value it held when this frontend first drew that object.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.
