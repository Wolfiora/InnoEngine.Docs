---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.99d307fed0da30a530a9341adc6048f3e8b5725ef1a2df7b46611a30089fdfe2
symbol: engine:Inno.Assets:M:Inno.Assets.AssetObject.OnUnloading
title: AssetObject.OnUnloading
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: ecf10fd71269f1054214f6f785719f6df76bca7af7c51d43dd9c862fc16f74b4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

An unfinished release may throw RetirementPendingException. The owner retains the asset and retries this hook; completed steps must not be repeated. Other failures are terminal and are reported by the owner.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work has not quiesced; runtime payload and ownership must remain intact until a later attempt.
