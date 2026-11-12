---
title: "ShaderGraphNodeInterface"
description: "Reference for ShaderGraphNodeInterface in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.9210de58f3aec962
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodeInterface`

This reference describes `ShaderGraphNodeInterface` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b8e623cb28eda240) | Method |
| [`GetPorts`](#api-a2a5a06d176b833b) | Method |
| [`createOrder`](#api-314d468d76c56202) | Property |
| [`createPath`](#api-4b9734c89505c756) | Property |
| [`displayName`](#api-9a50e41be94f3b5f) | Property |
| [`effect`](#api-7d195b9dd168fcef) | Property |
| [`inputs`](#api-f2f2b007a93d113c) | Property |
| [`kind`](#api-7da16591949069de) | Property |
| [`outputs`](#api-89c8ec059d8aedfe) | Property |
| [`role`](#api-f1080a0ced250d6a) | Property |

## Type declaration

<a id="api-9210de58f3aec962"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface 4fcfe06b061eeb1815bc56751829fa7c5f376c7db0b29691e53d2ebb93fedbe8 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface : InnoEngine.Serialization.ISerializable
```

Freezes the complete public interface resolved from one graph-authored node asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L118).

## `#ctor`

<a id="api-b8e623cb28eda240"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.#ctor f2efdfdd24ecc8406c79b13e6570c25bb37189eeaebdd3dce9c1cb9aefe0019b -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.ShaderGraphNodeInterface()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L118).

## `GetPorts`

<a id="api-a2a5a06d176b833b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.GetPorts 649c1cc3c9d570c872f6fdd5bbd3b3d47e0495de2cb0793acef581aec8416b7d -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderNodePort> InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.GetPorts()
```

Gets detached typed ports in deterministic input-then-output order.

**Returns:** A provider-free port snapshot suitable for Editor presentation and validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L159).

## `createOrder`

<a id="api-314d468d76c56202"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.createOrder 34c5fb220eb3cecfed5adb2d88fb2c009a4c2632182b75065181013937e5ea12 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.createOrder { get; set; }
```

Gets or sets the deterministic order within the creation catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L131).

## `createPath`

<a id="api-4b9734c89505c756"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.createPath 8d70b98975af1e1fa6d79758d76f8b37c470d360bb5ab18fd020a478674f4453 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.createPath { get; set; }
```

Gets or sets the slash-separated creation catalog beneath Graph Nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L127).

## `displayName`

<a id="api-9a50e41be94f3b5f"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.displayName 7ec1f0aed9dc4de37a067fd5fe6acb4e365f6a007028ca67194025355e9a5639 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.displayName { get; set; }
```

Gets or sets the node title displayed to authors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L123).

## `effect`

<a id="api-7d195b9dd168fcef"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.effect 3625781c4ec36eb0e25d3177b7bafd7c4b03273dbcf220d6a9e90cadf6488714 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.effect { get; set; }
```

Gets or sets whether an inline function is pure or intentionally emits ordered effects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L139).

## `inputs`

<a id="api-f2f2b007a93d113c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.inputs c062398f7a306cc1eaa8242c3127edad109bf944a43c281934fa88d091d762ba -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition[] InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.inputs { get; set; }
```

Gets or sets externally supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L147).

## `kind`

<a id="api-7da16591949069de"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.kind 9480d46a467004953a779ede97b072cf2d003834d734b2f91e53b6213ebf1ccf -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeKind InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.kind { get; set; }
```

Gets or sets whether the graph is inline computation or a Target-owned output boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L135).

## `outputs`

<a id="api-89c8ec059d8aedfe"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.outputs ff0559ee04de3ff01bc8c1651623c56fb4abde9c326457e8632811f8df71df73 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition[] InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.outputs { get; set; }
```

Gets or sets externally visible results.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L151).

## `role`

<a id="api-f1080a0ced250d6a"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.role 0eb70e2f158ee439f9cb4d8efca9834aefa2d37b1e3ce74416a77878a5b6d2c6 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface.role { get; set; }
```

Gets or sets the Target-owned role for a domain output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L143).
