---
uid: api.cf943345c29d9e93d752411d57d65cab057dedfb50398b3a91f4bfbe98a13100
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}})"
source: xml
reviewed: f28b463c9d3eb40cc89fd3d444034f24bb17de2aed138f12c44507d1799ace9e
title: "SetLayoutSection"
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
