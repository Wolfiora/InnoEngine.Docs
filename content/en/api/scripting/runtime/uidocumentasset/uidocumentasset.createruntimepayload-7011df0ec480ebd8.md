---
uid: api.7011df0ec480ebd8c6e3381d2a7bc408247da309046ed24e226c6fbacc10400b
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UiDocumentAsset.CreateRuntimePayload(System.String,InnoEngine.UI.UiDocumentSource,System.Collections.Generic.IReadOnlyList{InnoEngine.UI.UiDocumentFontFace})"
source: xml
reviewed: 3eb1dfe7d5cee8025f099754ef21f8811be72bbab26b5dd3647d73a80e22cb1a
title: "UiDocumentAsset.CreateRuntimePayload"
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
