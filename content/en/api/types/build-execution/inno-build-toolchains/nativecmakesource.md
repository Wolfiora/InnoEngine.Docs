---
title: "NativeCMakeSource"
description: "Reference for NativeCMakeSource in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.d9fa0b8902b5f133
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeCMakeSource`

This reference describes `NativeCMakeSource` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ResolveDefinition`](#api-afaed240fc979c85) | Method |
| [`ResolvePath`](#api-da50fbeb6e6bfef6) | Method |
| [`root`](#api-6cde2b2962e0164c) | Property |

## Type declaration

<a id="api-d9fa0b8902b5f133"></a>
<!-- api: T:Inno.Build.Toolchains.NativeCMakeSource eeabb4ba20c529561e1227b21b7aea3403c8dfdf7e48cdc52a441d75d788c19f -->

```csharp
public sealed class Inno.Build.Toolchains.NativeCMakeSource
```

Describes copied recipe inputs owned by one cold CMake producer.
External SDK locations remain assigned to the frozen toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeSource.cs#L15).

## `ResolveDefinition`

<a id="api-afaed240fc979c85"></a>
<!-- api: M:Inno.Build.Toolchains.NativeCMakeSource.ResolveDefinition(System.String) d9a718286745f173ec9657a32cf653bd86e61b0473a243e14913f49012ef43e7 -->

```csharp
public string Inno.Build.Toolchains.NativeCMakeSource.ResolveDefinition(string argument)
```

Resolves declared input paths in one CMake definition without redirecting output or SDK locations.

**Parameter `argument`:** An ordered CMake argument; definition values may contain semicolon-separated paths.

**Returns:** The definition with known input paths redirected, or the original nondefinition argument.

**Throws `System.ArgumentNullException`:** The argument is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeSource.cs#L94).

## `ResolvePath`

<a id="api-da50fbeb6e6bfef6"></a>
<!-- api: M:Inno.Build.Toolchains.NativeCMakeSource.ResolvePath(System.String) a9a815f64ab62742a584713d2ae3946a3a6870da97c551600b3fc1af00dce3c6 -->

```csharp
public string Inno.Build.Toolchains.NativeCMakeSource.ResolvePath(string path)
```

Resolves a declared checkout or selected binding input to its copied counterpart.

**Parameter `path`:** An absolute recipe input path. External SDK paths retain their original location.

**Returns:** The copied checkout or binding input, or the unchanged external SDK location.

**Throws `System.ArgumentException`:** The path is empty or relative.

**Throws `System.InvalidOperationException`:** A checkout or selected binding path was not declared by the recipe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeSource.cs#L69).

## `root`

<a id="api-6cde2b2962e0164c"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCMakeSource.root 50d0675807caf2b679ef33090e2f3739e7157d394aef6872de97f7ba9c6a8d33 -->

```csharp
public string Inno.Build.Toolchains.NativeCMakeSource.root { get; }
```

Gets the isolated source root; this is neither the checkout nor an output installation directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCMakeSource.cs#L52).
