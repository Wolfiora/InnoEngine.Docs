---
uid: api.18a44efe12ef2bcf0b6112aaa70bad3e0fcb4e2b47196416147aee7ff7ec274f
symbol: "engine:Inno.UI:M:Inno.UI.UiDocumentAsset.CreateRuntimePayload(System.String,Inno.UI.UiDocumentSource,System.Collections.Generic.IReadOnlyList{Inno.UI.UiDocumentFontFace})"
source: xml
reviewed: fc9e4886b71b0a2146dd5a336ca5ea7816140f6c261b840287021524b6ef3e8c
title: "UiDocumentAsset.CreateRuntimePayload"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Encodes an importer-owned runtime payload without exposing an implementation-specific format.

## Parameters

**Parameter `implementationId`:** Stable backend implementation identity.

**Parameter `source`:** Validated frozen document source.

**Parameter `fonts`:** Imported font asset dependencies.

## Returns

Complete deterministic runtime payload bytes.
