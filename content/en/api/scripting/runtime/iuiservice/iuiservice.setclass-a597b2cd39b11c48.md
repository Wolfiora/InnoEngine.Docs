---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a597b2cd39b11c4813546dc1551db80222f706d921e8100edaf28d8af51da2ff
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUIService.SetClass(InnoEngine.UI.UIContextHandle,InnoEngine.UI.UIDocumentHandle,System.String,System.String,System.Boolean)
title: IUIService.SetClass
kind: api
owners:
- Inno.UI
apiSurface: editor-script
sourceFingerprint: 8d003dada48396beae3b42509e968ea81e718f096f0076b05359b54771bb00ba
apiScope: Runtime
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
