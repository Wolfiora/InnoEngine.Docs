---
title: "RenderShaderBindingDescriptor"
description: "Reference for RenderShaderBindingDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.348a54998b1f4826
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderShaderBindingDescriptor`

This reference describes `RenderShaderBindingDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc813beca2c5a0d5) | Method |
| [`count`](#api-3011d5c958971d73) | Property |
| [`id`](#api-51ccb511fee937c9) | Property |
| [`kind`](#api-df1bb3121d567e2f) | Property |
| [`nativeName`](#api-9bb57a7aab3d3566) | Property |
| [`slot`](#api-f71ab170eb4ac8e3) | Property |
| [`storageAccess`](#api-0432d2d1d17390d0) | Property |
| [`uniformType`](#api-1f773cfd6e1c037f) | Property |

## Type declaration

<a id="api-348a54998b1f4826"></a>
<!-- api: T:InnoEngine.Rendering.RenderShaderBindingDescriptor 13d3fbb6c91f7302d5e24d680aab0942c7854a4fb145a64da2cb3a6832097b93 -->

```csharp
public sealed class InnoEngine.Rendering.RenderShaderBindingDescriptor
```

Declares one manifest-derived shader binding used for reflection validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L71).

## `#ctor`

<a id="api-dc813beca2c5a0d5"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderBindingDescriptor.#ctor(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderShaderBindingKind,System.Int32,InnoEngine.Rendering.RenderUniformType,System.Int32,InnoEngine.Rendering.RenderStorageAccess,System.String) 35a92093bf7ed4f485761718e4435ef5a2e0f5dc5c2d8566c3c8a3cf74e4853c -->

```csharp
public InnoEngine.Rendering.RenderShaderBindingDescriptor.RenderShaderBindingDescriptor(InnoEngine.Rendering.RenderBindingId id, InnoEngine.Rendering.RenderShaderBindingKind kind, int slot = 0, InnoEngine.Rendering.RenderUniformType uniformType = InnoEngine.Rendering.RenderUniformType.Vector4, int count = 1, InnoEngine.Rendering.RenderStorageAccess storageAccess = InnoEngine.Rendering.RenderStorageAccess.Read, string? nativeName = null)
```

Creates a shader binding descriptor.

**Parameter `id`:** Stable manifest binding name.

**Parameter `kind`:** Binding domain.

**Parameter `slot`:** Backend-neutral texture or storage slot.

**Parameter `uniformType`:** Uniform shape when `kind` is Uniform.

**Parameter `count`:** Uniform array element count.

**Parameter `storageAccess`:** Storage texture or buffer access.

**Parameter `nativeName`:** Adapter-generated reflected symbol, or null when the logical ID is also the symbol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L97).

## `count`

<a id="api-3011d5c958971d73"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.count d446cd5688ea866462b4a082c971a2231535e70f160d3f00daaf301b58241ff8 -->

```csharp
public int InnoEngine.Rendering.RenderShaderBindingDescriptor.count { get; }
```

Gets uniform array element count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L152).

## `id`

<a id="api-51ccb511fee937c9"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.id c62c45b33607adf659b5f2753e727a6595e07ee227bd823a2dd2b5fd056eb0bf -->

```csharp
public InnoEngine.Rendering.RenderBindingId InnoEngine.Rendering.RenderShaderBindingDescriptor.id { get; }
```

Gets the stable manifest binding name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L132).

## `kind`

<a id="api-df1bb3121d567e2f"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.kind 4e22fb38b0641abad441cc6fe2b66b57253c99c21e3726719875de35e118b6fa -->

```csharp
public InnoEngine.Rendering.RenderShaderBindingKind InnoEngine.Rendering.RenderShaderBindingDescriptor.kind { get; }
```

Gets the binding domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L137).

## `nativeName`

<a id="api-9bb57a7aab3d3566"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.nativeName 2c30d0d578872bc8c149d7611262b0b76faca2da6c7e296c7921827e31323b0c -->

```csharp
public string InnoEngine.Rendering.RenderShaderBindingDescriptor.nativeName { get; }
```

Gets the exact adapter-generated symbol used only for reflection and native resource creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L162).

## `slot`

<a id="api-f71ab170eb4ac8e3"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.slot 91235d7e8bd5ff1c12d2a98685ef638dcd21502db9d4f194dc73ae57589a5364 -->

```csharp
public int InnoEngine.Rendering.RenderShaderBindingDescriptor.slot { get; }
```

Gets the backend-neutral texture or storage slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L142).

## `storageAccess`

<a id="api-0432d2d1d17390d0"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.storageAccess f1d9e38eea8b6af3e54b9f886108e4f51c225a4e98a923a0772716046ccd9fe3 -->

```csharp
public InnoEngine.Rendering.RenderStorageAccess InnoEngine.Rendering.RenderShaderBindingDescriptor.storageAccess { get; }
```

Gets storage texture or buffer access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L157).

## `uniformType`

<a id="api-1f773cfd6e1c037f"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderBindingDescriptor.uniformType e560f92ce919710e3f868e9976da387faec4d99f23b7b4b7922c724b193a6291 -->

```csharp
public InnoEngine.Rendering.RenderUniformType InnoEngine.Rendering.RenderShaderBindingDescriptor.uniformType { get; }
```

Gets the uniform shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L147).
