---
uid: api.1bb3befe94633bfc2c013e722e72ab835152112525c66e5efe391a955a5b7c3e
symbol: "engine:Inno.Build.WindowsX64:M:Inno.Build.WindowsX64.WindowsX64NativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 230396125a9a0893fc9c6d47f1d28e0445f9219d0979a310b3029237279f6682
title: "ResolveAsync"
kind: api
owners: [Inno.Build.WindowsX64]
apiSurface: source-clr
---

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.
