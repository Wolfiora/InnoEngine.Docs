---
uid: api.4450893c1de7d89a5951b1283950649b7a729df71bcad9a4639b5cc5977c9fef
symbol: "engine:Inno.UI.Runtime:M:Inno.UI.Runtime.UiRuntime.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean)"
source: xml
reviewed: dc07724bf54c6e652ec9de9007fab554a14e21a92792a262c2a2a3884a8cea8f
title: "UiRuntime.SetClass"
kind: api
owners: [Inno.UI.Runtime]
apiSurface: source-clr
---

Updates the class state and applies the resulting invariants.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
