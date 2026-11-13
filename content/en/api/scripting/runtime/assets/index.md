---
uid: api.inno.assets.runtime-script.433349d519d9b2ae
symbol: "scripting:Inno.Assets:T:InnoEngine.Assets.Assets"
source: xml
reviewed: 03164f1d23ba917034c74fec3993b6260496f6ada1641f08a23db699a76caf71
title: "Assets"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-assets
aliases: []
---

Provides script-facing asset queries through the lookup bound to the current runtime session.

## Remarks

This façade owns no asset state. Engine and Editor infrastructure should depend on an explicit `T:InnoEngine.Assets.IAssetLookup` instance.
