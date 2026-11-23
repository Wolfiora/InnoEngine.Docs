---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7138011da8a9940b15e6fdbfbf368aa79bc5501c1d7147f08527c4313183900d
symbol: engine:Inno.UI:M:Inno.UI.IUIService.SetAttribute(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,System.String,System.String)
title: IUIService.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: d2b4d5e8745adbd25f41b7fab4822e093a68ef376db82b307e7bd76923d4233f
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
