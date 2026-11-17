---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1b43aa772c5d15f7e2ea566da5368b26e17793da1e682609830625956da3ea9
symbol: engine:Inno.UI:M:Inno.UI.IUiService.SetText(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String)
title: IUiService.SetText
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: c442519fb87e059395580b6b4e08ae1e3fe0a65bae93c2028903915ef5b703a3
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

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
