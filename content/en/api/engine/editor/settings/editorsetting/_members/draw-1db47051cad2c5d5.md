---
uid: api.1db47051cad2c5d59d999712fc03fc6980c4888a5a217ac820a93f9cec07b0cb
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSetting.Draw(Inno.Editor.Settings.EditorSettingObject)"
source: xml
reviewed: 83ba8ebb3e271859e202dab7954c40fc452d4b34272ccb8a3a2f77308b621be1
title: "Draw"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Draws this field inside the frontend-managed content container.

**Parameter `setting`:** The isolated mutable object being edited.

**Returns:** `true` when the staged object differs from the value it held when this frontend first drew that object.

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.
