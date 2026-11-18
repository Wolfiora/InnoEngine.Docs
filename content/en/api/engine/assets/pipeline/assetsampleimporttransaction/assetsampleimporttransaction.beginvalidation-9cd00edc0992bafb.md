---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9cd00edc0992bafbfd7fd11ae9adaedf566e1a239164be440e1cd30a34ef5fb6
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.BeginValidation(System.Func{Inno.Assets.Pipeline.IAssetSourceSnapshot,System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})
title: AssetSampleImportTransaction.BeginValidation
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: a1321b348243006331c6279b5792f46391d33eb6824261c81b31fbe8c5ebead1
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
