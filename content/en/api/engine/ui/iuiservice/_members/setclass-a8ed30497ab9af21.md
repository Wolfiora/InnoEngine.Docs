---
uid: api.a8ed30497ab9af21363e0447f41cbc4c3b1bff69bb92a3eeb1f6f93a2849f0f2
symbol: "engine:Inno.UI:M:Inno.UI.IUiService.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean)"
source: xml
reviewed: 6b6c5e65efc3c1e30684a92af23d8473d51c86f18af6a6c6e16f4a8e207c6826
title: "SetClass"
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
