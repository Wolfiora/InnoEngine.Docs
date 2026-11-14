---
uid: api.99d307fed0da30a530a9341adc6048f3e8b5725ef1a2df7b46611a30089fdfe2
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetObject.OnUnloading"
source: xml
reviewed: 527750e6fa4628d5fcfaf451678d2a129b136be063b2419c26940d5564861573
title: "AssetObject.OnUnloading"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Releases the runtime resources owned by this asset without clearing its payload before quiescence.

## Remarks

An unfinished release may throw RetirementPendingException. The owner retains the asset and retries this hook; completed steps must not be repeated. Other failures are terminal and are reported by the owner.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work has not quiesced; runtime payload and ownership must remain intact until a later attempt.
