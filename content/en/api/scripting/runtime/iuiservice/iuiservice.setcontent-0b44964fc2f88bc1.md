---
uid: api.0b44964fc2f88bc1db0e194ea4cbbaf8f1bd78583994f9785761ca01b510bec6
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment)"
source: xml
reviewed: 0ec086c94e02d03eed053008b95d313d72c5c18d6f8178c2aae039435b5a33c5
title: "IUiService.SetContent"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Replaces an element's children with an explicitly tagged source-language fragment.

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

## Returns

True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
