---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.245ffca0717621faf5de9f0ae5b415837b00efa40d4dfcfd9febbdf7d183b501
symbol: engine:Inno.UI:M:Inno.UI.IUIBackend.SetText(Inno.UI.UIContextHandle,Inno.UI.UIDocumentHandle,System.String,System.String)
title: IUIBackend.SetText
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: ea39804e3fd5de4eb5f481f49c9848db5ba42271705e162e74c820288a2e96a6
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

**Parameter `text`:** Plain Unicode replacement text; the implementation escapes it for its source language.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
