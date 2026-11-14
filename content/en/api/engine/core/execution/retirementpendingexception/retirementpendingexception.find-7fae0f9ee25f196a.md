---
uid: api.7fae0f9ee25f196a5eca985421d4adb0c0c5cda5b35e929ffad57c8de6053aac
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementPendingException.Find(System.Exception)"
source: xml
reviewed: 1ee24d035f222b13d8fc48de49c4b8d8526f097e53479b47baf0553ef5f57b6b
title: "RetirementPendingException.Find"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Finds unfinished retirement in an exception tree without discarding its contextual or sibling failures.

## Parameters

**Parameter `exception`:** The exception to classify, including aggregate and ordinary inner-exception wrappers.

## Returns

A nested timeout when present, otherwise the first pending signal, or null when retirement is not pending. Callers must propagate and retain the original exception rather than replacing it with this classification.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The exception is null.
