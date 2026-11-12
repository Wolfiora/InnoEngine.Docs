---
title: "ShaderInterfaceBinding"
description: "Reference for ShaderInterfaceBinding in Inno.Rendering."
uid: api.inno.rendering.runtime-script.c0c721b356632d60
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderInterfaceBinding`

This reference describes `ShaderInterfaceBinding` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cef673d42d341a49) | Method |
| [`arrayCount`](#api-31c1bb9abfbf0b7e) | Property |
| [`bindingKind`](#api-0ca0e0eafdba31e6) | Property |
| [`id`](#api-a21bb35915911fb3) | Property |
| [`location`](#api-0b32b2a6d7151b6a) | Property |
| [`nativeName`](#api-b6cad61ea086c111) | Property |
| [`stages`](#api-aba2f313cfeaf244) | Property |
| [`storageAccess`](#api-38655a5dcb06ac06) | Property |
| [`type`](#api-7f7e13593b211a69) | Property |

## Type declaration

<a id="api-c0c721b356632d60"></a>
<!-- api: T:InnoEngine.Rendering.ShaderInterfaceBinding b793067374717dab1b6004479437f24b86c75328649ca940c8b2c91821c5e9c2 -->

```csharp
public sealed class InnoEngine.Rendering.ShaderInterfaceBinding
```

Describes one reflected material binding expected by compiled programs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L10).

## `#ctor`

<a id="api-cef673d42d341a49"></a>
<!-- api: M:InnoEngine.Rendering.ShaderInterfaceBinding.#ctor(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.ShaderStage,System.Int32,InnoEngine.Rendering.ShaderPropertyBindingKind,InnoEngine.Rendering.RenderStorageAccess,System.String,System.Nullable{System.Int32}) 7beff9b406d8046bfbb83cc39b4ad40833cceb4d5f0116a83069ce3c1075e6f3 -->

```csharp
public InnoEngine.Rendering.ShaderInterfaceBinding.ShaderInterfaceBinding(InnoEngine.Rendering.ShaderPropertyId id, InnoEngine.Rendering.ShaderPropertyType type, InnoEngine.Rendering.ShaderStage stages, int arrayCount = 1, InnoEngine.Rendering.ShaderPropertyBindingKind bindingKind = InnoEngine.Rendering.ShaderPropertyBindingKind.Uniform, InnoEngine.Rendering.RenderStorageAccess storageAccess = InnoEngine.Rendering.RenderStorageAccess.Read, string? nativeName = null, int? location = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L39).

## `arrayCount`

<a id="api-31c1bb9abfbf0b7e"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.arrayCount b54409b4a5ae9fbb2a393587f9ea4f00200cb389ee89337048f782e878d4f959 -->

```csharp
public int InnoEngine.Rendering.ShaderInterfaceBinding.arrayCount { get; }
```

Gets the required array element count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L85).

## `bindingKind`

<a id="api-0ca0e0eafdba31e6"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.bindingKind 2f942b614024d45dbbd95a393a3c5cb8fb1657eea6daebbba51072c33fd86c77 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyBindingKind InnoEngine.Rendering.ShaderInterfaceBinding.bindingKind { get; }
```

Gets the backend-neutral interface binding domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L90).

## `id`

<a id="api-a21bb35915911fb3"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.id 0fb3e575867bdd5f1a63fffcece0fa04f47fc9fbaa36a1d5e6fd48844c0d9687 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyId InnoEngine.Rendering.ShaderInterfaceBinding.id { get; }
```

Gets the stable property ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L70).

## `location`

<a id="api-0b32b2a6d7151b6a"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.location 4c70c99d7561458055a657f5cea4f87352f0b4e75820f775de145aaac0f17dae -->

```csharp
public int? InnoEngine.Rendering.ShaderInterfaceBinding.location { get; }
```

Gets an explicitly compiled resource slot, or null for a caller-assigned layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L104).

## `nativeName`

<a id="api-b6cad61ea086c111"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.nativeName fe01022b8a2637a9f126246d8fb32f8c3dbefd9768cc31739ad62933a9047fed -->

```csharp
public string InnoEngine.Rendering.ShaderInterfaceBinding.nativeName { get; }
```

Gets the exact reflected symbol emitted by the adapter, distinct from the logical property ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L100).

## `stages`

<a id="api-aba2f313cfeaf244"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.stages 750dfad0d1ca40250250b958f3b41474838776657eb1153752463abc689ca402 -->

```csharp
public InnoEngine.Rendering.ShaderStage InnoEngine.Rendering.ShaderInterfaceBinding.stages { get; }
```

Gets stages that consume the binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L80).

## `storageAccess`

<a id="api-38655a5dcb06ac06"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.storageAccess 05e657b1aca7c092c591a7aa0480f307350bae4c9dc43db8870aced6ebad9cbf -->

```csharp
public InnoEngine.Rendering.RenderStorageAccess InnoEngine.Rendering.ShaderInterfaceBinding.storageAccess { get; }
```

Gets required access for storage resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L95).

## `type`

<a id="api-7f7e13593b211a69"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterfaceBinding.type 60c6e1f409f58a297c6da9aa4a150e8fdb879e7faec915c6650787f2b06657b8 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyType InnoEngine.Rendering.ShaderInterfaceBinding.type { get; }
```

Gets the expected value or resource type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterfaceBinding.cs#L75).
