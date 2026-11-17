---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.739dd21d3a481c30373ef0f35b4244534014e0c22ac1af2d1338503ff605c251
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetClass(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.Boolean)
title: IUiService.SetClass
kind: api
owners:
- Inno.UI
apiSurface: editor-script
reviewed: 985aa7d311a1a1f883b25d51257f185a67eee86da2ac293993bb280a8795f2fb
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
