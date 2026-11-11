---
title: "ShellOptions"
description: "Reference for ShellOptions in Inno.Shell."
uid: api.inno.shell.bed99a73cc5af969
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `ShellOptions`

This reference describes `ShellOptions` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-674523066434881e) | Method |
| [`adapters`](#api-4305f4f63039fb0e) | Property |
| [`forceSingleThreadedRendering`](#api-71ac14ef7a417d2f) | Property |
| [`preferredGraphicsApi`](#api-4d870c93bfe078c8) | Property |
| [`sRgbBackbuffer`](#api-cb1c1e820f243c05) | Property |
| [`suspendWhenHidden`](#api-ba51a7af8496c44b) | Property |
| [`verticalSync`](#api-420638a42aad258d) | Property |
| [`window`](#api-37b58ba36bd94f41) | Property |

## Type declaration

<a id="api-bed99a73cc5af969"></a>
<!-- api: T:Inno.Shell.ShellOptions 7f09294229d2876f0310e64c1d12e8734b9f5f5b1100d03f614425e04eaff52a -->

```csharp
public sealed class Inno.Shell.ShellOptions
```

Configures backend selection and primary-window policy for a composition shell.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L10).

## `#ctor`

<a id="api-674523066434881e"></a>
<!-- api: M:Inno.Shell.ShellOptions.#ctor fc282c4b3a41d92c5e06e81103f038b918a21cf6a1d6285af2cd0cfb1f0f50fa -->

```csharp
public Inno.Shell.ShellOptions.ShellOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L10).

## `adapters`

<a id="api-4305f4f63039fb0e"></a>
<!-- api: P:Inno.Shell.ShellOptions.adapters 2f4e342ad6654d4b620ca4ccf344b068e3166634447ed16ca641777ddf93aba7 -->

```csharp
public required Inno.Adapter.AdapterSelection Inno.Shell.ShellOptions.adapters { get; set; }
```

Gets or sets the complete backend selection used by the shell and its derived product host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L15).

## `forceSingleThreadedRendering`

<a id="api-71ac14ef7a417d2f"></a>
<!-- api: P:Inno.Shell.ShellOptions.forceSingleThreadedRendering c50342b57d0907562d7fa40ae3d7882f0dc63c72243516685bca4a38581351cc -->

```csharp
public bool Inno.Shell.ShellOptions.forceSingleThreadedRendering { get; set; }
```

Gets or sets whether rendering must execute on the calling thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L40).

## `preferredGraphicsApi`

<a id="api-4d870c93bfe078c8"></a>
<!-- api: P:Inno.Shell.ShellOptions.preferredGraphicsApi 4fff705cd2406a94bf38c6420c187edae22349f4e868470cce826b92d74f1fb7 -->

```csharp
public Inno.Rendering.GraphicsApi? Inno.Shell.ShellOptions.preferredGraphicsApi { get; set; }
```

Gets or sets the preferred graphics API, or `null` for the rendering-backend default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L25).

## `sRgbBackbuffer`

<a id="api-cb1c1e820f243c05"></a>
<!-- api: P:Inno.Shell.ShellOptions.sRgbBackbuffer 3a5b314b2c444d5b2175ab77b30e59683a632a7317c160d46f46fa1038f6794b -->

```csharp
public bool Inno.Shell.ShellOptions.sRgbBackbuffer { get; set; }
```

Gets or sets whether the primary backbuffer performs sRGB encoding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L35).

## `suspendWhenHidden`

<a id="api-ba51a7af8496c44b"></a>
<!-- api: P:Inno.Shell.ShellOptions.suspendWhenHidden 98635edc53be5a472b2f829567f5e3f0c8698bea47692bab898e334140e8c56e -->

```csharp
public bool Inno.Shell.ShellOptions.suspendWhenHidden { get; set; }
```

Gets or sets whether hiding or minimizing the primary window suspends product frames.
Application suspension always stops frames independently of this window policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L46).

## `verticalSync`

<a id="api-420638a42aad258d"></a>
<!-- api: P:Inno.Shell.ShellOptions.verticalSync 3c1caa5bdfd2b03e5b85c017e13d11c0df463cde98ca5d7924cb5af14ec0f7a1 -->

```csharp
public bool Inno.Shell.ShellOptions.verticalSync { get; set; }
```

Gets or sets whether presentation waits for display synchronization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L30).

## `window`

<a id="api-37b58ba36bd94f41"></a>
<!-- api: P:Inno.Shell.ShellOptions.window 74217cb34bcd13d5be1c8dc2008e0e19e1d2e38bcd7d486393c627d4fbd1e7b1 -->

```csharp
public Inno.Platform.PlatformWindowOptions Inno.Shell.ShellOptions.window { get; set; }
```

Gets or sets primary-window creation options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellOptions.cs#L20).
