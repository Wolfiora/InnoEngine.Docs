---
title: "ShaderSourceParameterDirection"
description: "Reference for ShaderSourceParameterDirection in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.ea960656248709a3
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceParameterDirection`

This reference describes `ShaderSourceParameterDirection` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Input`](#api-439e33bc46b26f94) | Field |
| [`InputOutput`](#api-a5dfb7c93886f22c) | Field |
| [`Output`](#api-ef3f31ddb87aabd1) | Field |

## Type declaration

<a id="api-ea960656248709a3"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection 2a9960f98f366c5ceac2f8bfff18c791d65d7f6361e6945061645f8ce57d8886 -->

```csharp
public enum InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection : int
```

Declares value flow across a source function parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L10).

## `Input`

<a id="api-439e33bc46b26f94"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection.Input 0452a14f2bad65f01bbc5d2de90b01e5e210b3190204c5d6e21f9931de746935 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection.Input = 0
```

The caller supplies a value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L15).

## `InputOutput`

<a id="api-a5dfb7c93886f22c"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection.InputOutput ab9a4a0fcec575bd154144e76f92bbab3b842546ed452049a75a6d0e6bf7b54c -->

```csharp
InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection.InputOutput = 2
```

The caller supplies a value and the function produces its replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L23).

## `Output`

<a id="api-ef3f31ddb87aabd1"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection.Output d696ebdf90601a654b54f85822c249329d74369d5809ee5b565b811942bd78b1 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderSourceParameterDirection.Output = 1
```

The function produces a value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFunction.cs#L19).
