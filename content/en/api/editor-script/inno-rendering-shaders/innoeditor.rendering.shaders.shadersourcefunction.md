---
title: "ShaderSourceFunction"
description: "Reference for ShaderSourceFunction in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.b1eeb32434e6c54c
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceFunction`

This reference describes `ShaderSourceFunction` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63bc9810a3e6fe1f) | Method |
| [`HasSameInterface`](#api-1a070e9b4a8017c5) | Method |
| [`location`](#api-79b52cff4ac082f3) | Property |
| [`name`](#api-7b8c37ffe8521178) | Property |
| [`parameters`](#api-78ad84ee246084ff) | Property |
| [`returnType`](#api-533d167e40a7b6fe) | Property |

## Type declaration

<a id="api-b1eeb32434e6c54c"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceFunction 7191b318725e67bddbf03dae35ac819f785fbae296796f402c1f35c74ece8410 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceFunction
```

Contains the single callable interface exported by a source asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L77).

## `#ctor`

<a id="api-63bc9810a3e6fe1f"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFunction.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceParameter},InnoEditor.Rendering.Shaders.ShaderSourcePosition) dcfc7761aae985baa0cc2ee1a7fbac0a7296624b389e82e8d8fad80de387fa3c -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceFunction.ShaderSourceFunction(string name, InnoEditor.Rendering.Shaders.ShaderSourceType returnType, System.Collections.Generic.IEnumerable<InnoEditor.Rendering.Shaders.ShaderSourceParameter> parameters, InnoEditor.Rendering.Shaders.ShaderSourcePosition location)
```

Captures a source function declaration without retaining parser or provider objects.

**Parameter `name`:** Implementation function name selected by import settings.

**Parameter `returnType`:** Canonical result type; void has no result port.

**Parameter `parameters`:** Unique named parameters in call order.

**Parameter `location`:** Original declaration location.

**Throws `System.ArgumentException`:** The name is reserved or parameters have duplicate names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L97).

## `HasSameInterface`

<a id="api-1a070e9b4a8017c5"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(InnoEditor.Rendering.Shaders.ShaderSourceFunction) 5f9c7277acd1c9bbefd819be17b668720eda6e6c5a363297522e1276827f935c -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(InnoEditor.Rendering.Shaders.ShaderSourceFunction? other)
```

Validates alternative implementations by semantic names, types, direction, and call order.

**Parameter `other`:** Candidate interface, whose private implementation function name may differ.

**Returns:** True when both implementations expose the same graph ports and calling interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L142).

## `location`

<a id="api-79b52cff4ac082f3"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceFunction.location 989a2259e5ee538e03750420f1d634cbe7b8ac6c82ec67ab95c71c15c4be9978 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourcePosition InnoEditor.Rendering.Shaders.ShaderSourceFunction.location { get; }
```

Gets the original declaration position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L131).

## `name`

<a id="api-7b8c37ffe8521178"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceFunction.name 5e1cecda64760ff08479d0b2389a48d7fd38f2fdb4b026e6ba63b9d9ebbcb297 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceFunction.name { get; }
```

Gets the implementation function name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L119).

## `parameters`

<a id="api-78ad84ee246084ff"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceFunction.parameters f77e9f9bbc7a82e214456c6d38b0a206146fd482a2467f15c2554b493679b345 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceParameter> InnoEditor.Rendering.Shaders.ShaderSourceFunction.parameters { get; }
```

Gets the immutable function parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L127).

## `returnType`

<a id="api-533d167e40a7b6fe"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceFunction.returnType 4afbd39cc6e6198aad765b8609e19810de0e5e3a155ab916f3021d1e426010a2 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceFunction.returnType { get; }
```

Gets the canonical result type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L123).
