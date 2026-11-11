---
title: "ShaderGraphNodeInterface"
description: "Reference for ShaderGraphNodeInterface in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.86a838e4a1ce6925
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeInterface`

This reference describes `ShaderGraphNodeInterface` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0128a6f008888728) | Method |
| [`GetPorts`](#api-5dd202981f0dd8a8) | Method |
| [`createOrder`](#api-abd0eb1861dfd094) | Property |
| [`createPath`](#api-19ec6e4751d44252) | Property |
| [`displayName`](#api-1bedff046d36b722) | Property |
| [`effect`](#api-d16341e1ef0cf45d) | Property |
| [`inputs`](#api-fd51560574950fa1) | Property |
| [`kind`](#api-682d02278237a109) | Property |
| [`outputs`](#api-e304ea71f214a1f5) | Property |
| [`role`](#api-868d6dddad414d7e) | Property |

## Type declaration

<a id="api-86a838e4a1ce6925"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeInterface a3efd89a9575ec6175c40d7764350646d0a990821237dc04093e8381f750d846 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodeInterface : Inno.Core.Serialization.ISerializable
```

Freezes the complete public interface resolved from one graph-authored node asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L118).

## `#ctor`

<a id="api-0128a6f008888728"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeInterface.#ctor 6c6c30fc75505a13b436191796adfdc8a4441c3504cf4a255c7c660ee8a7d1c6 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeInterface.ShaderGraphNodeInterface()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L118).

## `GetPorts`

<a id="api-5dd202981f0dd8a8"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeInterface.GetPorts 1ef7c92ebaf71b0543ad6e6bd1307457e155b397e808a4b43f809fc034a80f9b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderGraphNodeInterface.GetPorts()
```

Gets detached typed ports in deterministic input-then-output order.

**Returns:** A provider-free port snapshot suitable for Editor presentation and validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L159).

## `createOrder`

<a id="api-abd0eb1861dfd094"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.createOrder 9e88b0a1d9224ca1e9cd7964cdfdd7d01c626421a824429f1fdf39fd0085b22d -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphNodeInterface.createOrder { get; set; }
```

Gets or sets the deterministic order within the creation catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L131).

## `createPath`

<a id="api-19ec6e4751d44252"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.createPath b6e7a0cc02b0aad09709cf822f2748b45c9fc3c186c6554244f2ab1b274f7352 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeInterface.createPath { get; set; }
```

Gets or sets the slash-separated creation catalog beneath Graph Nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L127).

## `displayName`

<a id="api-1bedff046d36b722"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.displayName f1f60731278423e2cbb8930939b3fecf06e6640644f468dc7358cfe8177a3d75 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeInterface.displayName { get; set; }
```

Gets or sets the node title displayed to authors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L123).

## `effect`

<a id="api-d16341e1ef0cf45d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.effect 6a30708e46fd217476439c0c69944661242aa8706aa603a3097a59990fdaac9a -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeEffect Inno.Rendering.Shaders.ShaderGraphNodeInterface.effect { get; set; }
```

Gets or sets whether an inline function is pure or intentionally emits ordered effects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L139).

## `inputs`

<a id="api-fd51560574950fa1"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.inputs 7dc1dd00a8fc0c23158682ecf18904984ddefb1b41ef62d326820fb72d35f04e -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodePortDefinition[] Inno.Rendering.Shaders.ShaderGraphNodeInterface.inputs { get; set; }
```

Gets or sets externally supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L147).

## `kind`

<a id="api-682d02278237a109"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.kind 4d49f31d0d590d0e6afb42146d2c364b191cf1f9fd80e529a0ec6d3c1efc1b4d -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeKind Inno.Rendering.Shaders.ShaderGraphNodeInterface.kind { get; set; }
```

Gets or sets whether the graph is inline computation or a Target-owned output boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L135).

## `outputs`

<a id="api-e304ea71f214a1f5"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.outputs fcd75e30ff4747c84be8874e0d64f28e7377c2c6607ae35eb1ca91a4c1ffccd3 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodePortDefinition[] Inno.Rendering.Shaders.ShaderGraphNodeInterface.outputs { get; set; }
```

Gets or sets externally visible results.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L151).

## `role`

<a id="api-868d6dddad414d7e"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInterface.role 530345ef0339a8db1300e16aa6352df9aead5967586fe117fbef2ab4821452cc -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeInterface.role { get; set; }
```

Gets or sets the Target-owned role for a domain output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L143).
