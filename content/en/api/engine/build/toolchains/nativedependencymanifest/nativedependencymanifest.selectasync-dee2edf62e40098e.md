---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dee2edf62e40098e168621425bb4408ac2e27e68828fc3cfea85720015a4d38c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeDependencyManifest.SelectAsync(System.String,System.String,System.String,System.String,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken)
title: NativeDependencyManifest.SelectAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 9cfca339464bfe54dfbe000eafac686940229bae274fe29a83cffb3ab9523661
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The current consuming checkout.

**Parameter `selectionPath`:** The repository's exact dependency selection file.

**Parameter `target`:** The explicit requested target.

**Parameter `configuration`:** The normalized debug or release configuration.

**Parameter `plan`:** The current composition's dependency closure.

**Parameter `cancellationToken`:** Cancels source verification.

## Returns

The distinct exact assets required for consumption; no downloads or compilation occur.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The selection is incomplete, ambiguous, or stale.

**Exception `T:System.IO.IOException`:** The selection or source checkout cannot be read.
