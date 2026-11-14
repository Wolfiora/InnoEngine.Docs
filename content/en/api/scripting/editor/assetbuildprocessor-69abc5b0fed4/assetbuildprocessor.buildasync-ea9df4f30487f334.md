---
uid: api.ea9df4f30487f3349cdb9e91378d26cef0b2b2b7ed070d2cecbde4aa28cdd448
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetBuildProcessor\u00601.BuildAsync(InnoEditor.Assets.AssetBuildContext{\u00600},InnoEditor.Assets.AssetArtifactWriter,System.Threading.CancellationToken)"
source: xml
reviewed: 3cc2a2596109ab772a17371e47c03be86ab022def777b927b6e290d79fdc720c
title: "AssetBuildProcessor\u003CTDefinition\u003E.BuildAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Builds immutable outputs from a consistent asset snapshot.

## Parameters

**Parameter `context`:** The build context.

**Parameter `output`:** The candidate output writer.

**Parameter `cancellationToken`:** Cancellation for the build.

## Returns

An operation that completes when all outputs are staged.
