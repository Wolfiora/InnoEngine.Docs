---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ebf61596af2559e98199715d689419faf27bc6444d7c999f441b028204ecb911
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasNode})
title: GraphCanvasLayout.SetNodes
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
reviewed: c5d142dab6918d131501657b4d26a062bafa22d15e155216c7e7cfe0a04639d5
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Atomically replaces a complete display snapshot, reusing unchanged node geometry by value.

## Parameters

**Parameter `nodes`:** The current neutral node descriptions in draw order.

## Returns

The number of inserted, changed or removed nodes. Ordering changes do not rebuild geometry.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The collection or one of its nodes is null.

**Exception `T:System.ArgumentException`:** A node identity occurs more than once; the previous snapshot remains active.
