---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.67e777c654fefd5d25ea5d4a86790a1dae729e479f4df2a21cfa553a80c81cef
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeDependencyManifest.ExportAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.ProductNativeBuildResult,System.String,System.Threading.CancellationToken)
title: NativeDependencyManifest.ExportAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 36ee15ff6e3a83aa36271d3c40f528478c0ddf8036993a2ac4c5dab62e3ca3e6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The producer's frozen source and toolchain context.

**Parameter `plan`:** The product definition used by the producer.

**Parameter `products`:** The complete borrowed result, in plan order.

**Parameter `outputDirectory`:** An explicit checkout-owned export directory.

**Parameter `cancellationToken`:** Cancels unpublished export work.

## Returns

The complete selection fragment path; publishing the fragment remains the caller's responsibility.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The source, product closure or exported payload is inconsistent.
