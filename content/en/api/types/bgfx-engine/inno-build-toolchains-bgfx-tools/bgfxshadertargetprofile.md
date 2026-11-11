---
title: "BgfxShaderTargetProfile"
description: "Reference for BgfxShaderTargetProfile in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.7e8fa095fbed9d67
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxShaderTargetProfile`

This reference describes `BgfxShaderTargetProfile` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c09c7980570c53b0) | Method |
| [`Resolve`](#api-c720bdf8d276b5c2) | Method |
| [`id`](#api-58ef23b04eb1380c) | Property |

## Type declaration

<a id="api-7e8fa095fbed9d67"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile 102c5c2c9e018a6e7c92f40d1acccdc2f65b5a4a08e44787bba9c9b2b20d6735 -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile
```

Binds an open target identity to immutable renderer profiles without a backend-owned platform list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderTargetProfile.cs#L11).

## `#ctor`

<a id="api-c09c7980570c53b0"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile.#ctor(System.String,System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile}) df2965b89b44729172c6eafb3863feee53bfb51fb5efd4b9a90280feae6af624 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile.BgfxShaderTargetProfile(string id, System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile> renderers)
```

Freezes the renderer configuration contributed by the platform.

**Parameter `id`:** The open stable target identity.

**Parameter `renderers`:** One immutable profile per supported graphics API.

**Throws `System.ArgumentException`:** The identity, renderer collection or a renderer entry is empty or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderTargetProfile.cs#L27).

## `Resolve`

<a id="api-c720bdf8d276b5c2"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile.Resolve(Inno.Rendering.GraphicsApi) da87f42b09131b7039ae15650ccc15fb5b2ed64a859ea2e8f840e7aba600f507 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile.Resolve(Inno.Rendering.GraphicsApi backend)
```

Resolves renderer configuration without choosing a platform or executing tools.

**Parameter `backend`:** The explicit graphics API.

**Returns:** The borrowed immutable profile; unsupported APIs fail explicitly.

**Throws `System.NotSupportedException`:** The target has no configuration for this API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderTargetProfile.cs#L60).

## `id`

<a id="api-58ef23b04eb1380c"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile.id 69f41037efe4b177b120d6bb5238066f049422b6aa9f4475d328df596e4c8366 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile.id { get; }
```

Gets the explicit stable target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderTargetProfile.cs#L46).
