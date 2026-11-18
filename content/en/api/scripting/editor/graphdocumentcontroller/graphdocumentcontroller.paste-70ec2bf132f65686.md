---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.70ec2bf132f6568634af7837878b70056a9230ad3ac0e11e26c823a28e11e3f5
symbol: scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphDocumentController.Paste(InnoEditor.Graph.GraphClipboardData,InnoEngine.Graphs.GraphPosition,System.Action{InnoEngine.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphNodeId}})
title: GraphDocumentController.Paste
kind: api
owners:
- Inno.Editor.Graph
apiSurface: editor-script
sourceFingerprint: ce2241779e45faf35d850e7087c47fcf2daee359c96d29bdeaa3307d5729da90
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
