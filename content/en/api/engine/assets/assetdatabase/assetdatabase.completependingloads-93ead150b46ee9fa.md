---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.93ead150b46ee9fa8ec285990e6949ba90718fa79d5231df3ec201aebe704d23
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.CompletePendingLoads(System.Int32)
title: AssetDatabase.CompletePendingLoads
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 080d492f9d4a0af0bc5597c631211e5c6f0d052e412ee3f90ac4f0fb8f22d342
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
