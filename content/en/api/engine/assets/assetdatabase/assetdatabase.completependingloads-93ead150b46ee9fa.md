---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.93ead150b46ee9fa8ec285990e6949ba90718fa79d5231df3ec201aebe704d23
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.CompletePendingLoads(System.Int32)
title: AssetDatabase.CompletePendingLoads
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 8c892b87f58b1b35176a25d8b3aa4f97537221e99ee0ee401095a67f8c0e7fa3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `completionBudget`:** The maximum number of ready requests committed at this frame safety point.

## Returns

The number of requests completed, failed, or canceled during this call.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The caller is not the owner thread that created this database.

**Exception `T:System.ObjectDisposedException`:** The database has already retired.
