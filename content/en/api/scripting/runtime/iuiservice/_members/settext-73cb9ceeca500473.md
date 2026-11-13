---
uid: api.73cb9ceeca50047382a2a39e39128c279c2d226c3135a3336b0b8a2a5b792754
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.SetText(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String)"
source: xml
reviewed: a6884dc7ce2fec0269eb52e32ae08ae0ce30810c333d4fcec111a488bd6cd725
title: "SetText"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Replaces an element's children with plain Unicode text.

**Parameter `context`:** The context that owns the requested document or state.

**Parameter `document`:** The document owned by the supplied context.

**Parameter `elementId`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

**Returns:** True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
