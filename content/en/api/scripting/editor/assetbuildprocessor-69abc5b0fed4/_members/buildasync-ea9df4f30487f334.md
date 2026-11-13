---
uid: api.ea9df4f30487f3349cdb9e91378d26cef0b2b2b7ed070d2cecbde4aa28cdd448
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetBuildProcessor\u00601.BuildAsync(InnoEditor.Assets.AssetBuildContext{\u00600},InnoEditor.Assets.AssetArtifactWriter,System.Threading.CancellationToken)"
source: xml
reviewed: efdac48b91950ae7b6207d0a8fdff2a0cc4ce32dc04dc6c66e2ef4b585ccce70
title: "BuildAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Builds immutable outputs from a consistent asset snapshot.

**Parameter `context`:** The build context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the build.

**Returns:** An operation that completes when all outputs are staged.
