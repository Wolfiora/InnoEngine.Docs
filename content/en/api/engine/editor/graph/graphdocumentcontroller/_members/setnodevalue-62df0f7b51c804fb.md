---
uid: api.62df0f7b51c804fbbeb50833ec0773c4d5cf10191978f678c89a7b2e9a6356fb
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.SetNodeValue(Inno.Core.Graphs.GraphNodeId,System.String,Inno.Core.Graphs.GraphSerializedValue,System.String)"
source: xml
reviewed: 2c4d8aab13a777544e5eb344cb607bac4db59893cf29dddfa02b57bec881d301
title: "SetNodeValue"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Creates or replaces one neutral node property; only samples carrying the same explicit gesture identity merge.

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Parameter `value`:** New neutral value.

**Parameter `gestureId`:** Unique current text/numeric gesture identity, or null for an independent edit.
