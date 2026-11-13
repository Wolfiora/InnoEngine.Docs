---
uid: api.80e7131ea7423dfe4a4b557fa5b039f3c8f4da166d863b31672d8d3005dfc9c2
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImporter\u00601.ExportAsync(Inno.Assets.Pipeline.AssetExportContext,\u00600,System.Threading.CancellationToken)"
source: xml
reviewed: a8b5a5b1c944c111dc59856934a3e74fc7be7be00a48f6ec5abde6e089f83d4b
title: "AssetImporter\u003CTAsset\u003E.ExportAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Exports an asset back into source bytes.

**Parameter `context`:** The generation-bound source export services.

**Parameter `asset`:** The asset to export.

**Parameter `cancellationToken`:** Cancellation for the export.

**Returns:** The source bytes, or `null` when export is unsupported.
