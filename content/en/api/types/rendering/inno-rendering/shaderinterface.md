---
title: "ShaderInterface"
description: "Reference for ShaderInterface in Inno.Rendering."
uid: api.inno.rendering.408a27bfdf1fa1dc
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderInterface`

This reference describes `ShaderInterface` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2763838bab4a7c61) | Method |
| [`bindings`](#api-6759b5c89282c586) | Property |

## Type declaration

<a id="api-408a27bfdf1fa1dc"></a>
<!-- api: T:Inno.Rendering.ShaderInterface 4d5878c736123930ce66aa320d0552fc2cd7b00892d219d6fe71b4a48ffc333b -->

```csharp
public sealed class Inno.Rendering.ShaderInterface
```

Stores the manifest-derived binding contract verified after backend program creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterface.cs#L10).

## `#ctor`

<a id="api-2763838bab4a7c61"></a>
<!-- api: M:Inno.Rendering.ShaderInterface.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Rendering.ShaderInterfaceBinding}) 64e2e14cced7f71e58503f7c37ada93aba59a59b556eb4bd18226dc693695e3a -->

```csharp
public Inno.Rendering.ShaderInterface.ShaderInterface(System.Collections.Generic.IReadOnlyList<Inno.Rendering.ShaderInterfaceBinding> bindings)
```

Creates a shader interface contract.

**Parameter `bindings`:** Stable expected bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterface.cs#L18).

## `bindings`

<a id="api-6759b5c89282c586"></a>
<!-- api: P:Inno.Rendering.ShaderInterface.bindings ef2a9df3502f09a9f1678598b055cf46f93e77f46cf60bfbcc78a0559576d9f4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.ShaderInterfaceBinding> Inno.Rendering.ShaderInterface.bindings { get; }
```

Gets stable expected bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterface.cs#L27).
