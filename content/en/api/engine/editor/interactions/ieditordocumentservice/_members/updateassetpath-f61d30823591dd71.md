---
uid: api.f61d30823591dd7115ec364fa3d628486bc34382336cb9c9537e4a2f7f458fd4
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid,System.String)"
source: xml
reviewed: 6bd2958b2be8c0c2ccebef0a7338476a4602246df3b1a98374b2de687f3cb5a2
title: "UpdateAssetPath"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Updates an open document's source location after an identity-preserving asset move, without changing history or focus.

**Parameter `documentId`:** Existing document identity.

**Parameter `assetPath`:** Current authoritative source location for the same persistent asset.

**Returns:** Whether the document exists.
