---
uid: api.16ef03de9b0551428c451d3a198656c50f16dda82c678cbec8c2c81f1dcbf365
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.IToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: e148e789e864c60fa96e31e9a6f13230ad758ca15eb6cdf26bb343b3d908a28c
title: "OpenAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.
