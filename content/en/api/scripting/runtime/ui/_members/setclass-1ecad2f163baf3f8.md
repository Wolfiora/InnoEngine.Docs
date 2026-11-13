---
uid: api.1ecad2f163baf3f8eed074991dd37423136fc17c1c985e53fd9c84af76021f0e
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UI.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean)"
source: xml
reviewed: c77f27dce261044a01f2e0c938d9d174a8899a1ccca2cc396192ffd24110f932
title: "SetClass"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Activates or deactivates one element class.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set class; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set class operation.

**Parameter `className`:** The class name text validated by the set class operation.

**Parameter `active`:** Whether active behavior is enabled while set class executes.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
