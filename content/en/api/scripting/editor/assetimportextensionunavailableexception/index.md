---
uid: api.inno.assets.pipeline.editor-script.18181796887c9f40
symbol: "scripting:Inno.Assets.Pipeline:T:InnoEditor.Assets.AssetImportExtensionUnavailableException"
source: xml
reviewed: 1f08c53613f3d68a237f81cab23ecc8fcf25e08f4c3749bac258ed0e979f8187
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
