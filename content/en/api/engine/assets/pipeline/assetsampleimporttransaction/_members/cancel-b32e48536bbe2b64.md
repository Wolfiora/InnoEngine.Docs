---
uid: api.b32e48536bbe2b643ded55ea5fc21319b10712cf0d98e6e5574e9f5ad527657a
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Cancel"
source: xml
reviewed: 17748efeb346b490a972b9fd103a55575d92978da7da14c34ba83d2998bfda83
title: "Cancel"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Requests cancellation of copying and validation while retaining all dependencies.

## Remarks

Cancellation does not wait. Continue owner-thread retirement until Rollback or Dispose completes.
