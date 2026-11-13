---
uid: api.f61d30823591dd7115ec364fa3d628486bc34382336cb9c9537e4a2f7f458fd4
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid,System.String)"
source: xml
reviewed: 7c42199b82d6c64d852bee899eca11b8a2bcecb0f2d7a44f3d7ba6f57eb816c1
title: "UpdateAssetPath"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Updates an open document's source location after an identity-preserving asset move, without changing history or focus.

**Parameter `documentId`:** Existing document identity.

**Parameter `assetPath`:** Current authoritative source location for the same persistent asset.

**Returns:** Whether the document exists.
