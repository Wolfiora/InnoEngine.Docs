---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9254a438f3931368b11a96248be6945758b96a33ec70b42778aa4f702a796477
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativePreparation.TryAcquireAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.String[][],System.String,System.Threading.CancellationToken)
title: ProductNativePreparation.TryAcquireAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: e7a70282621b222945e0c769ca28b9cc093cbd6d987a2ee079d3183c7f0b82b7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The consumer operation with its own selected SDK and statistics.

**Parameter `plan`:** The consumer's current complete product declaration.

**Parameter `rows`:** Neutral data captured by a successful preparation in the same root build.

**Parameter `requestIdentity`:** The captured request identity, recomputed from current source, generator, SDK and recipe inputs after acquiring protection.

**Parameter `cancellationToken`:** Cancels acquisition or hashing; partial reading protection is always released.

## Returns

An independently owned result, or null when inputs, membership or immutable publications no longer match. Null requires normal preparation; it is never evidence that a native build passed.

## Exceptions

**Exception `T:System.OperationCanceledException`:** The consumer cancels before completing its reading protection.
