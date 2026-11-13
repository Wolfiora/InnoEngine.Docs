---
uid: api.bd0756905ef425a1e016a5134af2b42d39dcf5b255241171441fa411c21304e4
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHost.Dispose"
source: xml
reviewed: 81f5bc1c8e674b316e3694d8b2bc7f9d22daac003c80bc7d390015c0d32d9422
title: "Dispose"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Disposes every owned session before releasing application metadata services.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining, or a generation deadline failed. Dependencies remain owned.
