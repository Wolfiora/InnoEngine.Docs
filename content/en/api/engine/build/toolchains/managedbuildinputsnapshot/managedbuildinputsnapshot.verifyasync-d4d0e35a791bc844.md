---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d4d0e35a791bc8440b3d646330cbed3e34c924e2e0aa44cf469c40bc52cf6aa7
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.VerifyAsync(System.Threading.CancellationToken)
title: ManagedBuildInputSnapshot.VerifyAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 3e7750cb111ee23d6278a58cb5146a3d4ce1722628b08c0e4a49bfe4c24c37f1
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
