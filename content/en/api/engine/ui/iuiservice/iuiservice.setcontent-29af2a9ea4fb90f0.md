---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.29af2a9ea4fb90f0529d832c275dd867bb8c33f530c3fd05f24a7a8f867e2da1
symbol: engine:Inno.UI:M:Inno.UI.IUiService.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)
title: IUiService.SetContent
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: 4cac9705ccae10fc2bc8f301a468cc6e3144924b9dcc7e339af06bc545e90a24
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
