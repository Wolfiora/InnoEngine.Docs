---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.87cf43e2af9fb31cc4d52e15780698e8bd3d932ad97fb167e7ed42c823c37b31
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.RunAsync``1(System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask{``0}},System.Threading.CancellationToken)
title: LifetimeScope.RunAsync
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: a2072cda1440d5213137e286d5c522bdbed54584dfddfba1c5cf6b60d3d88519

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TResult`:** The operation result type.

## Parameters

**Parameter `operation`:** The operation, which must observe the supplied token and must not require owner-thread completion.

**Parameter `cancellationToken`:** Additional cancellation requested by the caller.

## Returns

The tracked result, cancellation or operation failure.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Retirement has begun or work capacity is exhausted; the operation is not invoked.
