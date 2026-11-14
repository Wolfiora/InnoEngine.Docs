---
uid: api.a5c47cbb246e0365e1c8972da543938038d07333a97e39ce2983352e1038e562
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Rollback"
source: xml
reviewed: 7a869c4c1c779ed73bb972b1961e8c30322354625eae44c851578eee36000cf1
title: "AssetSourceMountTransaction.Rollback"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Discards the candidate or restores the previous generation after provisional activation.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Candidate retirement exceeded its deadline; its owners remain retained until host restart.

**Exception `T:System.AggregateException`:** Compensation or completed retirement failed.
