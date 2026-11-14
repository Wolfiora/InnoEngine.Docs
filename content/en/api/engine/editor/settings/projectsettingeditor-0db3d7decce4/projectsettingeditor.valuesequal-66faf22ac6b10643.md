---
uid: api.66faf22ac6b1064385618fc89ace8d8bfb10a1d9ba24f04ca2d28f077beb7c83
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingEditor.ValuesEqual(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.ISerializable)"
source: xml
reviewed: 925ccbbaed5d974a5ed91425a56fb98d227a21cf839ae99aa65f3be937b548b3
title: "ProjectSettingEditor.ValuesEqual"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Compares two exact-type values through their native serialized property data.

## Parameters

**Parameter `left`:** The first setting value.

**Parameter `right`:** The second setting value.

## Returns

`true` when both values contain equal serialized properties.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when either value has another runtime type.
