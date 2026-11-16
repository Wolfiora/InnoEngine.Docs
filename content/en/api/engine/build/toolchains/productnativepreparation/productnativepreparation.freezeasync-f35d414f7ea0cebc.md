---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f35d414f7ea0cebca1fa7616ba0b441ecea7bf764683508d6017a859202d18b7
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativePreparation.FreezeAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)
title: ProductNativePreparation.FreezeAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: f77b893980cfd73ac08d88fd47e2c35d28cf74feb4c909d0781e369caff2deb1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The operation with its selected toolchain and binding generator.

**Parameter `plan`:** The complete product closure; recipe declarations remain ordered.

**Parameter `cancellationToken`:** Cancels source, generator and SDK input capture before preparation starts.

## Returns

A content identity for the frozen request. Consumers still verify freshness after acquiring reading protection.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The toolchain or recipe ownership is incomplete.
