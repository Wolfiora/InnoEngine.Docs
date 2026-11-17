---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9cd00edc0992bafbfd7fd11ae9adaedf566e1a239164be440e1cd30a34ef5fb6
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.BeginValidation(System.Func{Inno.Assets.Pipeline.IAssetSourceSnapshot,System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})
title: AssetSampleImportTransaction.BeginValidation
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 0691f19e62f8ff62998b3ce66f96f3002603fb01ce5ae51e9a91dc7ab5f4127a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `validate`:** Owner-thread capture followed by asynchronous validation. Continuations must not mutate live Assets.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The validation callback is null.

**Exception `T:System.InvalidOperationException`:** The candidate is not indexed, validation already started, or the transaction is finished.
