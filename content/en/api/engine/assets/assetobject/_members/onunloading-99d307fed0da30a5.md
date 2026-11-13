---
uid: api.99d307fed0da30a530a9341adc6048f3e8b5725ef1a2df7b46611a30089fdfe2
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetObject.OnUnloading"
source: xml
reviewed: ea38aa5a3d81eab7ea92a94ec223d2ccd9e2118c4337181f3fea7e27da86d400
title: "OnUnloading"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Releases the runtime resources owned by this asset without clearing its payload before quiescence.

## Remarks

An unfinished release may throw RetirementPendingException. The owner retains the asset and retries this hook; completed steps must not be repeated. Other failures are terminal and are reported by the owner.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work has not quiesced; runtime payload and ownership must remain intact until a later attempt.
