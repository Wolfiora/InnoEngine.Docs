---
uid: api.595daafa75c2ed3a266c3d869facf220c933a8688ee37d5316a0389d65b7f434
symbol: "engine:Inno.Build.Windows.Host:M:Inno.Build.Windows.Host.WindowsToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 2990686702fb64b14d4cf2e106fc427d693ce43e373935f39b3d6e6e5033c2ee
title: "OpenAsync"
kind: api
owners: [Inno.Build.Windows.Host]
apiSurface: source-clr
---

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.
