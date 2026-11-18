---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6b9b1a884d20a9ced25c5782c0690ddd55ab722c969dbf95dd2c1d832fea6026
symbol: engine:Inno.UI:M:Inno.UI.IUiBackend.SetClass(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.Boolean)
title: IUiBackend.SetClass
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: 35c576127684970e90378d753c8bf5d25b375c077d434d8d17c558f98989b675
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
