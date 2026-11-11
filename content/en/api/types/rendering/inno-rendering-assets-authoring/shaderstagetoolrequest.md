---
title: "ShaderStageToolRequest"
description: "Reference for ShaderStageToolRequest in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.42985a8aa6a023e4
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderStageToolRequest`

This reference describes `ShaderStageToolRequest` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.Authoring.ShaderStageToolRequest>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6e8ab8d6f254de9c) | Method |
| [`Deconstruct`](#api-af8440c918c4fe19) | Method |
| [`Equals`](#api-d43f7f70cf68f54f) | Method |
| [`Equals`](#api-89dfab2813f2b539) | Method |
| [`GetHashCode`](#api-8a02af01a4dd1b67) | Method |
| [`op_Equality`](#api-8bc55f68f6286de0) | Method |
| [`op_Inequality`](#api-68601b46c3998101) | Method |
| [`ToString`](#api-d9029ea33fda0af6) | Method |
| [`stage`](#api-615eb78dfc3b6247) | Property |
| [`target`](#api-2e35c2fa62f1119d) | Property |

## Type declaration

<a id="api-42985a8aa6a023e4"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest a04eb6c6377dacff71cd21468608bcc8fd3cea3595e45a03aeafb5bfa908a9bd -->

```csharp
public sealed record Inno.Rendering.Assets.Authoring.ShaderStageToolRequest : System.IEquatable<Inno.Rendering.Assets.Authoring.ShaderStageToolRequest>
```

Supplies typed stage semantics and frozen source modules to a target compiler.

**Parameter `stage`:** Typed stage with target-assigned interface/resource locations.

**Parameter `target`:** Exact toolchain profile and capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `#ctor`

<a id="api-6e8ab8d6f254de9c"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.#ctor(Inno.Rendering.Shaders.ShaderIrStage,Inno.Rendering.Assets.Authoring.ShaderCompileTarget) 831eecfae4a646e78d0e0d39d57541a74297f1a66c56912d80c5f13ed0aeb4a4 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.ShaderStageToolRequest(Inno.Rendering.Shaders.ShaderIrStage stage, Inno.Rendering.Assets.Authoring.ShaderCompileTarget target)
```

Supplies typed stage semantics and frozen source modules to a target compiler.

**Parameter `stage`:** Typed stage with target-assigned interface/resource locations.

**Parameter `target`:** Exact toolchain profile and capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `Deconstruct`

<a id="api-af8440c918c4fe19"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.Deconstruct(Inno.Rendering.Shaders.ShaderIrStage@,Inno.Rendering.Assets.Authoring.ShaderCompileTarget@) 869ba76dfb1e6cd093138935aae2e8b668ef3ea866995fc5e285688388826bd0 -->

```csharp
public void Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.Deconstruct(out Inno.Rendering.Shaders.ShaderIrStage stage, out Inno.Rendering.Assets.Authoring.ShaderCompileTarget target)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `Equals`

<a id="api-d43f7f70cf68f54f"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.Equals(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest) ed0b2aa21c793bf1af7ea78a37d65fbaf1661aeb1cff183e7f92976be01ee4d5 -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.Equals(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `Equals`

<a id="api-89dfab2813f2b539"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.Equals(System.Object) b76e39be337d8aebbef8fc248ee64c6b0fad4042c56a96369f28984d61ee3b37 -->

```csharp
public override bool Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `GetHashCode`

<a id="api-8a02af01a4dd1b67"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.GetHashCode e38efe1613a90a0d81dc00be710591630cf3e2617ef0f3e57fc05629690cd0c1 -->

```csharp
public override int Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `op_Equality`

<a id="api-8bc55f68f6286de0"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.op_Equality(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest,Inno.Rendering.Assets.Authoring.ShaderStageToolRequest) 1d574fa4cf9f602acfa935d09a70872409216263a9621be2b136eb81b5b7cfec -->

```csharp
public static bool Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.operator ==(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest? left, Inno.Rendering.Assets.Authoring.ShaderStageToolRequest? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `op_Inequality`

<a id="api-68601b46c3998101"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.op_Inequality(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest,Inno.Rendering.Assets.Authoring.ShaderStageToolRequest) 59e2de7c3f7104b78c58058624163cb302f5cf4f5075d771d0de7e3c472bf4db -->

```csharp
public static bool Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.operator !=(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest? left, Inno.Rendering.Assets.Authoring.ShaderStageToolRequest? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `ToString`

<a id="api-d9029ea33fda0af6"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.ToString b11e6a33a7a766c805a21b850719253ce6b5237fcb7aad7c01ef2e0ffb712ee2 -->

```csharp
public override string Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L22).

## `stage`

<a id="api-615eb78dfc3b6247"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.stage c02f2b3f7933c259a38a5a1d9b35af8a86afb29cd448fa3b0e030d7caf47c6fe -->

```csharp
public Inno.Rendering.Shaders.ShaderIrStage Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.stage { get; init; }
```

Typed stage with target-assigned interface/resource locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L23).

## `target`

<a id="api-2e35c2fa62f1119d"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.target a6f62a1b81b8636eda6ab0312c2a5b319aa348d29a931fe4b8d233d7e09b7072 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderCompileTarget Inno.Rendering.Assets.Authoring.ShaderStageToolRequest.target { get; init; }
```

Exact toolchain profile and capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L24).
