---
uid: api.bd0756905ef425a1e016a5134af2b42d39dcf5b255241171441fa411c21304e4
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHost.Dispose"
source: xml
reviewed: 160f0f89738b63225bfc28517956a17eb42d59251b018ed3be1c3dbb67d3674f
title: "EngineHost.Dispose"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Disposes every owned session before releasing application metadata services.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining, or a generation deadline failed. Dependencies remain owned.
