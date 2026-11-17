---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0a6333aa7d9f0315eea95940c7a400848b92361ebfbad5bff455edc3cc78e3f0
symbol: engine:Inno.UI:M:Inno.UI.IUiBackend.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)
title: IUiBackend.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: source-clr
reviewed: 8d2c913e0caeb376d9b6635348d8aba3402f6c56e577ebe3b8c8d043f8fcf2be
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
