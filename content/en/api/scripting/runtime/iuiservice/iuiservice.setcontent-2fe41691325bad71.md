---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2fe41691325bad7197715219350ae262c7bc9010042260cb8cba15b6bca5e6e3
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUIService.SetContent(InnoEngine.UI.UIContextHandle,InnoEngine.UI.UIDocumentHandle,System.String,InnoEngine.UI.UIDocumentFragment)
title: IUIService.SetContent
kind: api
owners:
- Inno.UI
apiSurface: editor-script
sourceFingerprint: ee16ad69d26ad2f974b7bc89a6509687c20df89bbdec455134343f8e9a90fa9c
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

**Parameter `fragment`:** Explicitly tagged replacement document fragment.

## Returns

True when the element exists and the fragment was applied; false when the element is absent. This is not a comparison with the preceding content.
