---
uid: api.1371f4761138cca4e64aae71a07bebf6bc132d4be21437ee56c637955932969b
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.DeleteWithHistory(Inno.Editor.Assets.AssetEditorContext,Inno.Editor.Interactions.IEditorHistory)"
source: xml
reviewed: ba3781f184007a43013e55f1ae19a5b3cb8b98e5acf7f5bf1a88f04ef708be05
title: "AssetEditingModule.DeleteWithHistory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Deletes a source with a recoverable archive and records the committed mutation.

**Parameter `asset`:** The captured source metadata to validate and delete.

**Parameter `history`:** The authoritative History receiving this mutation.

**Returns:** True when the request is accepted; otherwise false.
