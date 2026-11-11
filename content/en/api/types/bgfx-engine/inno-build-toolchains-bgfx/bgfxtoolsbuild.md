---
title: "BgfxToolsBuild"
description: "Reference for BgfxToolsBuild in Inno.Build.Toolchains.Bgfx."
uid: api.inno.build.toolchains.bgfx.a955502f9aa2326f
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx
---
# `BgfxToolsBuild`

This reference describes `BgfxToolsBuild` in `Inno.Build.Toolchains.Bgfx`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-663da76f35a46ed2) | Method |
| [`CreateRecipe`](#api-505f57b2e0891049) | Method |
| [`componentDescriptor`](#api-64b190f9999d7be2) | Property |

## Type declaration

<a id="api-a955502f9aa2326f"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.BgfxToolsBuild f6805e97f161dcd8ac82a8a6ad772b81726a8935ce8ee71d8e1b335a1ccff605 -->

```csharp
public static class Inno.Build.Toolchains.Bgfx.BgfxToolsBuild
```

Publishes pinned graphics tools from an isolated source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxToolsBuild.cs#L10).

## `BuildAsync`

<a id="api-663da76f35a46ed2"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxToolsBuild.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Threading.CancellationToken) ff01bf15a9d27e5554694fdcb7545d8d5996bdfd388c2ed89c7a220aca934904 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.Bgfx.BgfxToolsBuild.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds and installs graphics artifacts using explicit platform-owned SDK configuration.

**Parameter `context`:** The checkout and configuration whose sources and outputs belong to this operation.

**Throws `System.ArgumentException`:** The configuration is not debug or release.

**Throws `System.InvalidOperationException`:** A native build process fails.

**Parameter `profile`:** The platform-owned project generation, SDK invocation and output selection.

**Parameter `cancellationToken`:** Cancels child processes and prevents artifact installation after cancellation.

**Returns:** The validated product with an exact graphics library or offline-tool output closure.

**Throws `System.OperationCanceledException`:** The operation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxToolsBuild.cs#L44).

## `CreateRecipe`

<a id="api-505f57b2e0891049"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxToolsBuild.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile) de96d99179b260f766cf2c49462bab5a81e706dee7cce450fa09416991a1dafe -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.Bgfx.BgfxToolsBuild.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile)
```

Freezes offline-tool source, selected tools and profile arguments without compiling.

**Parameter `context`:** The operation with an explicit SDK target and shared component options.

**Parameter `profile`:** The borrowed immutable integration profile supplying tools, invocation and output layout.

**Returns:** The same source declaration consumed by the offline-tool producer, without selected binding output.

**Throws `System.ArgumentNullException`:** The context or profile is null.

**Throws `System.ArgumentException`:** The profile target or required arguments are invalid.

**Throws `System.InvalidOperationException`:** SDK tools or component options have not been selected.

**Throws `System.NotSupportedException`:** The request uses unsupported linkage or component CMake options.

**Throws `System.IO.IOException`:** A selected tool, build owner or required source checkout is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxToolsBuild.cs#L77).

## `componentDescriptor`

<a id="api-64b190f9999d7be2"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxToolsBuild.componentDescriptor 1a18c6af79e7e8bffa0ca57ab3e4a9224725e71b217fa5213fdb0f65f91d4776 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.Bgfx.BgfxToolsBuild.componentDescriptor { get; }
```

Gets the offline-tool producer sharing BGFX source and recipe owners without consuming runtime bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxToolsBuild.cs#L15).
