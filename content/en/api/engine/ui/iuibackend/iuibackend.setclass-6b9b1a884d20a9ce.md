---
uid: api.6b9b1a884d20a9ced25c5782c0690ddd55ab722c969dbf95dd2c1d832fea6026
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean)"
source: xml
reviewed: 73ecb0ded8abdf7688d51a5260bbc799480f425ff98006b59d125e3af16a2954
title: "IUiBackend.SetClass"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Activates or deactivates one element class.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

**Returns:** True when the element exists and its class state was assigned; false when the element is absent. This is not a comparison with the preceding state.
