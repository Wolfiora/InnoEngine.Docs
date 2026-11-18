---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9d8e8f91440cd8d781133b9191a09ec8732788e9c462030cdeae60d6d810661c
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.Attach
title: RuntimeSubsystem.Attach
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: c9ccbaa5b6334e4e9aac87ff5608c239c5686e7d6eeb64ef78ff80b56e9e177c
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
