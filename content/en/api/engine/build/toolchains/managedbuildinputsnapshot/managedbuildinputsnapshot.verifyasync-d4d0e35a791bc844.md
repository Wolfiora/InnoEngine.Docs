---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d4d0e35a791bc8440b3d646330cbed3e34c924e2e0aa44cf469c40bc52cf6aa7
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.VerifyAsync(System.Threading.CancellationToken)
title: ManagedBuildInputSnapshot.VerifyAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 7a1e9e1b9e8b6e32a9bf381d3c1fd2b6b4c5b2a1dc7e31d0ed9d165754ed0ef9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels evaluation and verification without changing any published output.

## Returns

Completion when the complete current input identity still matches this snapshot.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The graph, SDK, source, resource, analyzer or reference inputs changed.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
