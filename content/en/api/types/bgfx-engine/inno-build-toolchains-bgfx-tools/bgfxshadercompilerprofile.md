---
title: "BgfxShaderCompilerProfile"
description: "Reference for BgfxShaderCompilerProfile in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.a56475f1d023b63d
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxShaderCompilerProfile`

This reference describes `BgfxShaderCompilerProfile` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-999a6bef93189438) | Method |
| [`capabilities`](#api-df7d188f5f86c509) | Property |
| [`computeProfile`](#api-7b3e08863dbfe92f) | Property |
| [`defines`](#api-f2a4ebcf92e083ef) | Property |
| [`fragmentProfile`](#api-33bd191d6a2446b8) | Property |
| [`key`](#api-0d5b91811b46929b) | Property |
| [`shadercPlatform`](#api-ad479c39ae115073) | Property |
| [`vertexProfile`](#api-a25fdb7b13b80ceb) | Property |

## Type declaration

<a id="api-a56475f1d023b63d"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile 1f8a1309a21e105e72e10c386d79a3f3eea491d25269751a96fc9581bd29461e -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile
```

Freezes one renderer's vendor dialect, capability facts and semantic compiler defines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L14).

## `#ctor`

<a id="api-999a6bef93189438"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.#ctor(Inno.Rendering.GraphicsCapabilities,System.String,System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String}) 4612cd4b7a574b0d7d27a44d826c80a93bd081f940960319186fbe9019886cbe -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.BgfxShaderCompilerProfile(Inno.Rendering.GraphicsCapabilities capabilities, string shadercPlatform, string vertexProfile, string fragmentProfile, string computeProfile, System.Collections.Generic.IEnumerable<string>? defines = null)
```

Validates and snapshots platform-supplied compiler inputs.

**Parameter `capabilities`:** The immutable target capabilities.

**Parameter `shadercPlatform`:** The explicit vendor platform argument.

**Parameter `vertexProfile`:** The vertex shader dialect.

**Parameter `fragmentProfile`:** The fragment shader dialect.

**Parameter `computeProfile`:** The compute dialect, or empty when compute is unsupported.

**Parameter `defines`:** Optional ordered defines; copied on construction.

**Throws `System.ArgumentException`:** A required string is blank, a define is null, or the compute declaration disagrees with capabilities.

**Throws `System.ArgumentNullException`:** Capabilities are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L43).

## `capabilities`

<a id="api-df7d188f5f86c509"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.capabilities 246826a47d2ff4494f7a0e419e8a791dbb86b82dd68a1cbdc7a4a097fd366d5f -->

```csharp
public Inno.Rendering.GraphicsCapabilities Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.capabilities { get; }
```

Gets the immutable offline validation capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L72).

## `computeProfile`

<a id="api-7b3e08863dbfe92f"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.computeProfile 164d78d2461cf51b9915728e67a3f3b78115795dc3e374b51966c4c72e1d5ca9 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.computeProfile { get; }
```

Gets the compute dialect, or an empty string when compute is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L92).

## `defines`

<a id="api-f2a4ebcf92e083ef"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.defines 767306fa45970b85f1049b115294835b871c4e95c0aea009e8d5ea3479fe5759 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.defines { get; }
```

Gets immutable ordered compiler defines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L97).

## `fragmentProfile`

<a id="api-33bd191d6a2446b8"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.fragmentProfile 5be66e599ce2b82c12060879ff647578af99cb4aa772d260b5240dd77069aa21 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.fragmentProfile { get; }
```

Gets the fragment stage dialect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L87).

## `key`

<a id="api-0d5b91811b46929b"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.key c41c65a3b3ec143c62ddc32872ddd88aba4e3869d9ab3ec494055a512126259e -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.key { get; }
```

Gets a deterministic identity covering dialects, defines and offline capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L102).

## `shadercPlatform`

<a id="api-ad479c39ae115073"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.shadercPlatform 179b26ad319a0d0785bf2f28a8244bdc9f0a9b70e58d540a2782b07ba06e3129 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.shadercPlatform { get; }
```

Gets the vendor shader compiler platform argument.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L77).

## `vertexProfile`

<a id="api-a25fdb7b13b80ceb"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.vertexProfile 3b695f264402c933cc47324de25e726b94af660e9944e579fcc4315ba957d958 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderCompilerProfile.vertexProfile { get; }
```

Gets the vertex stage dialect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShaderCompilerProfile.cs#L82).
