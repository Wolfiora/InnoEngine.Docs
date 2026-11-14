---
uid: api.92083d85b93d71997c089d135d645afee929a7d1b8e38d5542470608d1fd4d81
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Complete"
source: xml
reviewed: fd71428aca95337c57a88efe7823f6a6ed4fed77c37263e8010bf092cd00d1d5
title: "AssetSourceMountTransaction.Complete"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Commits an activated candidate, notifies observers, and retires the previous generation.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement exceeded its deadline. Both generations remain owned and the host must restart.

**Exception `T:System.AggregateException`:** Publication or completed retirement failed; the host generation gate is faulted.
