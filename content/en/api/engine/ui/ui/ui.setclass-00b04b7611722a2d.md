---
uid: api.00b04b7611722a2d85964c8fed38b78faa440c39691f69016d92069c644dfe8d
symbol: "engine:Inno.UI:M:Inno.UI.UI.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean)"
source: xml
reviewed: ceda0cb13712854995642d36e22e48fd7ca076ed6e5ae710f5b04841bf94f5ba
title: "UI.SetClass"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Activates or deactivates one element class.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
