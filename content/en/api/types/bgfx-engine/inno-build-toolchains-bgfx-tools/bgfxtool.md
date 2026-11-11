---
title: "BgfxTool"
description: "Reference for BgfxTool in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.7915d2f0694eace1
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxTool`

This reference describes `BgfxTool` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Geometryc`](#api-609aee0d8dbeda4c) | Field |
| [`Geometryv`](#api-3155dab9a986ac7a) | Field |
| [`Shaderc`](#api-e5776f1f813b51b3) | Field |
| [`Texturec`](#api-57fed15c3dbd1ddc) | Field |
| [`Texturev`](#api-2d8813184007e242) | Field |

## Type declaration

<a id="api-7915d2f0694eace1"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxTool 972ebfac61384cc9872a948470c008eb893bbb2386dc80a1927a6a3d7be32ca6 -->

```csharp
public enum Inno.Build.Toolchains.Bgfx.Tools.BgfxTool : int
```

Known bgfx tool executables.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/BgfxTool.cs#L6).

## `Geometryc`

<a id="api-609aee0d8dbeda4c"></a>
<!-- api: F:Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Geometryc a11dc0d171494b49394360cc1a6a3b502d675821b4fb651fb28b41b8fa695ded -->

```csharp
Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Geometryc = 1
```

Geometry compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/BgfxTool.cs#L15).

## `Geometryv`

<a id="api-3155dab9a986ac7a"></a>
<!-- api: F:Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Geometryv 07b0fa8f1d6134564392135ccb975f0bdbdd462c8ee320c6beaf0f7893c481a8 -->

```csharp
Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Geometryv = 2
```

Geometry validator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/BgfxTool.cs#L19).

## `Shaderc`

<a id="api-e5776f1f813b51b3"></a>
<!-- api: F:Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Shaderc 4d0f8b5a806cd683ca640e27cec6b15f6be6952df0d3ca998a8112e515c53502 -->

```csharp
Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Shaderc = 0
```

Shader compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/BgfxTool.cs#L11).

## `Texturec`

<a id="api-57fed15c3dbd1ddc"></a>
<!-- api: F:Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Texturec 5aeb4f19681c478750f4f25f9db570d7b12b7e3cca55a0edf2cd87c0e70bbee9 -->

```csharp
Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Texturec = 3
```

Texture compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/BgfxTool.cs#L23).

## `Texturev`

<a id="api-2d8813184007e242"></a>
<!-- api: F:Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Texturev 749032bc95d9d600c5f05d56871641dcc085cd1fa8c13a34b46a74b533f64076 -->

```csharp
Inno.Build.Toolchains.Bgfx.Tools.BgfxTool.Texturev = 4
```

Texture validator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Execution/BgfxTool.cs#L27).
