---
uid: api.89e7ef709341750375b630717e45c621a2cca0d1dfdb60028469664417081b5b
symbol: "engine:Inno.UI:M:Inno.UI.IUiService.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: f0a7b49ee42a89eabd5e198ae4249834f6ef126ba1bcc7cea0129da6bd248b27
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
