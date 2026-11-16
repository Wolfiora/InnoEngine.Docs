---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f02587deb668867210048d02a0020f6f8965e95555cc56b5a1c489b67ee300e9
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.ExecutionSlot`1.Enter(`0,System.Boolean)
title: ExecutionSlot<TValue>.Enter
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 418eecffd2a559c8675aed335ac581f3531506050bd09f55b9ff36fabd67337a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The service or value owned by the enclosing lifetime.

**Parameter `threadAffine`:** Whether access and retirement require the entering thread.

## Returns

A scope that revokes inherited bindings and clears their strong references on retirement.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The value is null.
