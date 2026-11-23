---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9d8e8f91440cd8d781133b9191a09ec8732788e9c462030cdeae60d6d810661c
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.Attach
title: RuntimeSubsystem.Attach
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: 0392aa79a1c539d29d74a28991b25e93ef0e46266d13aa257e12255046a67e29
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** The subsystem is already started.

## Remarks

The caller must own this instance before attachment. Failed attachment stops admission but leaves partial resources with that owner, which must drive Dispose through any pending retirement.
