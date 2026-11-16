---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d16cd4d8376e77f955b93890ecdb5504120aba8bb193e577aa0e0ba691d5ca00
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData,Inno.Core.Graphs.GraphPosition,System.Action{Inno.Core.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId}})
title: GraphDocumentController.Paste
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
reviewed: 726878f609a114f49c9832577a08295a1f441175e65bcf8e1bdc93f28bcbe0c4
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
