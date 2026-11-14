---
uid: api.c72603743cef82e4a2ff881c8407b914b9a4a4fd253b05f219d0f7485a868fbb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.PhysicalToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: edd830c023799eff92899ee770f6a27f0aa2b6584595c645c641807f1209433d
title: "PhysicalToolchainWorkspaceProvider.OpenAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.
