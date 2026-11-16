---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0a6333aa7d9f0315eea95940c7a400848b92361ebfbad5bff455edc3cc78e3f0
symbol: engine:Inno.UI:M:Inno.UI.IUiBackend.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)
title: IUiBackend.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: e7cce95b9cd74ef9b365bd337da42549468d77f50924b1e683f00c793cf1aa0c
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

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

## Returns

True when the element exists and the attribute was assigned; false when the element is absent. This is not a comparison with the preceding value.
