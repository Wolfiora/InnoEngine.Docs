---
uid: api.66a0bb86b36c3a2bae6a6951a5bec085391146ecc78702314c37668a4704fde8
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)"
source: xml
reviewed: 94658647a5f7294bf69e4d77b1b51e546845d89d22e85b6808320afedbfe81d7
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
