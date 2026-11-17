---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d8e8f91440cd8d781133b9191a09ec8732788e9c462030cdeae60d6d810661c
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.Attach
title: RuntimeSubsystem.Attach
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
reviewed: fdf225261aa5b15b4f9cb4d1a366e734438d4f28eb093480de9bbd7d35331fc7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The caller must own this instance before attachment. Failed attachment stops admission but leaves partial resources with that owner, which must drive Dispose through any pending retirement.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The subsystem is already started.
