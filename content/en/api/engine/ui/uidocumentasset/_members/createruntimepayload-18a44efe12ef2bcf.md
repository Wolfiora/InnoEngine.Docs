---
uid: api.18a44efe12ef2bcf0b6112aaa70bad3e0fcb4e2b47196416147aee7ff7ec274f
symbol: "engine:Inno.UI:M:Inno.UI.UiDocumentAsset.CreateRuntimePayload(System.String,Inno.UI.UiDocumentSource,System.Collections.Generic.IReadOnlyList{Inno.UI.UiDocumentFontFace})"
source: xml
reviewed: 05f05cabac08ae95e75a2ab13cbe7d4983c29a05eaf6a9dd1e5d20a356266b93
title: "CreateRuntimePayload"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Encodes an importer-owned runtime payload without exposing an implementation-specific format.

**Parameter `implementationId`:** Stable backend implementation identity.

**Parameter `source`:** Validated frozen document source.

**Parameter `fonts`:** Imported font asset dependencies.

**Returns:** Complete deterministic runtime payload bytes.
