---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d20ab6842bcf31cc124b2973a1cbfe771f2caddcf42137c0b78b5ad48d8cd3cf
symbol: scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphDocumentController.SetNodeValue(InnoEngine.Graphs.GraphNodeId,System.String,InnoEngine.Graphs.GraphSerializedValue,System.String)
title: GraphDocumentController.SetNodeValue
kind: api
owners:
- Inno.Editor.Graph
apiSurface: editor-script
reviewed: 397ebb53afa60093e480c5cd0e0b6c695d119cb98da0f9e614cbc8ff488c1427
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates or replaces one neutral node property; only samples carrying the same explicit gesture identity merge.

## Parameters

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Parameter `value`:** New neutral value.

**Parameter `gestureId`:** Unique current text/numeric gesture identity, or null for an independent edit.
