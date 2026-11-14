---
uid: api.0134eeed57decb5c64793c33281f4ec582ed3892fa5a52a3470708b0aac4b0ec
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: 14a35c9ca35cdbbae467340559bbc7a2fe56b1fc33f022e138717b3a05de1242
title: "IUiBackend.SetText"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Replaces an element's children with plain Unicode text.

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the implementation escapes it for its source language.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
