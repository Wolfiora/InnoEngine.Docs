---
uid: api.e3fa301ce6c93d38d3962acf2f66156b7c146eea7d8131323d7bda1a771c5ae3
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.Get(System.String)"
source: xml
reviewed: 53b0d1f0140d6baa2afe170fc9a79f43d5f20c1f5f96ca5fe28a749326d75c77
title: "EditorSettings.Get"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Reads an isolated effective object from one complete Settings path.

**Parameter `path`:** The slash-delimited Settings field path.

**Returns:** The stored object, or an isolated copy of the field's default object.

**Exception `T:System.ArgumentException`:** Thrown when `path` is invalid, missing, or describes a page.
