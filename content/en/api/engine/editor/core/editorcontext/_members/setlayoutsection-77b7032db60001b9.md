---
uid: api.77b7032db60001b99b7d185a4ca1328a1ce85e2125f0afa2a588c99169339ff6
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}})"
source: xml
reviewed: c52ff17bb68e89e5ffbccdd95d9722e4c0a7c353ac45bd677b7e64d8328c3ced
title: "SetLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Adds or replaces one human-readable editor layout section in memory.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The complete scalar or JSON-formatted values.

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when a section name, key, or value cannot be represented in the layout.
