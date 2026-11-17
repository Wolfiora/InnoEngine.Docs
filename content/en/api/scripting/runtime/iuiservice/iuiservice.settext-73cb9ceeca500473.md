---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.73cb9ceeca50047382a2a39e39128c279c2d226c3135a3336b0b8a2a5b792754
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetText(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String)
title: IUiService.SetText
kind: api
owners:
- Inno.UI
apiSurface: editor-script
reviewed: ef4e6ae46e593497005752f317e9dd8735a5d267b41098b1dd92f9ede1b60191
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

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
