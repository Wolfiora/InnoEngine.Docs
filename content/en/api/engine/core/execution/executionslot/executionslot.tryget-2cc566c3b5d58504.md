---
uid: api.2cc566c3b5d585049cdfbe1b1bb061f2574addf4885072dbe70000ef1921d6af
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.ExecutionSlot\u00601.TryGet(\u00600@)"
source: xml
reviewed: fbd23639021e8b8f7b6c10fc4c01336c806de86801b8c8d5979d9583e8f47f98
title: "ExecutionSlot\u003CTValue\u003E.TryGet"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Tries to read the current binding without falling through an expired child scope.

## Parameters

**Parameter `value`:** Receives the live value, or the default value when access is unavailable.

## Returns

Whether a live binding is available on this thread.
