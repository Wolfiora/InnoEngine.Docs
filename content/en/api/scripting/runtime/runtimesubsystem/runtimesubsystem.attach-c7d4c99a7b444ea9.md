---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c7d4c99a7b444ea9d60ad12e5bbbd5a128705599940c6e2288a645fe412df208
symbol: scripting:Inno.Runtime.Contracts:M:InnoEngine.Runtime.RuntimeSubsystem.Attach
title: RuntimeSubsystem.Attach
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: editor-script
sourceFingerprint: d70e6d3f5ec0f91bd30d4096aff1d310e25fbaa2d99a20cf74a1951f43457981
apiScope: Runtime
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
