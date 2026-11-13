---
uid: api.a02d733945257b5cfe8ffd7cb602a81ebb88d363d75b94e5cec6616fce0a54c4
symbol: "engine:Inno.UI.Runtime:M:Inno.UI.Runtime.UiRuntime.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)"
source: xml
reviewed: c4b40d7ea3bd61b99b761154aeb5838bfdf3d119cecaeaa42dab7dfbf5540f7d
title: "SetContent"
kind: api
owners: [Inno.UI.Runtime]
apiSurface: source-clr
---

Updates the content state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `content`:** The content consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
