---
title: "ShaderInterfaceBinding"
description: "Reference for ShaderInterfaceBinding in Inno.Rendering."
uid: api.inno.rendering.38e14519b5ba12b5
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderInterfaceBinding`

This reference describes `ShaderInterfaceBinding` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cd9861614fb8d8d1) | Method |
| [`arrayCount`](#api-f2c76fb455cfc638) | Property |
| [`bindingKind`](#api-921bafa68ba1fea5) | Property |
| [`id`](#api-971651446b1675ed) | Property |
| [`location`](#api-0f71ffb3713fc0b9) | Property |
| [`nativeName`](#api-328ac9d9cc01bf18) | Property |
| [`stages`](#api-338f006d5cdde17c) | Property |
| [`storageAccess`](#api-ca858e78db33a575) | Property |
| [`type`](#api-04a26c7b26e1ded1) | Property |

## Type declaration

<a id="api-38e14519b5ba12b5"></a>
<!-- api: T:Inno.Rendering.ShaderInterfaceBinding 8b361bd85a4f9ee22ccdb22a0edf520ee8580afbd437420710238593c0f3538f -->

```csharp
public sealed class Inno.Rendering.ShaderInterfaceBinding
```

Describes one reflected material binding expected by compiled programs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L10).

## `#ctor`

<a id="api-cd9861614fb8d8d1"></a>
<!-- api: M:Inno.Rendering.ShaderInterfaceBinding.#ctor(Inno.Rendering.ShaderPropertyId,Inno.Rendering.ShaderPropertyType,Inno.Rendering.ShaderStage,System.Int32,Inno.Rendering.ShaderPropertyBindingKind,Inno.Rendering.RenderStorageAccess,System.String,System.Nullable{System.Int32}) 6159447ab0e95a29481692070fb55a0744e23fc260886ee57fdaa433c9ca965b -->

```csharp
public Inno.Rendering.ShaderInterfaceBinding.ShaderInterfaceBinding(Inno.Rendering.ShaderPropertyId id, Inno.Rendering.ShaderPropertyType type, Inno.Rendering.ShaderStage stages, int arrayCount = 1, Inno.Rendering.ShaderPropertyBindingKind bindingKind = Inno.Rendering.ShaderPropertyBindingKind.Uniform, Inno.Rendering.RenderStorageAccess storageAccess = Inno.Rendering.RenderStorageAccess.Read, string? nativeName = null, int? location = null)
```

Creates a reflected interface binding.

**Parameter `id`:** Stable property ID.

**Parameter `type`:** Expected value or resource type.

**Parameter `stages`:** Stages that consume the binding.

**Parameter `arrayCount`:** Required array element count.

**Parameter `bindingKind`:** Backend-neutral interface binding domain.

**Parameter `storageAccess`:** Required access for storage resources.

**Parameter `nativeName`:** Adapter-generated reflected symbol, or null when the logical ID is also the symbol.

**Parameter `location`:** Explicit resource slot, or null when the caller assigns an ordered layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L39).

## `arrayCount`

<a id="api-f2c76fb455cfc638"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.arrayCount 790e2eae8d4cbd2afd93c4871208994ec0bb5302d5ba926ce0b0d1628a27097c -->

```csharp
public int Inno.Rendering.ShaderInterfaceBinding.arrayCount { get; }
```

Gets the required array element count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L85).

## `bindingKind`

<a id="api-921bafa68ba1fea5"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.bindingKind 87189d70d8f38624236b79fad4cad0285c53fb264093d0f2731668b781bd0c33 -->

```csharp
public Inno.Rendering.ShaderPropertyBindingKind Inno.Rendering.ShaderInterfaceBinding.bindingKind { get; }
```

Gets the backend-neutral interface binding domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L90).

## `id`

<a id="api-971651446b1675ed"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.id 3e7851cf115da1b066be2ddc8ace5ebcc29ac0c560d145dbb4d2063398fd57c9 -->

```csharp
public Inno.Rendering.ShaderPropertyId Inno.Rendering.ShaderInterfaceBinding.id { get; }
```

Gets the stable property ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L70).

## `location`

<a id="api-0f71ffb3713fc0b9"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.location e87e8a38bb0a65d623402d0484248f0be75d24e856bb6532ed2bfbafbac94442 -->

```csharp
public int? Inno.Rendering.ShaderInterfaceBinding.location { get; }
```

Gets an explicitly compiled resource slot, or null for a caller-assigned layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L104).

## `nativeName`

<a id="api-328ac9d9cc01bf18"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.nativeName 9116da7c7fcd7887f78a13ab09a9eac5c49b5a0daf089f185302a15ce89036f2 -->

```csharp
public string Inno.Rendering.ShaderInterfaceBinding.nativeName { get; }
```

Gets the exact reflected symbol emitted by the adapter, distinct from the logical property ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L100).

## `stages`

<a id="api-338f006d5cdde17c"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.stages 8f7e8e46273e9a66b8d82f0e46a1d30e8eadc561f9c6dce9b6ff3178ddc5da3b -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.ShaderInterfaceBinding.stages { get; }
```

Gets stages that consume the binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L80).

## `storageAccess`

<a id="api-ca858e78db33a575"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.storageAccess 1531ffbbed01effbb3965f6b5f23e627e8d6c7383177fc65bf7d796ae25a539d -->

```csharp
public Inno.Rendering.RenderStorageAccess Inno.Rendering.ShaderInterfaceBinding.storageAccess { get; }
```

Gets required access for storage resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L95).

## `type`

<a id="api-04a26c7b26e1ded1"></a>
<!-- api: P:Inno.Rendering.ShaderInterfaceBinding.type 8f219f550871d053e9b6d3d5efb04712bddd6058c741a8f994cee64a45a2f5e1 -->

```csharp
public Inno.Rendering.ShaderPropertyType Inno.Rendering.ShaderInterfaceBinding.type { get; }
```

Gets the expected value or resource type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L75).
