---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.74ad14f81ee85bd711acd83675c9f93959f2c0d3ad0c88bd5d148b3717ef5d38
symbol: engine:Inno.UI:M:Inno.UI.IUIService.SetContent(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,Inno.UI.UIDocumentFragment)
title: IUIService.SetContent
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: 6d37031cc0f686f19d5f946c351be9cdb06ae8cdaa6ae3db76239c0305f3d622
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
