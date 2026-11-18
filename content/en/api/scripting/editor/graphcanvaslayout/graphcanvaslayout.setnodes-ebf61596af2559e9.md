---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ebf61596af2559e98199715d689419faf27bc6444d7c999f441b028204ecb911
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasNode})
title: GraphCanvasLayout.SetNodes
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: 0648536e2c5e881db4f516c0f157cbeec696db24d0d52403e94d047ddcf39312
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
