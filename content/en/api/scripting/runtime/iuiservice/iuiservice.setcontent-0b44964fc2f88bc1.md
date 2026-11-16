---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0b44964fc2f88bc1db0e194ea4cbbaf8f1bd78583994f9785761ca01b510bec6
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment)
title: IUiService.SetContent
kind: api
owners:
- Inno.UI
apiSurface: editor-script
reviewed: e42cc3c4ff06bf750c4a268951c393ab9479df499cc8595e5cb9e0ae61ad9bb1
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
