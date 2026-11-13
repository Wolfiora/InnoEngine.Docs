---
uid: api.inno.assets.pipeline.e0df66f40562ebd3
symbol: "engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetImportFailure"
source: xml
reviewed: 039b0d23526b9184d5ded74b25228c31bccbf7493c35128a6444441c9a3b7703
title: "AssetImportFailure"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
contracts:
- project.inno-assets-pipeline
aliases: []
---

Describes a writable-source import failure introduced after an earlier health snapshot.

**Parameter `assetPath`:** The isolated path of the source that failed to import.

**Parameter `diagnostics`:** The deterministic importer diagnostics associated with the failure.
