---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a393e18ae2b1136ba52c15a37fadc023ba19ea292e33a28eeb9fa135f3d4ec9b
symbol: engine:Inno.UI:M:Inno.UI.IUiBackend.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)
title: IUiBackend.SetContent
kind: api
owners:
- Inno.UI
apiSurface: source-clr
sourceFingerprint: e9d6d54ac108ecfc1b268e21bd4c9f473651e78f1730cd26344a16a1fb4f9b01
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
