---
uid: api.b2e210ef554a06fbad127ab32b2be78a0828cc70319234335096f7bff76ec3f2
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetObject.OnUnloading"
source: xml
reviewed: 38fe02401519bfcfe2dc3b805fbbb6dbf091acd45266e79469b43a97a636ad03
title: "OnUnloading"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Releases the runtime resources owned by this asset without clearing its payload before quiescence.

## Remarks

An unfinished release may throw RetirementPendingException. The owner retains the asset and retries this hook; completed steps must not be repeated. Other failures are terminal and are reported by the owner.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work has not quiesced; runtime payload and ownership must remain intact until a later attempt.
