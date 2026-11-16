---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.08627a420efef18c4548e4570f129235adc1951e348e106e8a3b88d97d7d9df6
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.GetImportName(Inno.Assets.AssetPath)
title: AssetSample.GetImportName
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 2a61d956b08d7405d01cc34d7b58ccf777d5f12ab5b493438394021f7fc39d6f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** A sample directory path whose final segment starts with `~`.

## Returns

The unchanged final directory segment, including every leading `~`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` does not identify a sample directory or has no usable name after its prefix.
