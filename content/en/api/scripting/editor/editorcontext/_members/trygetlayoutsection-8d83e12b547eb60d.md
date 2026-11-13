---
uid: api.8d83e12b547eb60d1360694065de6dceca2be17366cf3107bf1af4eaec124976
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)"
source: xml
reviewed: f0bc98cf3a6588987251d4c88cb164f893f48ad56978ecbedf3f0dd8769561c7
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
