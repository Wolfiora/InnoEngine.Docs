---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cd22b37f868d10f7e4f83ad5b1b88d859d0d1d0dfe03d8a35289ce0258da0386
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken)
title: INativeToolchainProvider.ResolveAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 43ec4b154b8838ff1012a11e4ceb44cf8e65d13a2ce72da7016bf952cda64c52
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

## Returns

A complete immutable tool selection for the requested host and target.
