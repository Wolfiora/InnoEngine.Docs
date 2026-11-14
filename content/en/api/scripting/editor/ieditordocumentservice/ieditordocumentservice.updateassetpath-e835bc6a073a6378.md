---
uid: api.e835bc6a073a637814927edb4dbf84404f5306d0f701c3e7012dc4f21bbcb230
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid,System.String)"
source: xml
reviewed: fa9c9106282380d8d8cd57c175d9ac8d318bf72793389db9eb79e3e718071b43
title: "IEditorDocumentService.UpdateAssetPath"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Updates an open document's source location after an identity-preserving asset move, without changing history or focus.

**Parameter `documentId`:** Existing document identity.

**Parameter `assetPath`:** Current authoritative source location for the same persistent asset.

**Returns:** Whether the document exists.
