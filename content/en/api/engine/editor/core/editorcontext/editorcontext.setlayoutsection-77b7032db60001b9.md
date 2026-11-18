---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.77b7032db60001b99b7d185a4ca1328a1ce85e2125f0afa2a588c99169339ff6
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SetLayoutSection(System.String,System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,System.String}})
title: EditorContext.SetLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: aa5cdb9b51d8fee6a47fc15008a86f944237feab10f16c333fe35e05b9a2887c
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
