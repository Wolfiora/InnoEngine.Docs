---
uid: api.a393e18ae2b1136ba52c15a37fadc023ba19ea292e33a28eeb9fa135f3d4ec9b
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)"
source: xml
reviewed: 9baee946e18c1e5e71be0ab3b6e47436eed0557768957e07cef66c6f180eb8e1
title: "IUiBackend.SetContent"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Replaces an element's children with an explicitly tagged source-language fragment.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

**Returns:** True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
