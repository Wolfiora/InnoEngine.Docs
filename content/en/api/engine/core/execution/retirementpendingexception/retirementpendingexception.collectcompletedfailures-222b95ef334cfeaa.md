---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.222b95ef334cfeaa7166d21c2d3324848fe89e88465793af0b984503855a5556
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.CollectCompletedFailures(System.Exception,System.Collections.Generic.ICollection{System.Exception})
title: RetirementPendingException.CollectCompletedFailures
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 210dd8f9b570ccfd7242715249f0b1e4eb8f1e9a52030e2a7453a49de8048105
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `exception`:** The original exception tree reported by a retirement attempt.

**Parameter `failures`:** The owner's failure collection; existing exception instances are not added twice.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The exception or collection is null.
