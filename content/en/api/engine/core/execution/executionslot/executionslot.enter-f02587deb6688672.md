---
uid: api.f02587deb668867210048d02a0020f6f8965e95555cc56b5a1c489b67ee300e9
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.ExecutionSlot\u00601.Enter(\u00600,System.Boolean)"
source: xml
reviewed: 83ed1ee66b678744d389155c76bd5e4c80ce75cc7593b56793ad00e0084760f3
title: "ExecutionSlot\u003CTValue\u003E.Enter"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Binds a value until the returned scope is retired in strict last-in-first-out order.

## Parameters

**Parameter `value`:** The service or value owned by the enclosing lifetime.

**Parameter `threadAffine`:** Whether access and retirement require the entering thread.

## Returns

A scope that revokes inherited bindings and clears their strong references on retirement.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The value is null.
