---
uid: api.9cd00edc0992bafbfd7fd11ae9adaedf566e1a239164be440e1cd30a34ef5fb6
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.BeginValidation(System.Func{Inno.Assets.Pipeline.IAssetSourceSnapshot,System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})"
source: xml
reviewed: 0c881c6638b2e5385e3df402afaa48119b19deb1e48257e7e6eeb96642a44b14
title: "AssetSampleImportTransaction.BeginValidation"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Starts one authoring preflight after indexing, retaining its dependencies until it drains.

## Parameters

**Parameter `validate`:** Owner-thread capture followed by asynchronous validation. Continuations must not mutate live Assets.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The validation callback is null.

**Exception `T:System.InvalidOperationException`:** The candidate is not indexed, validation already started, or the transaction is finished.
