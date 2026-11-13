---
uid: api.b32e48536bbe2b643ded55ea5fc21319b10712cf0d98e6e5574e9f5ad527657a
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Cancel"
source: xml
reviewed: 6a3208c2a52b1304420faa0efd8e9924edd38fc01b58d98049b2c3781b9ee9f7
title: "Cancel"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Requests cancellation of copying and validation while retaining all dependencies.

## Remarks

Cancellation does not wait. Continue owner-thread retirement until Rollback or Dispose completes.
