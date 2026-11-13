---
uid: api.d20ab6842bcf31cc124b2973a1cbfe771f2caddcf42137c0b78b5ad48d8cd3cf
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphDocumentController.SetNodeValue(InnoEngine.Graphs.GraphNodeId,System.String,InnoEngine.Graphs.GraphSerializedValue,System.String)"
source: xml
reviewed: 9ec1e46c1f435b2059adf39cd5822c12803cd8bc04b8dcd7fd00ff474fe11fe0
title: "SetNodeValue"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Creates or replaces one neutral node property; only samples carrying the same explicit gesture identity merge.

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Parameter `value`:** New neutral value.

**Parameter `gestureId`:** Unique current text/numeric gesture identity, or null for an independent edit.
