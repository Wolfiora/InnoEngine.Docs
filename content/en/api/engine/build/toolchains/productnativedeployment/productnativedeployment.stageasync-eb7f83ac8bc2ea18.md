---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.eb7f83ac8bc2ea189e0f5bb5198980be0e21ea9f74ce7fdcd2a379b0a7fe5cff
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeDeployment.StageAsync(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.ProductNativeBuildPlan,System.String,System.Threading.CancellationToken)
title: ProductNativeDeployment.StageAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 8cbbc00b0736dc320f67dc0cb6d7b7216f6a8e4200330026adc19d15b825d775
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `products`:** The pinned, validated products to copy into the candidate.

**Parameter `plan`:** The explicit component layout and neutral deployment metadata.

**Parameter `applicationDirectory`:** An existing caller-owned candidate with no native subtree.

**Parameter `cancellationToken`:** Cancels copying or final input verification before the caller publishes.

## Returns

Completion after copying and verifying payload, without creating transaction metadata in the candidate.

## Remarks

The caller must retain exclusive ownership and discard the entire candidate on failure or cancellation. This operation neither selects a publication nor replaces an existing native tree.

## Exceptions

**Exception `T:System.ArgumentException`:** The product closure or candidate path is invalid.

**Exception `T:System.IO.DirectoryNotFoundException`:** The caller has not created its owned candidate.

**Exception `T:System.IO.IOException`:** The native tree already exists, or an input cannot be verified or copied.

**Exception `T:System.OperationCanceledException`:** Cancellation prevents completing the unpublished candidate.
