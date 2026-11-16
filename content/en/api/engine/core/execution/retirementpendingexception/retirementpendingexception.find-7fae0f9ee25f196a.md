---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7fae0f9ee25f196a5eca985421d4adb0c0c5cda5b35e929ffad57c8de6053aac
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.Find(System.Exception)
title: RetirementPendingException.Find
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: b531e5f84e75f3cbb8956cfacfac0f88b7deab7b85eb719932235a6cae8d8a77
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `exception`:** The exception to classify, including aggregate and ordinary inner-exception wrappers.

## Returns

A nested timeout when present, otherwise the first pending signal, or null when retirement is not pending. Callers must propagate and retain the original exception rather than replacing it with this classification.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The exception is null.
