---
uid: api.cd22b37f868d10f7e4f83ad5b1b88d859d0d1d0dfe03d8a35289ce0258da0386
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 9a6760dbbe8a6d3d24c02736ce4559c6eab498e228412e58a38db83f6ff4565c
title: "ResolveAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.
