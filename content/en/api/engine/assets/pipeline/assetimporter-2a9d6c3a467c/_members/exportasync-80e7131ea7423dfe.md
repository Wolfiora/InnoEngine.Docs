---
uid: api.80e7131ea7423dfe4a4b557fa5b039f3c8f4da166d863b31672d8d3005dfc9c2
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImporter\u00601.ExportAsync(Inno.Assets.Pipeline.AssetExportContext,\u00600,System.Threading.CancellationToken)"
source: xml
reviewed: 7a6983cadb190e693d4fb6eea06c3790491cdf4dcaea7ddddf17595feaad5215
title: "ExportAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Exports an asset back into source bytes.

**Parameter `context`:** The generation-bound source export services.

**Parameter `asset`:** The asset to export.

**Parameter `cancellationToken`:** Cancellation for the export.

**Returns:** The source bytes, or `null` when export is unsupported.
