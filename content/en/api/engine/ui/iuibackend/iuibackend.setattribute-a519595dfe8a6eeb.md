---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a519595dfe8a6eebd16c1405679b6588205a382f02f8938cf08d2e17218003e8
symbol: engine:Inno.UI:M:Inno.UI.IUIBackend.SetAttribute(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,System.String,System.String)
title: IUIBackend.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: a45bc4410358d3045571e0cb9b6f2b69d373e5024ad58f758db1f69c3f09c486
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementID`:** The target document element ID.

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

## Returns

True when the element exists and the attribute was assigned; false when the element is absent. This is not a comparison with the preceding value.
