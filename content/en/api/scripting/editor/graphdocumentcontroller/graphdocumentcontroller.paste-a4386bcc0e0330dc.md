---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a4386bcc0e0330dc3c08420539591ab92e8541e163c364cca81ab66869e98559
symbol: scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphDocumentController.Paste(InnoEditor.Graph.GraphClipboardData,InnoEngine.Graphs.GraphPosition,System.Action{InnoEngine.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{InnoEngine.Graphs.GraphNodeID,InnoEngine.Graphs.GraphNodeID}})
title: GraphDocumentController.Paste
kind: api
owners:
- Inno.Editor.Graph
apiSurface: editor-script
sourceFingerprint: 2bb0d25f2401aa95417b754ba6f05cb40dc37ff7a113d5ad4d2607363d1a38ce
apiScope: Editor
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
