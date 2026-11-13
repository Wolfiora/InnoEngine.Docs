---
uid: api.739dd21d3a481c30373ef0f35b4244534014e0c22ac1af2d1338503ff605c251
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean)"
source: xml
reviewed: 2d79bdde2a8ca239be04f18f1e589de83d9b1a90977de33d660d24044f454f5f
title: "SetClass"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Activates or deactivates one element class.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

**Returns:** True when the element exists and its class state was assigned; false when the element is absent. This is not a comparison with the preceding state.
