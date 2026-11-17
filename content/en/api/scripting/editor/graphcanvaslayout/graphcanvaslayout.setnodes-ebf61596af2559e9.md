---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ebf61596af2559e98199715d689419faf27bc6444d7c999f441b028204ecb911
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasNode})
title: GraphCanvasLayout.SetNodes
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
reviewed: 8ce047f7a3898ed1d4026887c33608184f09c9a9a27b62bec6c6e56c7780475c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `nodes`:** The current neutral node descriptions in draw order.

## Returns

The number of inserted, changed or removed nodes. Ordering changes do not rebuild geometry.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The collection or one of its nodes is null.

**Exception `T:System.ArgumentException`:** A node identity occurs more than once; the previous snapshot remains active.
