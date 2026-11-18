---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7fae0f9ee25f196a5eca985421d4adb0c0c5cda5b35e929ffad57c8de6053aac
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.Find(System.Exception)
title: RetirementPendingException.Find
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: 6b67b509f4dc59c1e021c6dc811ce08096ebbf83977e4f57145a0e486143829f
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
