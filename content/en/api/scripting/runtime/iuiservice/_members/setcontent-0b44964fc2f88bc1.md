---
uid: api.0b44964fc2f88bc1db0e194ea4cbbaf8f1bd78583994f9785761ca01b510bec6
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment)"
source: xml
reviewed: 10dbfe2675e3328394b35a6e6b0dcdd280044a39be9a046b3c0475ed0e776615
title: "SetContent"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

**Returns:** True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
