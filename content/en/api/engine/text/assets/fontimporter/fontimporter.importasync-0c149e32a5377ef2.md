---
uid: api.0c149e32a5377ef2200af3b41c42629c7e42dd43af50e9a1a263f43b487fa6e5
symbol: "engine:Inno.Text.Assets:M:Inno.Text.Assets.FontImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Text.FontAsset},System.Threading.CancellationToken)"
source: xml
reviewed: 9bd44c114e9503de4ddb6f3433c7b0ffbce5c60027f355135688251393f49fc5
title: "FontImporter.ImportAsync"
kind: api
owners: [Inno.Text.Assets]
apiSurface: source-clr
---

Validates the source container and emits runtime metadata plus encoded font data.

## Parameters

**Parameter `context`:** The source import context.

**Parameter `output`:** The candidate artifact writer.

**Parameter `cancellationToken`:** Cancellation observed by artifact writes.

## Returns

An operation that completes after both artifacts are staged.
