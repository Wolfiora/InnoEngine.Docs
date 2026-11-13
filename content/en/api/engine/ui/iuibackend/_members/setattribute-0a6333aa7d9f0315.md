---
uid: api.0a6333aa7d9f0315eea95940c7a400848b92361ebfbad5bff455edc3cc78e3f0
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: 59bb835d92dee0137b9894a52e55b2bc922e152d1839bb40cad022c9ab5fc53c
title: "SetAttribute"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Sets one element attribute.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

**Returns:** True when the element exists and the attribute was assigned; false when the element is absent. This is not a comparison with the preceding value.
