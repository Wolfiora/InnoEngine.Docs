---
title: "ProductNativeDeployment"
description: "Reference for ProductNativeDeployment in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.b9cfd86e155acd97
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ProductNativeDeployment`

This reference describes `ProductNativeDeployment` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`InstallAsync`](#api-c64e95e4bfa11106) | Method |
| [`StageAsync`](#api-1a5bcf43bb6e913c) | Method |

## Type declaration

<a id="api-b9cfd86e155acd97"></a>
<!-- api: T:Inno.Build.Toolchains.ProductNativeDeployment 95cb50603652521bf3afebd2e7e8b71ea77480de5aae1965f7d4fae7de03a908 -->

```csharp
public static class Inno.Build.Toolchains.ProductNativeDeployment
```

Materializes an explicitly built host-native closure into one application's deployment directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeDeployment.cs#L15).

## `InstallAsync`

<a id="api-c64e95e4bfa11106"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativeDeployment.InstallAsync(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.ProductNativeBuildPlan,System.String,System.Threading.CancellationToken) 3f373195124da411dbd3cf591face1ecd2a0eee5ba73e8d10ef9188476f94749 -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.Build.Toolchains.ProductNativeDeployment.InstallAsync(System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct> products, Inno.Build.Toolchains.ProductNativeBuildPlan plan, string applicationDirectory, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Validates the application's native tree and atomically replaces it when its exact contents differ.

**Parameter `products`:** Validated runtime and optional authoring products returned by the declared product plan.
All products must use the same target; each component can appear once.

**Parameter `cancellationToken`:** Cancels ownership acquisition or staging before the atomic installation starts.

**Returns:** Completion after the complete native tree has been validated under exclusive publication ownership.
Identical deployments retain their files, including libraries loaded by a running application.

**Parameter `plan`:** The explicit component closure and deployment mapping used to produce these products.

**Parameter `applicationDirectory`:** The managed output directory receiving the complete native tree.

**Throws `System.ArgumentException`:** The product closure is empty, contains duplicate components or mixes targets.

**Throws `System.IO.IOException`:** A product cannot be validated, copied or installed; the prior native tree remains available.

**Throws `System.OperationCanceledException`:** The operation was canceled before installation; the previous native tree is unchanged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeDeployment.cs#L46).

## `StageAsync`

<a id="api-1a5bcf43bb6e913c"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativeDeployment.StageAsync(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.ProductNativeBuildPlan,System.String,System.Threading.CancellationToken) 68b05953e025f5cbb80ceedb5de82e6cc0707db9760e466f5d93b7b9e5112a85 -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.Build.Toolchains.ProductNativeDeployment.StageAsync(System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct> products, Inno.Build.Toolchains.ProductNativeBuildPlan plan, string applicationDirectory, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Writes a new native tree into an unpublished candidate exclusively owned by the caller.

**Parameter `products`:** The pinned, validated products to copy into the candidate.

**Parameter `plan`:** The explicit component layout and neutral deployment metadata.

**Parameter `applicationDirectory`:** An existing caller-owned candidate with no native subtree.

**Parameter `cancellationToken`:** Cancels copying or final input verification before the caller publishes.

**Returns:** Completion after copying and verifying payload, without creating transaction metadata in the candidate.

**Constraints:** The caller must retain exclusive ownership and discard the entire candidate on failure or cancellation.
This operation neither selects a publication nor replaces an existing native tree.

**Throws `System.ArgumentException`:** The product closure or candidate path is invalid.

**Throws `System.IO.DirectoryNotFoundException`:** The caller has not created its owned candidate.

**Throws `System.IO.IOException`:** The native tree already exists, or an input cannot be verified or copied.

**Throws `System.OperationCanceledException`:** Cancellation prevents completing the unpublished candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeDeployment.cs#L87).
