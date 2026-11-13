---
uid: api.9cd00edc0992bafbfd7fd11ae9adaedf566e1a239164be440e1cd30a34ef5fb6
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.BeginValidation(System.Func{Inno.Assets.Pipeline.IAssetSourceSnapshot,System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})"
source: xml
reviewed: a98fb074630b5b7037e167c033975ced61d16915bf75fcb347d88d6cfcd612a0
title: "BeginValidation"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Starts one authoring preflight after indexing, retaining its dependencies until it drains.

**Parameter `validate`:** Owner-thread capture followed by asynchronous validation. Continuations must not mutate live Assets.

**Exception `T:System.ArgumentNullException`:** The validation callback is null.

**Exception `T:System.InvalidOperationException`:** The candidate is not indexed, validation already started, or the transaction is finished.
