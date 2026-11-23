---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7cbc58a14233b359009fc079e83ecd04b40672fdc73e5f6382997c8588fa03f9
symbol: engine:Inno.UI:M:Inno.UI.IUIBackend.SetContent(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,Inno.UI.UIDocumentFragment)
title: IUIBackend.SetContent
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: bae0b3bf3023dc713dd97faaef56675037678d3c0c7c90984c3d9dd906c90021
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

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

## Returns

True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
