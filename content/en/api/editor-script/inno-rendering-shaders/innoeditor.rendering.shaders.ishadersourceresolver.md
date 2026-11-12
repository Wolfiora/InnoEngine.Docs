---
title: "IShaderSourceResolver"
description: "Reference for IShaderSourceResolver in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.66a336607a975fa6
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `IShaderSourceResolver`

This reference describes `IShaderSourceResolver` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`ReadInclude`](#api-82bb8a3340eb3e21) | Method |

## Type declaration

<a id="api-66a336607a975fa6"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.IShaderSourceResolver 61cd3396f169d48d39a25536351b2aec854354f06eb9b3dac26f3862d1bb695e -->

```csharp
public interface InnoEditor.Rendering.Shaders.IShaderSourceResolver
```

Reads dependencies only from the current source candidate and records their import dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L65).

## `ReadInclude`

<a id="api-82bb8a3340eb3e21"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.IShaderSourceResolver.ReadInclude(System.String,System.String) 79c00b30be893fb770b1852bd6f4ec2e901d7fa3a7bb82dd90ff745acac8abb1 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderSourceFile InnoEditor.Rendering.Shaders.IShaderSourceResolver.ReadInclude(string includingFile, string include)
```

Resolves and reads an include without bypassing asset mount permissions.

**Parameter `includingFile`:** Resolved path of the including source.

**Parameter `include`:** Source-local include spelling.

**Returns:** A resolved immutable source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L79).
