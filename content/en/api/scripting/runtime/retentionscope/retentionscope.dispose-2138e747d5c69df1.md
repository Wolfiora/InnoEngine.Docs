---
uid: api.2138e747d5c69df1717663e5b7395f24c3ba0a7498d9c165bf07da0667931fa4
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.RetentionScope.Dispose"
source: xml
reviewed: 5fc2cc5857ed31d46e311dfabfb9d69d35651b92b0ef4cfa1f6b1321752f7f59
title: "RetentionScope.Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Releases all retained leases in reverse acquisition order.

**Exception `T:System.AggregateException`:** Thrown after every lease is attempted when one or more releases fail.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A lease is not retired. The current and remaining dependencies are retained for retry.
