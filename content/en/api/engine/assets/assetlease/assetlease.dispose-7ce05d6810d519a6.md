---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7ce05d6810d519a62a6e01c8b5a098d68372d7d23e9cbea3205596da7197ec17
symbol: engine:Inno.Assets:M:Inno.Assets.AssetLease`1.Dispose
title: AssetLease<TAsset>.Dispose
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 15d6503d4c6d4b97b418f721cae24872b327b97be951f718258e4a0a89dd6031
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
