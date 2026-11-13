---
uid: api.inno.assets.runtime-script.433349d519d9b2ae
symbol: "scripting:Inno.Assets:T:InnoEngine.Assets.Assets"
source: xml
reviewed: 0da4c85085dbd336e1d9358c2a469ea84d96a76fe3e2b699681d32c2c1c822d9
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
