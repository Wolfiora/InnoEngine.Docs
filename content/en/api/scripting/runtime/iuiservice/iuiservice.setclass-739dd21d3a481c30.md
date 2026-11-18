---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.739dd21d3a481c30373ef0f35b4244534014e0c22ac1af2d1338503ff605c251
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean)
title: IUiService.SetClass
kind: api
owners:
- Inno.UI
apiSurface: editor-script
sourceFingerprint: 6f6e990cef4ce0a0fb58091c5fda96b329725cbcd64c04093dc913b74f3e8839
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

**Parameter `className`:** CSS class name to toggle.

**Parameter `active`:** Whether the CSS class is enabled.

## Returns

True when the element exists and its class state was assigned; false when the element is absent. This is not a comparison with the preceding state.
