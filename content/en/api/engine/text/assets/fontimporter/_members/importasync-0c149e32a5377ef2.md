---
uid: api.0c149e32a5377ef2200af3b41c42629c7e42dd43af50e9a1a263f43b487fa6e5
symbol: "engine:Inno.Text.Assets:M:Inno.Text.Assets.FontImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Text.FontAsset},System.Threading.CancellationToken)"
source: xml
reviewed: 1980c7d0765720d712ca02b02d741a78c1e327f1511b7d892d17ac425aa575b5
title: "ImportAsync"
kind: api
owners: [Inno.Text.Assets]
apiSurface: source-clr
---

Validates the source container and emits runtime metadata plus encoded font data.

**Parameter `context`:** The source import context.

**Parameter `output`:** The candidate artifact writer.

**Parameter `cancellationToken`:** Cancellation observed by artifact writes.

**Returns:** An operation that completes after both artifacts are staged.
