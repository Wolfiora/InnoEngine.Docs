---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f80ab919476c6347e73973f4d834d6d74323a78cdefe8e130aadcdd1cde74a6d
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSetting.IsDefault(Inno.Editor.Settings.EditorSettingObject)
title: EditorSetting.IsDefault
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: fe328b4062ef201358a7a98d0e91c4bb981f576cac1bea566aef9935136e000a

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `setting`:** The isolated staged object to compare.

## Returns

`true` when every stored property equals the field default.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `setting` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when this definition describes a page rather than a field.
