---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0b44964fc2f88bc1db0e194ea4cbbaf8f1bd78583994f9785761ca01b510bec6
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment)
title: IUiService.SetContent
kind: api
owners:
- Inno.UI
apiSurface: editor-script
sourceFingerprint: 17ddd2b00175f1d7880937d21885de8961a0486db7c5ecffb6d018a6987f5f0e
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

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

## Returns

True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
