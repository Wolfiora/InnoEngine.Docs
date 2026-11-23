---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.faf42af63ca99bfcfed03d35d530abc442bc26b8b1e38057d358faed59a393f1
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUIService.SetText(InnoEngine.UI.UIContextHandle,InnoEngine.UI.UIDocumentHandle,System.String,System.String)
title: IUIService.SetText
kind: api
owners:
- Inno.UI
apiSurface: editor-script
sourceFingerprint: 4af331daf642e4c61245442bfee7324f71f2daf28c46da2cd3058a3501d2f375
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

**Parameter `elementID`:** The target document element ID.

**Parameter `text`:** Plain Unicode replacement text; the backend performs source-language escaping.

## Returns

True when the element exists and the replacement was applied; false when the element is absent. This is not a comparison with the preceding text.
