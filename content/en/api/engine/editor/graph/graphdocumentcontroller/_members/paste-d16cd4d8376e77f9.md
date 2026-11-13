---
uid: api.d16cd4d8376e77f955b93890ecdb5504120aba8bb193e577aa0e0ba691d5ca00
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData,Inno.Core.Graphs.GraphPosition,System.Action{Inno.Core.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId}})"
source: xml
reviewed: 8eede47d1286e3bb09400d46c03a1dfc36f22a920edd2a479c73ea09de1bc580
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
