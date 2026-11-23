---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cd22b37f868d10f7e4f83ad5b1b88d859d0d1d0dfe03d8a35289ce0258da0386
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken)
title: INativeToolchainProvider.ResolveAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 2c0f15faed6770b23f434ace73dcb48737f4758bb8f1550fda1b34402a16b561
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetID`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

## Returns

A complete immutable tool selection for the requested host and target.
