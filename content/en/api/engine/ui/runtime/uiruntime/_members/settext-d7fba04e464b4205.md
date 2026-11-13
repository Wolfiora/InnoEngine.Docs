---
uid: api.d7fba04e464b420560229f7eb9e38a7ed73323d5e0d137ab97de656b4b31109e
symbol: "engine:Inno.UI.Runtime:M:Inno.UI.Runtime.UiRuntime.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: 606b87d946354d0c6b0ebb08b4f0739d97f7f6835b9766bf531725c0b278c7be
title: "SetText"
kind: api
owners: [Inno.UI.Runtime]
apiSurface: source-clr
---

Updates the text state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set text; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set text operation.

**Parameter `text`:** The text text validated by the set text operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
