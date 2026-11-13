---
uid: api.67a4a21e3260565c627b4cd1f990b7b91d059d322a4432a8e4f8e8ff5d77deaa
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.CompleteExtensionDiscovery"
source: xml
reviewed: 6c5eda9d618bdd35c3cb1832f9b356b7be4694e3b908706e3b528fcec4bb479f
title: "AssetPipeline.CompleteExtensionDiscovery"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Ends initial authoring extension discovery and strictly retries dependent imports.

## Remarks

Call on the initialization thread after successful extension activation. Failed compilation must not call this method.
