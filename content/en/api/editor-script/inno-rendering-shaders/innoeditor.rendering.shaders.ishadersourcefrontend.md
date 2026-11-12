---
title: "IShaderSourceFrontend"
description: "Reference for IShaderSourceFrontend in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.90fe1007dbfdbb06
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `IShaderSourceFrontend`

This reference describes `IShaderSourceFrontend` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Analyze`](#api-82a3a48ed0899784) | Method |
| [`languageId`](#api-d3a917fe7c1c5f88) | Property |

## Type declaration

<a id="api-90fe1007dbfdbb06"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.IShaderSourceFrontend 64a6f867b6e2d8d2d71a98615df1244908a4f47f61cffaf021af9af50ea3c1af -->

```csharp
public interface InnoEditor.Rendering.Shaders.IShaderSourceFrontend
```

Parses one source language into canonical function interfaces; it does not create GPU objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L187).

## `Analyze`

<a id="api-82a3a48ed0899784"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.IShaderSourceFrontend.Analyze(InnoEditor.Rendering.Shaders.ShaderSourceRequest) ca94731a6f2ca3825c4b9e18674e6f1f4904fa7f1168ccd776d15ffdca04cc08 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderSourceAnalysis InnoEditor.Rendering.Shaders.IShaderSourceFrontend.Analyze(InnoEditor.Rendering.Shaders.ShaderSourceRequest request)
```

Analyzes an immutable source candidate with explicit preprocessing inputs.

**Parameter `request`:** Source, selected function, dependencies, and target inputs.

**Returns:** A successful interface or a recoverable set of original-source diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L202).

## `languageId`

<a id="api-d3a917fe7c1c5f88"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.IShaderSourceFrontend.languageId 39fe6069d9ac58b8bd963f360b3e5997c14a04715e1367c49094a78a4ced2c15 -->

```csharp
string InnoEditor.Rendering.Shaders.IShaderSourceFrontend.languageId { get; }
```

Gets the open source language identity, distinct from a rendering backend or GPU API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L192).
