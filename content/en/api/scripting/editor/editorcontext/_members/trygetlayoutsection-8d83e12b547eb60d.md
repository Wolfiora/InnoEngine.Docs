---
uid: api.8d83e12b547eb60d1360694065de6dceca2be17366cf3107bf1af4eaec124976
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)"
source: xml
reviewed: cad8d8686c7dcec86477a5a1735053c117a5c0a8b2298f12801410c1dfc781bd
title: "TryGetLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Tries to read one independent editor layout section snapshot.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The copied values when the section exists.

**Returns:** `true` when the requested section exists.

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
