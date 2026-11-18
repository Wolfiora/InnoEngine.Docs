---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1f027eb4fa5d001538884c16a880c5bdbeb6f02203947aee8c83bf59ac752549
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.AcquireUseAsync(System.Threading.CancellationToken)
title: BuildCachePublisher.AcquireUseAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: f2462cc9de2f7dd0e58509bcd1875475858e79ca670b613855d21d9fc81339d9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels this wait without disturbing other owners.

## Returns

Caller-owned shared activity; dispose after the final artifact reading lease is acquired.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Acquisition was canceled.
