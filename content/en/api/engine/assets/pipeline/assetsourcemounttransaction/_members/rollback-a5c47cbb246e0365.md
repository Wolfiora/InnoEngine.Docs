---
uid: api.a5c47cbb246e0365e1c8972da543938038d07333a97e39ce2983352e1038e562
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Rollback"
source: xml
reviewed: 2e46421892375179e916607d8ef6877d0198ce5cf2cd3662c5e1b0b02dd17441
title: "Rollback"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Discards the candidate or restores the previous generation after provisional activation.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Candidate retirement exceeded its deadline; its owners remain retained until host restart.

**Exception `T:System.AggregateException`:** Compensation or completed retirement failed.
