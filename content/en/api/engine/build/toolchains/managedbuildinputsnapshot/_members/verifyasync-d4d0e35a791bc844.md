---
uid: api.d4d0e35a791bc8440b3d646330cbed3e34c924e2e0aa44cf469c40bc52cf6aa7
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildInputSnapshot.VerifyAsync(System.Threading.CancellationToken)"
source: xml
reviewed: f61bb7e472635949a83ec2f50c08ed21eebd88386d697de8d9da4ae67fb5e2aa
title: "VerifyAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Re-evaluates the graph and re-reads its current bytes in a fresh verification phase.

**Parameter `cancellationToken`:** Cancels evaluation and verification without changing any published output.

**Returns:** Completion when the complete current input identity still matches this snapshot.

**Exception `T:System.InvalidOperationException`:** The graph, SDK, source, resource, analyzer or reference inputs changed.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
