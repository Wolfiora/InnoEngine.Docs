---
uid: api.66c5131dc6bbc3992390db59f9cf5cbcb95303435fbbed304d46629aeb86337a
symbol: "engine:Inno.Assets.Pipeline:P:Inno.Assets.Pipeline.AssetPipelineOptions.deferUnavailableExtensions"
source: xml
reviewed: 381f6dc43dd15b6361dc2513f9a3464919e55cdfc95f6e52f58b07150163d05c
title: "AssetPipelineOptions.deferUnavailableExtensions"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Gets whether the composition host must still publish its initial authoring extensions.

## Remarks

Only missing extensions are deferred. The host must call AssetPipeline.CompleteExtensionDiscovery after activation.
