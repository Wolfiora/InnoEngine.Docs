---
uid: api.d16cd4d8376e77f955b93890ecdb5504120aba8bb193e577aa0e0ba691d5ca00
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData,Inno.Core.Graphs.GraphPosition,System.Action{Inno.Core.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId}})"
source: xml
reviewed: a6df4bb4edc10f935a5b65deae1457b8fbbbd73945375fea68c528f5057b3257
title: "Paste"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Pastes a clipboard fragment with new stable identities and a graph-space offset.

**Parameter `clipboard`:** Detached neutral fragment.

**Parameter `offset`:** Offset added to every copied node position.

**Returns:** New node identities in clipboard document order.

**Parameter `remapNode`:** Optional synchronous domain remapping of neutral node values after identity allocation. The callback is never stored in History.
