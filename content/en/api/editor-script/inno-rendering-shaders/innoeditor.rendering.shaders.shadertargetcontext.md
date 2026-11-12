---
title: "ShaderTargetContext"
description: "Reference for ShaderTargetContext in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.c7796795030fcb29
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderTargetContext`

This reference describes `ShaderTargetContext` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9780db78b77f28dc) | Method |
| [`document`](#api-dca5d01fa69cd474) | Property |
| [`references`](#api-385837578a8aba78) | Property |
| [`serialization`](#api-d1c15a99a1a683f1) | Property |

## Type declaration

<a id="api-c7796795030fcb29"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderTargetContext 00ce3b873b5b1dcf63e6c6bafc390189d965257e6ce7fd66e6086bcc94baa6f0 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderTargetContext
```

Supplies neutral authoring data to a domain target without exposing an adapter or live asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L57).

## `#ctor`

<a id="api-9780db78b77f28dc"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderTargetContext.#ctor 8d6263870b118219a5003cc2b6ffd56465dad4d0eee1cd84c90134a114d0b4ab -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderTargetContext.ShaderTargetContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L57).

## `document`

<a id="api-dca5d01fa69cd474"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderTargetContext.document a0fa612e04192c5438b299bae4b39c29e1778b97c9fadcb75b656f99983c61bb -->

```csharp
public InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderTargetContext.document { get; }
```

Gets a private document copy; expansion cannot modify the authored source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L72).

## `references`

<a id="api-385837578a8aba78"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderTargetContext.references 2ef90616ecf16e163fc55e5a0b3b18d713dc7d3c4cca2c332cf23bce21f5c631 -->

```csharp
public InnoEngine.Serialization.SerializationContext InnoEditor.Rendering.Shaders.ShaderTargetContext.references { get; }
```

Gets the complete owner reference context used for generated resource defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L80).

## `serialization`

<a id="api-d1c15a99a1a683f1"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderTargetContext.serialization 18401f4289534a2ddb23d5144c8633b619ba45a09d8fa64b77901c4e4cab5b3e -->

```csharp
public InnoEngine.Serialization.SerializationRegistry InnoEditor.Rendering.Shaders.ShaderTargetContext.serialization { get; }
```

Gets the current owner converter registry, valid only during expansion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L76).
