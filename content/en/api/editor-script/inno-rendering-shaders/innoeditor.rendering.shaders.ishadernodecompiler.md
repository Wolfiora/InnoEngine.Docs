---
title: "IShaderNodeCompiler"
description: "Reference for IShaderNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.b5c58c0f1dd5ad4f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `IShaderNodeCompiler`

This reference describes `IShaderNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`GetPorts`](#api-d56cbed3f9c0a686) | Method |
| [`Lower`](#api-4dd9ff0447d749d0) | Method |
| [`definitionId`](#api-ad017963c81c77e9) | Property |

## Type declaration

<a id="api-b5c58c0f1dd5ad4f"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.IShaderNodeCompiler c183c9aec139ab77230adf20f161a257ee886c6fc2b3c32c87dd8ccb4dd4caed -->

```csharp
public interface InnoEditor.Rendering.Shaders.IShaderNodeCompiler
```

Defines one shader node's typed ports and lowering; drawing belongs to a separate editor extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L35).

## `GetPorts`

<a id="api-d56cbed3f9c0a686"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.IShaderNodeCompiler.GetPorts(InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext) accfb48d19756ebd534463e0bfb7e57633588292bea22c4259c97e11531357b8 -->

```csharp
System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderNodePort> InnoEditor.Rendering.Shaders.IShaderNodeCompiler.GetPorts(InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Describes ports for the current neutral properties and resolved source/target inputs.

**Parameter `context`:** Invocation-scoped node properties and frozen source/target data.

**Returns:** Complete typed ports; duplicate identities are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L50).

## `Lower`

<a id="api-4dd9ff0447d749d0"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.IShaderNodeCompiler.Lower(InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext) ab95622e942e4283113897d7a17b5afa553eeb52832dd86dad347befc6b99f4e -->

```csharp
System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.IShaderNodeCompiler.Lower(InnoEditor.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers the node into the supplied typed builder without generating source strings.

**Parameter `context`:** Connected typed inputs and the shared region builder.

**Returns:** Exactly the declared output ports by stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L60).

## `definitionId`

<a id="api-ad017963c81c77e9"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.IShaderNodeCompiler.definitionId adfb144e1c81d5b3c760d9bd9cfd4a1bf52592b2cdc504b0dacdba97bef2fdd9 -->

```csharp
string InnoEditor.Rendering.Shaders.IShaderNodeCompiler.definitionId { get; }
```

Gets the exact graph node definition identity implemented by this compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L40).
