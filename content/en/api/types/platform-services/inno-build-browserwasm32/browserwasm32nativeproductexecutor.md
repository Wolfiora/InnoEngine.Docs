---
title: "BrowserWasm32NativeProductExecutor"
description: "Reference for BrowserWasm32NativeProductExecutor in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.d1e6a5565df7cba2
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `BrowserWasm32NativeProductExecutor`

This reference describes `BrowserWasm32NativeProductExecutor` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.INativeProductExecutor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e6992957f664c515) | Method |
| [`BuildAsync`](#api-3e128d296e76ca9c) | Method |
| [`componentDescriptor`](#api-b53eb8ec2e4d3e69) | Property |

## Type declaration

<a id="api-d1e6a5565df7cba2"></a>
<!-- api: T:Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor 062bc26e5fd5f31575edbedbe3428e6bc9230e23828e9eedcd116f41006c9e1e -->

```csharp
public sealed class Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor : Inno.Build.Toolchains.INativeProductExecutor
```

Aggregates explicitly selected backend static recipes using a frozen Emscripten SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Native/BrowserWasm32NativeProductExecutor.cs#L15).

## `#ctor`

<a id="api-e6992957f664c515"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.#ctor ab6d835861dba46131ca186f3718fc897508ac114a81ab6b8584590a8a1ed135 -->

```csharp
public Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.BrowserWasm32NativeProductExecutor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Native/BrowserWasm32NativeProductExecutor.cs#L15).

## `BuildAsync`

<a id="api-3e128d296e76ca9c"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken) 468ceed0d37295c43a824eefb64bc0ee20aed1c06d9a291e30b599714e2da652 -->

```csharp
public System.Threading.Tasks.Task<Inno.Build.Toolchains.ProductNativeBuildResult> Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan plan, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Publishes one exact static closure without discovering components or reselecting tools.

**Parameter `context`:** The owned checkout and previously resolved Emscripten selection.

**Parameter `plan`:** The frozen product component graph with backend-owned static definitions.

**Parameter `cancellationToken`:** Cancels generation and drains active compilation before returning.

**Returns:** The immutable complete native closure and corresponding managed binding selection.

**Throws `System.InvalidOperationException`:** The tools, target or static component capability are incompatible.

**Throws `System.IO.InvalidDataException`:** A component produces an incomplete or foreign archive closure.

**Throws `System.OperationCanceledException`:** Preparation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Native/BrowserWasm32NativeProductExecutor.cs#L49).

## `componentDescriptor`

<a id="api-b53eb8ec2e4d3e69"></a>
<!-- api: P:Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.componentDescriptor 43044b0e0c86aeac4a4b024151656d8baf7a05c6ea5b1001cd616a5a02153717 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.BrowserWasm32.BrowserWasm32NativeProductExecutor.componentDescriptor { get; }
```

Gets the sole owner of Browser aggregation, ABI constraints and SDK link support.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Native/BrowserWasm32NativeProductExecutor.cs#L20).
