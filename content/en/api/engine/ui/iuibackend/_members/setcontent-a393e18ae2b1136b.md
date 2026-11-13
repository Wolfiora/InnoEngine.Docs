---
uid: api.a393e18ae2b1136ba52c15a37fadc023ba19ea292e33a28eeb9fa135f3d4ec9b
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)"
source: xml
reviewed: bb4919eb1428f8c2a784baf1c2e495a323f63567124f743af604c1127901e787
title: "SetContent"
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
