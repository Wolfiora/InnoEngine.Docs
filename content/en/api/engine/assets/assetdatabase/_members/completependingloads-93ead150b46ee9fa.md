---
uid: api.93ead150b46ee9fa8ec285990e6949ba90718fa79d5231df3ec201aebe704d23
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.CompletePendingLoads(System.Int32)"
source: xml
reviewed: b17dda5365b3c5d6cc2ef188ea74fa57bfbf275c33491c3bf33901b9aed6cbd2
title: "CompletePendingLoads"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Publishes completed cold loads on the database owner thread without waiting for outstanding IO.

**Parameter `completionBudget`:** The maximum number of ready requests committed at this frame safety point.

**Returns:** The number of requests completed, failed, or canceled during this call.

**Exception `T:System.InvalidOperationException`:** The caller is not the owner thread that created this database.

**Exception `T:System.ObjectDisposedException`:** The database has already retired.
