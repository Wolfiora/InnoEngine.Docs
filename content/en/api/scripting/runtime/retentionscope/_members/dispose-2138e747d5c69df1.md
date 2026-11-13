---
uid: api.2138e747d5c69df1717663e5b7395f24c3ba0a7498d9c165bf07da0667931fa4
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.RetentionScope.Dispose"
source: xml
reviewed: 543f795db5b04568cdd58d034af0df54635bb8a023d3acba4fc0742418d5db2f
title: "Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Releases all retained leases in reverse acquisition order.

**Exception `T:System.AggregateException`:** Thrown after every lease is attempted when one or more releases fail.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A lease is not retired. The current and remaining dependencies are retained for retry.
