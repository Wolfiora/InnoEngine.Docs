---
title: "BgfxNativeBuild"
description: "Reference for BgfxNativeBuild in Inno.Build.Toolchains.Bgfx."
uid: api.inno.build.toolchains.bgfx.54ac13d3ef1e7671
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx
---
# `BgfxNativeBuild`

This reference describes `BgfxNativeBuild` in `Inno.Build.Toolchains.Bgfx`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-f35b349aab2aee01) | Method |
| [`CreateRecipe`](#api-68ea1e1acbccfc81) | Method |
| [`componentDescriptor`](#api-c5727f867ca09580) | Property |

## Type declaration

<a id="api-54ac13d3ef1e7671"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.BgfxNativeBuild bd39a7e683d89fa28429822112db4b51c28c45e8eaf0bbf8664c70c72f53fb22 -->

```csharp
public static class Inno.Build.Toolchains.Bgfx.BgfxNativeBuild
```

Publishes pinned graphics runtime libraries from an isolated source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuild.cs#L10).

## `BuildAsync`

<a id="api-f35b349aab2aee01"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxNativeBuild.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Threading.CancellationToken) f83583fc113706e3738f7682ec6fe87ebe9cf902b668e64a404ffe42963620d3 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.Bgfx.BgfxNativeBuild.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds and installs graphics artifacts using explicit platform-owned SDK configuration.

**Parameter `context`:** The checkout and configuration whose sources and outputs belong to this operation.

**Throws `System.ArgumentException`:** The configuration is not debug or release.

**Throws `System.InvalidOperationException`:** A native build process fails.

**Parameter `profile`:** The platform-owned project generation, SDK invocation and output selection.

**Parameter `cancellationToken`:** Cancels child processes and prevents artifact installation after cancellation.

**Returns:** The validated product with an exact graphics library or offline-tool output closure.

**Throws `System.OperationCanceledException`:** The operation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuild.cs#L49).

## `CreateRecipe`

<a id="api-68ea1e1acbccfc81"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxNativeBuild.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile) 361cabf88a937b156b72a12cb477d66ade2a0147fd234afe792df8d319e5811e -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.Bgfx.BgfxNativeBuild.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile)
```

Freezes runtime source, selected tools and profile arguments without generating or compiling.

**Parameter `context`:** The operation with an explicit SDK target and shared component options.

**Parameter `profile`:** The borrowed immutable integration profile supplying tools, invocation and output layout.

**Returns:** The same source declaration consumed by the runtime producer, without selected binding output.

**Throws `System.ArgumentNullException`:** The context or profile is null.

**Throws `System.ArgumentException`:** The profile target or required arguments are invalid.

**Throws `System.InvalidOperationException`:** SDK tools or component options have not been selected.

**Throws `System.NotSupportedException`:** The request uses unsupported linkage or component CMake options.

**Throws `System.IO.IOException`:** A selected tool, build owner or required source checkout is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuild.cs#L82).

## `componentDescriptor`

<a id="api-c5727f867ca09580"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxNativeBuild.componentDescriptor 34362a03da536396f21026f677a9d2b0fc8bb7eb5ae68c3b3a8bb5ec236f2b42 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.Bgfx.BgfxNativeBuild.componentDescriptor { get; }
```

Gets the unique native and recipe owners used for sources and target-scoped intermediates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuild.cs#L15).
