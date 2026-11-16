---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0134eeed57decb5c64793c33281f4ec582ed3892fa5a52a3470708b0aac4b0ec
symbol: engine:Inno.UI:M:Inno.UI.IUiBackend.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)
title: IUiBackend.SetText
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: 81fe843792ccfd0edf22330868dbff2a2cc11528dba46d73ea15431f2ecaebd4
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

**Parameter `text`:** Plain Unicode replacement text; the implementation escapes it for its source language.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
