---
uid: api.e3fa301ce6c93d38d3962acf2f66156b7c146eea7d8131323d7bda1a771c5ae3
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.Get(System.String)"
source: xml
reviewed: 8c89bd05709a82a94b5e83d20598f96d96863f8ad9c460583d51bf4eea3e917c
title: "Get"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Reads an isolated effective object from one complete Settings path.

**Parameter `path`:** The slash-delimited Settings field path.

**Returns:** The stored object, or an isolated copy of the field's default object.

**Exception `T:System.ArgumentException`:** Thrown when `path` is invalid, missing, or describes a page.
