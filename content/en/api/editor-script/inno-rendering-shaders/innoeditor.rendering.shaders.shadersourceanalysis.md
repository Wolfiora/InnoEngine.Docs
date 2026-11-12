---
title: "ShaderSourceAnalysis"
description: "Reference for ShaderSourceAnalysis in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.e75ea0f2a0be49d1
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceAnalysis`

This reference describes `ShaderSourceAnalysis` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f08f72ee53bc24ba) | Method |
| [`dependencies`](#api-9f5c9b2a6b93dc9d) | Property |
| [`diagnostics`](#api-35d0d8dfb8ea73e7) | Property |
| [`function`](#api-2b182bfe986c6aff) | Property |
| [`succeeded`](#api-8933c47d5da93d8a) | Property |

## Type declaration

<a id="api-e75ea0f2a0be49d1"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis 93f51b8a28784dcaab5602df7fac0b9eadb7f716f9bcaf82f702e3e82d97f8a2 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceAnalysis
```

Returns a recoverable source analysis result and complete original-source dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L141).

## `#ctor`

<a id="api-f08f72ee53bc24ba"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.#ctor(InnoEditor.Rendering.Shaders.ShaderSourceFunction,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic}) 68fc800466ab1aee59625653018ae626013af308126bf502aef802c3840e636d -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.ShaderSourceAnalysis(InnoEditor.Rendering.Shaders.ShaderSourceFunction? function, System.Collections.Generic.IEnumerable<string> dependencies, System.Collections.Generic.IEnumerable<InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic> diagnostics)
```

Captures a completed analysis without retaining compiler objects.

**Parameter `function`:** Parsed interface, or null when parsing failed.

**Parameter `dependencies`:** Resolved included sources, excluding the root.

**Parameter `diagnostics`:** All problems discovered by the frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L155).

## `dependencies`

<a id="api-9f5c9b2a6b93dc9d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.dependencies 580f9e250211baed74d4d61e33a59a0b022e75fd867e806cf71b65ab21a81e6b -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.dependencies { get; }
```

Gets original source dependencies for invalidation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L173).

## `diagnostics`

<a id="api-35d0d8dfb8ea73e7"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.diagnostics 43992294578228138980a63a05c0a4ed6d49ba8ac9259296cd1c5d8db62f363c -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic> InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.diagnostics { get; }
```

Gets immutable, provider-neutral diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L177).

## `function`

<a id="api-2b182bfe986c6aff"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.function 0860757570e3b3eecae69c4b74a39430f01ce2547c58e043fcebfc7b951ff0c6 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceFunction? InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.function { get; }
```

Gets the parsed interface, or null after an analysis failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L169).

## `succeeded`

<a id="api-8933c47d5da93d8a"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.succeeded 6641ce0efb73c68cbca50a4cfffc23e1f4f1db19a34e4e36b1c65e02d29be890 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.succeeded { get; }
```

Gets whether a usable interface was found without errors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L181).
