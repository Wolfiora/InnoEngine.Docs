---
title: "GameBuildTargetBinding"
description: "Reference for GameBuildTargetBinding in Inno.Build."
uid: api.inno.build.5a3cef1c43b18a6f
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `GameBuildTargetBinding`

This reference describes `GameBuildTargetBinding` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-277682f347dbffdc) | Method |
| [`compiler`](#api-79f4c5a40c626734) | Property |
| [`packager`](#api-4183e1a1b6e16cf2) | Property |

## Type declaration

<a id="api-5a3cef1c43b18a6f"></a>
<!-- api: T:Inno.Build.GameBuildTargetBinding c0eea9db0f7c82b1c9753260546966b70dccad20039ea9de8c261886ebbdc369 -->

```csharp
public sealed class Inno.Build.GameBuildTargetBinding
```

Binds independent packaging and content implementations for one publication target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildTargetBinding.cs#L8).

## `#ctor`

<a id="api-277682f347dbffdc"></a>
<!-- api: M:Inno.Build.GameBuildTargetBinding.#ctor(Inno.Build.IGameBuildTarget,Inno.Build.IGameContentCompiler) bebcc3f9c0a0db0d7152bc2d201d5ee0eeda886d7b370b65c6b708651078e75e -->

```csharp
public Inno.Build.GameBuildTargetBinding.GameBuildTargetBinding(Inno.Build.IGameBuildTarget packager, Inno.Build.IGameContentCompiler compiler)
```

Validates a complete binding without starting tools or taking ownership of services.

**Parameter `packager`:** The borrowed platform packaging implementation.

**Parameter `compiler`:** The borrowed content implementation for the same target and authoring generation.

**Throws `System.ArgumentNullException`:** Either implementation is null.

**Throws `System.ArgumentException`:** A target is unassigned or the two implementation identities disagree.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildTargetBinding.cs#L25).

## `compiler`

<a id="api-79f4c5a40c626734"></a>
<!-- api: P:Inno.Build.GameBuildTargetBinding.compiler 33cadfbe3f178709bee52d36cdabb86044a1d093b8a71d3fdc77e0cb72408033 -->

```csharp
public Inno.Build.IGameContentCompiler Inno.Build.GameBuildTargetBinding.compiler { get; }
```

Gets the content implementation borrowing this pipeline's authoring generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildTargetBinding.cs#L45).

## `packager`

<a id="api-4183e1a1b6e16cf2"></a>
<!-- api: P:Inno.Build.GameBuildTargetBinding.packager 47c06ffd37563de5555b453dc231f4aacb707b9acbcc677728bdc96e8d31b829 -->

```csharp
public Inno.Build.IGameBuildTarget Inno.Build.GameBuildTargetBinding.packager { get; }
```

Gets the platform implementation responsible for layout and Support Pack validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/GameBuildTargetBinding.cs#L40).
