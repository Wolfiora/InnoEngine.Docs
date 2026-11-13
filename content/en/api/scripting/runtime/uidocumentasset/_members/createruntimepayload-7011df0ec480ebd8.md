---
uid: api.7011df0ec480ebd8c6e3381d2a7bc408247da309046ed24e226c6fbacc10400b
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UiDocumentAsset.CreateRuntimePayload(System.String,InnoEngine.UI.UiDocumentSource,System.Collections.Generic.IReadOnlyList{InnoEngine.UI.UiDocumentFontFace})"
source: xml
reviewed: 986b2ee04d88cb68bb57b9ebdc6a6b709aa7ab1af39f40bdd006860e7963c58e
title: "CreateRuntimePayload"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Encodes an importer-owned runtime payload without exposing an implementation-specific format.

**Parameter `implementationId`:** Stable backend implementation identity.

**Parameter `source`:** Validated frozen document source.

**Parameter `fonts`:** Imported font asset dependencies.

**Returns:** Complete deterministic runtime payload bytes.
