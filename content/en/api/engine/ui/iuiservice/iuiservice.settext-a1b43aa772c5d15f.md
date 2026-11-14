---
uid: api.a1b43aa772c5d15f7e2ea566da5368b26e17793da1e682609830625956da3ea9
symbol: "engine:Inno.UI:M:Inno.UI.IUiService.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: 3e72a7304846f9307d42d9a5b494f4450b5d4971a67cd4edde7d0165c5a49a75
title: "IUiService.SetText"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Replaces an element's children with plain Unicode text.

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
