---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7e95912ade19c07605f95c0b7556510ed27f9e2dbc175db8cda560a3ddd9196c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeDependencyManifest.AcquireAsync(System.String,System.String,System.String,System.String,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)
title: NativeDependencyManifest.AcquireAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 224b9718f25a35d4b2617297bfeb22d1fbccca8ab9d762fbd0161e879e943ade
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The consuming source checkout.

**Parameter `selectionPath`:** The exact dependency selection file.

**Parameter `target`:** The requested native target, independent of the host.

**Parameter `configuration`:** The requested debug or release configuration.

**Parameter `plan`:** The current product's declared component closure.

**Parameter `cancellationToken`:** Cancels acquisition and releases acquired readers.

## Returns

Owned products and bindings protected by the existing artifact leases.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The selection is missing, ambiguous, stale or damaged.

**Exception `T:System.IO.IOException`:** Required dependency assets or source inputs are unavailable.
