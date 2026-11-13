---
uid: api.inno.assets.runtime-script.78b1ab2b507bb59d
symbol: "scripting:Inno.Assets:T:InnoEngine.Assets.AssetReferenceInfo"
source: xml
reviewed: 053e88323dbbf077d20a6cf2817d66042709b7452d8fe81c868d123e46344918
title: "AssetReferenceInfo"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-assets
aliases: []
---

Provides a stable diagnostic snapshot of references known to the asset pipeline.

## Remarks

The known reference count is not the number of CLR strong references and is never used to decide whether an asset can be collected.
