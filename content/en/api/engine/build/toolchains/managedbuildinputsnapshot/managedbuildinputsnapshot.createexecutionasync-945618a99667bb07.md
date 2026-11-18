---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.945618a99667bb072774c92dd949d32f8dc904f26f261813a50e17e5a749e3fb
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.CreateExecutionAsync(System.Threading.CancellationToken)
title: ManagedBuildInputSnapshot.CreateExecutionAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: d2397a644e43b030eb48459110e6004e60748fb966f0a94f941a1ec27af64d67
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels ownership acquisition or verified copying before execution ownership is returned.

## Returns

Caller-owned fixed execution inputs. Dispose only after all compiler and source consumers finish.

## Exceptions

**Exception `T:System.InvalidOperationException`:** An input differs from its planned bytes while being copied.

**Exception `T:System.ArgumentException`:** The project does not belong to the operation's source root.
