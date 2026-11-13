---
uid: api.66c5131dc6bbc3992390db59f9cf5cbcb95303435fbbed304d46629aeb86337a
symbol: "engine:Inno.Assets.Pipeline:P:Inno.Assets.Pipeline.AssetPipelineOptions.deferUnavailableExtensions"
source: xml
reviewed: ae5501c90876c237d4cc941c0387ee0e794d3a07c1be600ec681e0e82913d874
title: "deferUnavailableExtensions"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Gets whether the composition host must still publish its initial authoring extensions.

## Remarks

Only missing extensions are deferred. The host must call AssetPipeline.CompleteExtensionDiscovery after activation.
