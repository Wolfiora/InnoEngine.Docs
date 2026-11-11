---
title: "ShaderGraphInputSettings"
description: "Reference for ShaderGraphInputSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.0d7ad70ea7477e75
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphInputSettings`

This reference describes `ShaderGraphInputSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e6f8d6203949985b) | Method |
| [`CreateBinding`](#api-ae04e5459407d00c) | Method |
| [`id`](#api-16127808bcb96137) | Property |
| [`kind`](#api-ae3990185d8ab25d) | Property |
| [`location`](#api-804e0f214c064dc2) | Property |
| [`semantic`](#api-2bdb36b6f511affe) | Property |
| [`type`](#api-818fe8cdd37424d9) | Property |

## Type declaration

<a id="api-0d7ad70ea7477e75"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphInputSettings 1ab855558f628eb3445aa815da6816bdc629900e9212f7e9bda9b25f1b1520c1 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphInputSettings : Inno.Core.Serialization.ISerializable
```

Stores a stage input node's logical interface without native names or GPU handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L285).

## `#ctor`

<a id="api-e6f8d6203949985b"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphInputSettings.#ctor 6f6a5df4de50b8d9492fa8d7575bbae96205fb1238817d99406f818095460fa2 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphInputSettings.ShaderGraphInputSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L285).

## `CreateBinding`

<a id="api-ae04e5459407d00c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphInputSettings.CreateBinding 7c326d0b9f28c10f0bd7a5d4a4c3362587055b2c716b3976eee01804071ace4f -->

```csharp
public Inno.Rendering.Shaders.ShaderIrStageInput Inno.Rendering.Shaders.ShaderGraphInputSettings.CreateBinding()
```

Validates the persisted descriptor and freezes its stage binding.

**Returns:** An immutable backend-neutral input binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L314).

## `id`

<a id="api-16127808bcb96137"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphInputSettings.id 663ab3a0598f53bf8d60a9284bd3726f0095fb55c258795dbcd8511ca86fcd20 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphInputSettings.id { get; set; }
```

Gets or sets the stable logical binding identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L290).

## `kind`

<a id="api-ae3990185d8ab25d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphInputSettings.kind c932ff8bfae35025cf835c0a66b4b1384aa072fdfc4885f6cb6b29c04d7bd894 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrInputKind Inno.Rendering.Shaders.ShaderGraphInputSettings.kind { get; set; }
```

Gets or sets the stage input category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L298).

## `location`

<a id="api-804e0f214c064dc2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphInputSettings.location b625a427510dc7cd23218e8930ecda57fc6c4a471517bc2a80d31fa38d3346b5 -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphInputSettings.location { get; set; }
```

Gets or sets the interface index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L306).

## `semantic`

<a id="api-2bdb36b6f511affe"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphInputSettings.semantic cb32990cafa0365aea57764983618317998bca20d5b0029fe216321bc3659133 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphInputSettings.semantic { get; set; }
```

Gets or sets the target semantic, not a native expression.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L302).

## `type`

<a id="api-818fe8cdd37424d9"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphInputSettings.type c71674fda5d4898c247fb967d5e86d397013e3c4f5445ec4e9d9fe63ce8d2626 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType Inno.Rendering.Shaders.ShaderGraphInputSettings.type { get; set; }
```

Gets or sets the complete neutral type descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L294).
