---
uid: api.16ef03de9b0551428c451d3a198656c50f16dda82c678cbec8c2c81f1dcbf365
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.IToolchainWorkspaceProvider.OpenAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: b5a4eb65749bb94e6813df5675f920954511ce87ee488abfaf98e191efeb587f
title: "IToolchainWorkspaceProvider.OpenAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Acquires an execution path for an absolute build-owned directory.

**Parameter `physicalPath`:** The retained physical directory.

**Parameter `cancellationToken`:** Cancellation while waiting for exclusive alias ownership.

**Returns:** A scoped path whose processes must finish before disposal.
