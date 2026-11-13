---
uid: api.0c4c949e3eb9a8bb485991de24f40b581f19d93ba522c53cece0f77e8763ca80
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.BuildAsync(Inno.Assets.AssetObject,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetInfo},System.Threading.CancellationToken)"
source: xml
reviewed: c840bc311992220db67068b724416d45bfcc7d400850ee646d3487c75386d346
title: "BuildAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Builds and validates the requested artifact asynchronously before publishing it.

**Parameter `definition`:** The build definition asset.

**Parameter `inputs`:** The immutable input catalog snapshots.

**Parameter `cancellationToken`:** Cancellation for the candidate build.

**Returns:** The content-addressed output bundle key.
