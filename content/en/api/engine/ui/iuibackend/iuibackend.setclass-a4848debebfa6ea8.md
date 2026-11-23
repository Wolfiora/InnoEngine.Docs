---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a4848debebfa6ea89bebf025f64c8f013f5216c76698f4f7a5d8df527ebcae2a
symbol: engine:Inno.UI:M:Inno.UI.IUIBackend.SetClass(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,System.String,System.Boolean)
title: IUIBackend.SetClass
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: eaddc27d0065e248ee5dccc8d179de1c8ab922e5b884dc7a7b13716035ec789c
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

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

## Returns

True when the element exists and its class state was assigned; false when the element is absent. This is not a comparison with the preceding state.
