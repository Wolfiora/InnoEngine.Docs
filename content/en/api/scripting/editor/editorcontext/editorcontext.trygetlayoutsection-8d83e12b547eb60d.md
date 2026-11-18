---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8d83e12b547eb60d1360694065de6dceca2be17366cf3107bf1af4eaec124976
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.TryGetLayoutSection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}@)
title: EditorContext.TryGetLayoutSection
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 6c5f4802917fc3ad0398f14d99a3d59d749a12046255da81b5b624d02b096522
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
