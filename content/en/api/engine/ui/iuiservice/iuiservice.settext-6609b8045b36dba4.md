---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6609b8045b36dba43099e39928c70ab6f5c081b9681448243e9d3a05bdb2682f
symbol: engine:Inno.UI:M:Inno.UI.IUIService.SetText(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,System.String)
title: IUIService.SetText
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: 12d4b8bdd48ca0ac004d861ac3245b8f16f1c816d6c242ad11bf71296d58934b
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

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
