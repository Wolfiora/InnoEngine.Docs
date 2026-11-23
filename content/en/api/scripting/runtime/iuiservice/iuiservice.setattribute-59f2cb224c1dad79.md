---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.59f2cb224c1dad79fabcec0a6858306ddaf2db3eff3a25fc9974cfbdcfde7079
symbol: scripting:Inno.UI:M:InnoEngine.UI.IUIService.SetAttribute(InnoEngine.UI.UIContextHandle,InnoEngine.UI.UIDocumentHandle,System.String,System.String,System.String)
title: IUIService.SetAttribute
kind: api
owners:
- Inno.UI
apiSurface: editor-script
sourceFingerprint: 9bfc32695777f3f90b91d8b80c3f8467c8691b01cbb79011c7a77700af57469a
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

**Parameter `name`:** Attribute name to change.

**Parameter `value`:** New attribute value.

## Returns

True when the element exists and the attribute was assigned; false when the element is absent. This is not a comparison with the preceding value.
