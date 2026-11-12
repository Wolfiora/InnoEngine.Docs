---
title: "ShaderNodeLoweringContext"
description: "Reference for ShaderNodeLoweringContext in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.ebc57c0b5e138834
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderNodeLoweringContext`

This reference describes `ShaderNodeLoweringContext` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a77adb79b4574c0b) | Method |
| [`Input`](#api-a7e786cb1246e9f4) | Method |
| [`builder`](#api-ef3be2d28e9501f2) | Property |
| [`description`](#api-500b5477503e04f6) | Property |
| [`inputs`](#api-1d24f305efdd0d0d) | Property |

## Type declaration

<a id="api-ebc57c0b5e138834"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext 3c318f3b71b1a8d25b41f9745cc13565ed1c517ce631fcbb50a52ee196a61050 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext
```

Supplies one node's connected values and the region builder during lowering only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L138).

## `#ctor`

<a id="api-a77adb79b4574c0b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.#ctor 569b5841632b2cb5000377011f59c63c004732bf699769810bbef881d75a0e41 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.ShaderNodeLoweringContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L138).

## `Input`

<a id="api-a7e786cb1246e9f4"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.Input(System.String) 28bbd9c9a315c649b9629326cedf24d6cd265ef7d273853f1de5cf6cda10dd09 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.Input(string id)
```

Requires one connected input without implicit defaults or positional rebinding.

**Parameter `id`:** Exact semantic input port identity.

**Returns:** The connected typed value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L171).

## `builder`

<a id="api-ef3be2d28e9501f2"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.builder 59d765ea82397cc4f0a86ebdbc0da1d2a8af88032bc81d1878b287f218407d99 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrBuilder InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.builder { get; }
```

Gets the builder shared by nodes in this typed region.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L157).

## `description`

<a id="api-500b5477503e04f6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.description 333769628a738f2fe4520e4510ab875bf1b8b9a66621006094dfeb5eaaf66ee7 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.description { get; }
```

Gets the invocation-scoped node description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L153).

## `inputs`

<a id="api-1d24f305efdd0d0d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.inputs adf7213384326b33f737cacbd2c283dd443ca9b8be0d7647dda0f9aa6540829f -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext.inputs { get; }
```

Gets connected values keyed by semantic input port identity, never connection order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L161).
