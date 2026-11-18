---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.89e7ef709341750375b630717e45c621a2cca0d1dfdb60028469664417081b5b
symbol: engine:Inno.UI:M:Inno.UI.IUiService.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)
title: IUiService.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: 301ce494db8b5822aeaa3596cf2cd842a52cc6235bedafc813f0815290f3311c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

## Returns

True when the element exists and the attribute was assigned; false when the element is absent. This is not a comparison with the preceding value.
