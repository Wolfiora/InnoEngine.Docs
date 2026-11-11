---
title: "ProductNativePreparation"
description: "Reference for ProductNativePreparation in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.57cadae337155dca
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ProductNativePreparation`

This reference describes `ProductNativePreparation` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-4fa4ea4c182f7184) | Method |
| [`FreezeAsync`](#api-2f837cb27f8c55b8) | Method |
| [`TryAcquireAsync`](#api-35c4887130147370) | Method |

## Type declaration

<a id="api-57cadae337155dca"></a>
<!-- api: T:Inno.Build.Toolchains.ProductNativePreparation 70d9105cbdf791c2b87ceb8bebbe0e9c90882b7a23174ededd45087aca29a0a9 -->

```csharp
public static class Inno.Build.Toolchains.ProductNativePreparation
```

Transfers completed native preparation across private task loads using neutral data and independent consumer leases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativePreparation.cs#L14).

## `Capture`

<a id="api-4fa4ea4c182f7184"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativePreparation.Capture(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.ProductNativeBuildResult,System.String) 16f8422ba8f05ed588a00cf1de13d03cac8a3e7e01cb810af951af338d4eedb2 -->

```csharp
public static string[][]? Inno.Build.Toolchains.ProductNativePreparation.Capture(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan plan, Inno.Build.Toolchains.ProductNativeBuildResult products, string requestIdentity)
```

Captures successful immutable publications and the content inputs actually read during their preparation.

**Parameter `context`:** The completed operation, whose recorded input hashes are still owned by this preparation.

**Parameter `plan`:** The matching declaration-order product plan.

**Parameter `products`:** The live successful result, retained until the neutral capture finishes.

**Parameter `requestIdentity`:** The identity returned by freezing this operation before preparation.

**Returns:** BCL-only rows suitable for the MSBuild build-lifetime registry, or null for an aggregate or unowned binding publication.
The rows contain no leases, delegates, plugin objects or private assembly types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativePreparation.cs#L86).

## `FreezeAsync`

<a id="api-2f837cb27f8c55b8"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativePreparation.FreezeAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken) 1f9c78f6949ad63810b4fdb2be8c1ae66c96d576029b12b73a6ba89487e19ba7 -->

```csharp
public static System.Threading.Tasks.Task<string> Inno.Build.Toolchains.ProductNativePreparation.FreezeAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan plan, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Identifies the explicitly selected recipe, SDK, configuration and component request before preparation.

**Parameter `context`:** The operation with its selected toolchain and binding generator.

**Parameter `plan`:** The complete product closure; recipe declarations remain ordered.

**Parameter `cancellationToken`:** Cancels source, generator and SDK input capture before preparation starts.

**Returns:** A content identity for the frozen request. Consumers still verify freshness after acquiring reading protection.

**Throws `System.InvalidOperationException`:** The toolchain or recipe ownership is incomplete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativePreparation.cs#L34).

## `TryAcquireAsync`

<a id="api-35c4887130147370"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativePreparation.TryAcquireAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.String[][],System.String,System.Threading.CancellationToken) ff10e3a2521861ecffabeb17794fa7ff22bb05c0882d302517d4c2774c3de270 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.ProductNativeBuildResult?> Inno.Build.Toolchains.ProductNativePreparation.TryAcquireAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan plan, string[][] rows, string requestIdentity, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Acquires a new consumer's complete reading protection and verifies mutable inputs after acquisition.

**Parameter `context`:** The consumer operation with its own selected SDK and statistics.

**Parameter `plan`:** The consumer's current complete product declaration.

**Parameter `rows`:** Neutral data captured by a successful preparation in the same root build.

**Parameter `requestIdentity`:** The captured request identity, recomputed from current source, generator, SDK and recipe inputs after acquiring protection.

**Parameter `cancellationToken`:** Cancels acquisition or hashing; partial reading protection is always released.

**Returns:** An independently owned result, or null when inputs, membership or immutable publications no longer match.
Null requires normal preparation; it is never evidence that a native build passed.

**Throws `System.OperationCanceledException`:** The consumer cancels before completing its reading protection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativePreparation.cs#L141).
