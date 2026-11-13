---
uid: api.b2e210ef554a06fbad127ab32b2be78a0828cc70319234335096f7bff76ec3f2
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetObject.OnUnloading"
source: xml
reviewed: 4ebc676bad8542a2abd8c5c837d61c25f7dc1e2a49c03d051011028e63e825e2
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
