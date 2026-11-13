---
uid: api.66a0bb86b36c3a2bae6a6951a5bec085391146ecc78702314c37668a4704fde8
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)"
source: xml
reviewed: 7c200aabc4201778f13bb65ff6c1b8d54c099f4e8eabff8c34169486c6369e9a
title: "TryGetLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Tries to read one independent editor layout section snapshot.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The copied values when the section exists.

**Returns:** `true` when the requested section exists.

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
