---
uid: api.0134eeed57decb5c64793c33281f4ec582ed3892fa5a52a3470708b0aac4b0ec
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: bb8e31c86d9e796325f05478a9dbef09e66c50c4f513158caf60f83c72b2edd5
title: "SetText"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the implementation escapes it for its source language.

**Returns:** True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
