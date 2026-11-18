---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cf943345c29d9e93d752411d57d65cab057dedfb50398b3a91f4bfbe98a13100
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}})
title: EditorContext.SetLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: ab334b5213df4dc3c81f7dfa4e1eb86922a9e9fb43fd3b7b4fb6f5db50ea57a9
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The complete scalar or JSON-formatted values.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `values` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when a section name, key, or value cannot be represented in the layout.
