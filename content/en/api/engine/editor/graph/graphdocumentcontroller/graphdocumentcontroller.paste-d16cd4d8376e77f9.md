---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d16cd4d8376e77f955b93890ecdb5504120aba8bb193e577aa0e0ba691d5ca00
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData,Inno.Core.Graphs.GraphPosition,System.Action{Inno.Core.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId}})
title: GraphDocumentController.Paste
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
sourceFingerprint: 3b66ff50ae964203db377bf57b09289552b8e0ab0620a520e3f3629a8dae2390
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
