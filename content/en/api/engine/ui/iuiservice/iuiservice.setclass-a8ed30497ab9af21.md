---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a8ed30497ab9af21363e0447f41cbc4c3b1bff69bb92a3eeb1f6f93a2849f0f2
symbol: engine:Inno.UI:M:Inno.UI.IUiService.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean)
title: IUiService.SetClass
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: d2f0599073c06f42361920e4cccec9c9da2eaf660a804a889b9b3f0491ca1f5f
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
