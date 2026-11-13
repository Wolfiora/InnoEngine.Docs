---
uid: api.inno.assets.pipeline.editor-script.18181796887c9f40
symbol: "scripting:Inno.Assets.Pipeline:T:InnoEditor.Assets.AssetImportExtensionUnavailableException"
source: xml
reviewed: 31e2ee92e9fa8ef2ad4152dfd320d0231af09fc274f05a7a00e659822032eee7
title: "AssetImportExtensionUnavailableException"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-assets-pipeline
aliases: []
---

Reports a required authoring extension absent from the current generation.

## Remarks

The host may defer this condition during discovery; it remains an import failure once discovery is complete.
