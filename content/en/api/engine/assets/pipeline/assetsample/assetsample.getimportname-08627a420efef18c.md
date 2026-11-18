---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.08627a420efef18c4548e4570f129235adc1951e348e106e8a3b88d97d7d9df6
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.GetImportName(Inno.Assets.AssetPath)
title: AssetSample.GetImportName
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 54272d233bf062fbc517a8bedce70f267d128cd59d8d449a091bd477d5a5821a
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
