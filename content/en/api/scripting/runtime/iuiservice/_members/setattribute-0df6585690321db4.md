---
uid: api.0df6585690321db48c60cc676bb2356e55cf99430209f9a6b94f3545c406902b
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: 6bec8cd0c54c87db70124b873bc629a3a6b33da703bde6c25a4af44055e1ca62
title: "SetAttribute"
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
