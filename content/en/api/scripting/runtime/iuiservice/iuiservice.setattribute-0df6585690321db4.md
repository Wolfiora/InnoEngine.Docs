---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0df6585690321db48c60cc676bb2356e55cf99430209f9a6b94f3545c406902b
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String)
title: IUiService.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: editor-script
reviewed: 6e78763086630c024ff80258c3112c5138db81834d9a04792725433fbab8cc3c
apiScope: Runtime
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
