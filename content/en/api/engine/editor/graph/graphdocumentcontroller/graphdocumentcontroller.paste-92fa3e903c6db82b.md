---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.92fa3e903c6db82bbceb239e7f7b97f1cfcc23b81c9d7d16ba70d878804f8822
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData,Inno.Core.Graphs.GraphPosition,System.Action{Inno.Core.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeID,Inno.Core.Graphs.GraphNodeID}})
title: GraphDocumentController.Paste
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
sourceFingerprint: 4b88911c8b69fe7d8196c53330e857568dc45b86971fd2b48af62dde983c290f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `clipboard`:** Detached neutral fragment.

**Parameter `offset`:** Offset added to every copied node position.

**Parameter `remapNode`:** Optional synchronous domain remapping of neutral node values after identity allocation. The callback is never stored in History.

## Returns

New node identities in clipboard document order.
