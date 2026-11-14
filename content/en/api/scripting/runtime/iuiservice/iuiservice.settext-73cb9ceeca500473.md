---
uid: api.73cb9ceeca50047382a2a39e39128c279c2d226c3135a3336b0b8a2a5b792754
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetText(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: 693b22f46b65087a8a93476a0b48ce566d668178e2882d77741eeba3bb2c7ded
title: "IUiService.SetText"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Replaces an element's children with plain Unicode text.

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
