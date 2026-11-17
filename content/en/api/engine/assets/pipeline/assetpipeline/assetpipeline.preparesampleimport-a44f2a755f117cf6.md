---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a44f2a755f117cf64879e0a10c1a4473b96b6e01aa6f01feb76d34f6de2f5f82
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.PrepareSampleImport(Inno.Assets.AssetPath)
title: AssetPipeline.PrepareSampleImport
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 2e702129b558f86c4d3b4145609e385767e1376524e3825d0b11b45c92123301
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** An indexed installed Plugin sample directory whose final segment starts with `~`.

## Returns

The generation-pinned transaction to advance, validate and commit on this pipeline's owner thread.

## Exceptions

**Exception `T:System.ArgumentException`:** The source is not an installed sample directory.

**Exception `T:System.IO.IOException`:** The destination name already exists.

**Exception `T:System.InvalidOperationException`:** Another mutation or generation transaction is active, or this is not the initialization thread.
