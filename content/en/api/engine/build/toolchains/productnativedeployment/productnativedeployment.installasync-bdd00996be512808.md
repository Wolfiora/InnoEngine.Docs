---
uid: api.bdd00996be51280888c59c768301858b3090ef884def6ec1df1e8d8bdaef9a17
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeDeployment.InstallAsync(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.ProductNativeBuildPlan,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: f0d2c62273ab48090adc257712047db8883bfcbeb7169e4fb80da247ca50b9f1
title: "ProductNativeDeployment.InstallAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Validates the application's native tree and atomically replaces it when its exact contents differ.

**Parameter `products`:** Validated runtime and optional authoring products returned by the declared product plan. All products must use the same target; each component can appear once.

**Parameter `cancellationToken`:** Cancels ownership acquisition or staging before the atomic installation starts.

**Returns:** Completion after the complete native tree has been validated under exclusive publication ownership. Identical deployments retain their files, including libraries loaded by a running application.

**Parameter `plan`:** The explicit component closure and deployment mapping used to produce these products.

**Parameter `applicationDirectory`:** The managed output directory receiving the complete native tree.

**Exception `T:System.ArgumentException`:** The product closure is empty, contains duplicate components or mixes targets.

**Exception `T:System.IO.IOException`:** A product cannot be validated, copied or installed; the prior native tree remains available.

**Exception `T:System.OperationCanceledException`:** The operation was canceled before installation; the previous native tree is unchanged.
