---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8d83e12b547eb60d1360694065de6dceca2be17366cf3107bf1af4eaec124976
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)
title: EditorContext.TryGetLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: e507f2a802c336aea44134bbb69225c208a2b28baeaf05140e30afc2f7831368
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sectionName`:** The section name without its INI header syntax.

**Parameter `values`:** The copied values when the section exists.

## Returns

`true` when the requested section exists.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
