---
uid: api.66faf22ac6b1064385618fc89ace8d8bfb10a1d9ba24f04ca2d28f077beb7c83
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingEditor.ValuesEqual(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.ISerializable)"
source: xml
reviewed: 8079d0dee015e1eb78f8fd28bebd8995b9445d3bc8e3e5d8198c6a50bcc0666e
title: "ValuesEqual"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Compares two exact-type values through their native serialized property data.

**Parameter `left`:** The first setting value.

**Parameter `right`:** The second setting value.

**Returns:** `true` when both values contain equal serialized properties.

**Exception `T:System.ArgumentException`:** Thrown when either value has another runtime type.
