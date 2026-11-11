---
title: "ShaderCompileTarget"
description: "Reference for ShaderCompileTarget in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.1e10eae297692102
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderCompileTarget`

This reference describes `ShaderCompileTarget` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63bde4a9be730b80) | Method |
| [`capabilities`](#api-bb40b18e75037063) | Property |
| [`debugInformation`](#api-8907df8e46ac01ef) | Property |
| [`key`](#api-1fa37e54acef5e4c) | Property |
| [`optimize`](#api-be6f91cfe95a094a) | Property |
| [`profileKey`](#api-9fa8e3a2c955c82d) | Property |

## Type declaration

<a id="api-1e10eae297692102"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderCompileTarget f3972c45d8aedf9210338c927a8deed2bee1978e0467bdf364dac430977141d7 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderCompileTarget
```

Selects one renderer profile and compilation policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L16).

## `#ctor`

<a id="api-63bde4a9be730b80"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompileTarget.#ctor(System.String,Inno.Rendering.GraphicsCapabilities,System.Boolean,System.Boolean) 748c45f7eef7832d23e2faa7dd2b185125241c1f75a39d2b96c3c6d97fa55043 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderCompileTarget.ShaderCompileTarget(string profileKey, Inno.Rendering.GraphicsCapabilities capabilities, bool optimize = true, bool debugInformation = false)
```

Creates a shader compilation target.

**Parameter `profileKey`:** Backend compiler-owned stable profile key.

**Parameter `capabilities`:** Target renderer capabilities.

**Parameter `optimize`:** Whether release optimization is enabled.

**Parameter `debugInformation`:** Whether shader debug information is emitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L33).

## `capabilities`

<a id="api-bb40b18e75037063"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompileTarget.capabilities e5ce2caab97e4f14e33948f46a5995b044b82b29cde43723de3788d6c280e1e5 -->

```csharp
public Inno.Rendering.GraphicsCapabilities Inno.Rendering.Assets.Authoring.ShaderCompileTarget.capabilities { get; }
```

Gets target renderer capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L55).

## `debugInformation`

<a id="api-8907df8e46ac01ef"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompileTarget.debugInformation 37fe9f1d3e5c00753b8305a1ccb23051f89fd6a06e75415dcd58ee0a7616180a -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderCompileTarget.debugInformation { get; }
```

Gets whether shader debug information is emitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L65).

## `key`

<a id="api-1fa37e54acef5e4c"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompileTarget.key 67b6ff49a0c09fa5fa750bb014444859b8adb56d16342c68e1f475ef1af89f48 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderCompileTarget.key { get; }
```

Gets a stable target cache-key fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L70).

## `optimize`

<a id="api-be6f91cfe95a094a"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompileTarget.optimize 20c751b3c11214374859ffdf41b87676e0a9c0745c6b68a674c54b4938752a31 -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderCompileTarget.optimize { get; }
```

Gets whether release optimization is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L60).

## `profileKey`

<a id="api-9fa8e3a2c955c82d"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompileTarget.profileKey e69db5b6db7809e179fb70a37139b6e428ac5125aa84b01e25ee96dd640c2437 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderCompileTarget.profileKey { get; }
```

Gets the backend compiler-owned stable profile key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L50).
