---
uid: api.fe243e71c3c2757ecd609b746bbe73ff1e5b809eccd482b7c41e4822909a9f10
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImporter\u00601.ExportAsync(InnoEditor.Assets.AssetExportContext,\u00600,System.Threading.CancellationToken)"
source: xml
reviewed: 2a913914de5282a51f38f2fdc1cee2798599eb389319c7c587bc60720f37829b
title: "AssetImporter\u003CTAsset\u003E.ExportAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Exports an asset back into source bytes.

## Parameters

**Parameter `context`:** The generation-bound source export services.

**Parameter `asset`:** The asset to export.

**Parameter `cancellationToken`:** Cancellation for the export.

## Returns

The source bytes, or `null` when export is unsupported.
