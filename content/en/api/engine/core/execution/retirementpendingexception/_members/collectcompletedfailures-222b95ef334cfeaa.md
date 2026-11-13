---
uid: api.222b95ef334cfeaa7166d21c2d3324848fe89e88465793af0b984503855a5556
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.CollectCompletedFailures(System.Exception,System.Collections.Generic.ICollection{System.Exception})"
source: xml
reviewed: 848131a628a34be27dd202c4369b81e95dd4a41d3ecadcc81d43d7925ae38e27
title: "CollectCompletedFailures"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Retains ordinary failure branches across pending retries without recording transient pending signals as completed work.

**Parameter `exception`:** The original exception tree reported by a retirement attempt.

**Parameter `failures`:** The owner's failure collection; existing exception instances are not added twice.

**Exception `T:System.ArgumentNullException`:** The exception or collection is null.
