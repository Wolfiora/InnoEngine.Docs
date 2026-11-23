---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bdd00996be51280888c59c768301858b3090ef884def6ec1df1e8d8bdaef9a17
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeDeployment.InstallAsync(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.ProductNativeBuildPlan,System.String,System.Threading.CancellationToken)
title: ProductNativeDeployment.InstallAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 16d425ecbe6bf00785a21464707d2a849d77046eadd8727cc35cab44016d7558
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `products`:** Validated runtime and optional authoring products returned by the declared product plan. All products must use the same target; each component can appear once.

**Parameter `plan`:** The explicit component closure and deployment mapping used to produce these products.

**Parameter `applicationDirectory`:** The managed output directory receiving the complete native tree.

**Parameter `cancellationToken`:** Cancels ownership acquisition or staging before the atomic installation starts.

## Returns

Completion after the complete native tree has been validated under exclusive publication ownership. Identical deployments retain their files, including libraries loaded by a running application.

## Exceptions

**Exception `T:System.ArgumentException`:** The product closure is empty, contains duplicate components or mixes targets.

**Exception `T:System.IO.IOException`:** A product cannot be validated, copied or installed; the prior native tree remains available.

**Exception `T:System.OperationCanceledException`:** The operation was canceled before installation; the previous native tree is unchanged.
