---
uid: api.a44f2a755f117cf64879e0a10c1a4473b96b6e01aa6f01feb76d34f6de2f5f82
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.PrepareSampleImport(Inno.Assets.AssetPath)"
source: xml
reviewed: 48f4e300576d69113b04c366b6d5322147be82a1a5902909b90b4c5c5ccf8f69
title: "PrepareSampleImport"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Starts a private background sample clone without waiting for file copying or transformation.

**Parameter `source`:** An indexed installed Plugin sample directory whose final segment starts with `~`.

**Returns:** The generation-pinned transaction to advance, validate and commit on this pipeline's owner thread.

**Exception `T:System.ArgumentException`:** The source is not an installed sample directory.

**Exception `T:System.IO.IOException`:** The destination name already exists.

**Exception `T:System.InvalidOperationException`:** Another mutation or generation transaction is active, or this is not the initialization thread.
