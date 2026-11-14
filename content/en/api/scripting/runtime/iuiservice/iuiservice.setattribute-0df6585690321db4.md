---
uid: api.0df6585690321db48c60cc676bb2356e55cf99430209f9a6b94f3545c406902b
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: 2f8a1d3d7355004024676ea865eaff50d172682fc348ce3dc0be009fad46ff41
title: "IUiService.SetAttribute"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Sets one element attribute.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

**Returns:** True when the element exists and the attribute was assigned; false when the element is absent. This is not a comparison with the preceding value.
