---
uid: api.f80ab919476c6347e73973f4d834d6d74323a78cdefe8e130aadcdd1cde74a6d
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSetting.IsDefault(Inno.Editor.Settings.EditorSettingObject)"
source: xml
reviewed: dc618f2762ae1766ab22a8dc6933666109d84eac3945447c2e1909a7f6a3fac1
title: "IsDefault"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Determines whether a staged field object equals this definition's bound default value.

**Parameter `setting`:** The isolated staged object to compare.

**Returns:** `true` when every stored property equals the field default.

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.
