---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.29af2a9ea4fb90f0529d832c275dd867bb8c33f530c3fd05f24a7a8f867e2da1
symbol: engine:Inno.UI:M:Inno.UI.IUiService.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)
title: IUiService.SetContent
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: 07299fae48cf1eb0a363f6ae198abf6e91911a9506e768db7c81dc7478eb7498

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

## Returns

True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
