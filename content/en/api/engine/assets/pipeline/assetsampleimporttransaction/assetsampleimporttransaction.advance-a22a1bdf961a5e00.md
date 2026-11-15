---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a22a1bdf961a5e00f4bbfbad96be7856bfe09950b5c5e88de49e6361aad198f0
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Advance
title: AssetSampleImportTransaction.Advance
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: ca253984d2e4a1ab7c5fccd6512ba18e03f38d03bc85d14993691948971e8f95

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Returns

True when the candidate is indexed and ready for BeginValidation; false while preparation is pending.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The transaction is finished or the caller is not its initialization thread.

**Exception `T:System.OperationCanceledException`:** Preparation or indexing observed cancellation before a candidate could be adopted.
