---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6fcb86858d03cac3966316564b062f4fdf3222c0f1b0abb75feb0e54c649de57
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDragData.#ctor(InnoEngine.Core.IdentityObject,System.String)
title: EditorDragData.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: d7a917ff59b84fb1422d4d3437bc72588c8242ea8cd8e6b3331218f555848830
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The registered source object resolved again for each drop query and delivery.

**Parameter `label`:** The human-readable label used by drag previews.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `source` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when `source` is not registered in a live identity domain.
