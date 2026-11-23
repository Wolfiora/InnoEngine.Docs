---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4178ba62c34de160cb26e5a81042606d2af78450653c13c6c68ab0566c03df0f
symbol: engine:Inno.UI:M:Inno.UI.IUIService.SetClass(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,System.String,System.Boolean)
title: IUIService.SetClass
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: 1b390e485a73d1a0a49aab366407094770361537daf7462d20f80b99976a2a51
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
