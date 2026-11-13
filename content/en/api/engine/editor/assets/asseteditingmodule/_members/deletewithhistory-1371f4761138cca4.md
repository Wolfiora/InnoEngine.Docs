---
uid: api.1371f4761138cca4e64aae71a07bebf6bc132d4be21437ee56c637955932969b
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.DeleteWithHistory(Inno.Editor.Assets.AssetEditorContext,Inno.Editor.Interactions.IEditorHistory)"
source: xml
reviewed: 72eb3007d2d30de2cb67fb16deaf3a05edd674d38019977605a9c2d5c6e6efc7
title: "DeleteWithHistory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Deletes a source with a recoverable archive and records the committed mutation.

**Parameter `asset`:** The captured source metadata to validate and delete.

**Parameter `history`:** The authoritative History receiving this mutation.

**Returns:** True when the request is accepted; otherwise false.
