---
uid: api.cf943345c29d9e93d752411d57d65cab057dedfb50398b3a91f4bfbe98a13100
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}})"
source: xml
reviewed: b49cf6c85be0c5459d1f0c3f0859e40506a5588ebf7848cae7c2b99d17e4813c
title: "EditorContext.SetLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Adds or replaces one human-readable editor layout section in memory.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The complete scalar or JSON-formatted values.

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when a section name, key, or value cannot be represented in the layout.
