---
uid: api.9d8e8f91440cd8d781133b9191a09ec8732788e9c462030cdeae60d6d810661c
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.Attach"
source: xml
reviewed: 416a28e988feb8f7ffaf7db5037133b20d0cbab4e11982d4f6d2caa4584cba9e
title: "Attach"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Acquires session resources after every dependency has attached.

## Remarks

The caller must own this instance before attachment. Failed attachment stops admission but leaves partial resources with that owner, which must drive Dispose through any pending retirement.

**Exception `T:System.InvalidOperationException`:** The subsystem is already started.
