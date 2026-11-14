---
uid: api.a44f2a755f117cf64879e0a10c1a4473b96b6e01aa6f01feb76d34f6de2f5f82
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.PrepareSampleImport(Inno.Assets.AssetPath)"
source: xml
reviewed: 7a5b8d638a6ffa46f67ff4ea06eb9daa36a133b7acef266d7b32646e61156a65
title: "AssetPipeline.PrepareSampleImport"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Starts a private background sample clone without waiting for file copying or transformation.

## Parameters

**Parameter `source`:** An indexed installed Plugin sample directory whose final segment starts with `~`.

## Returns

The generation-pinned transaction to advance, validate and commit on this pipeline's owner thread.

## Exceptions

**Exception `T:System.ArgumentException`:** The source is not an installed sample directory.

**Exception `T:System.IO.IOException`:** The destination name already exists.

**Exception `T:System.InvalidOperationException`:** Another mutation or generation transaction is active, or this is not the initialization thread.
