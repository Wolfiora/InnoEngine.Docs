---
title: "ShaderIrValue"
description: "Reference for ShaderIrValue in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.31e3fc5afb303d05
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrValue`

This reference describes `ShaderIrValue` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d58905720d62104a) | Method |
| [`index`](#api-abdc1c4ef9a31895) | Property |
| [`type`](#api-252870fb64ef6d14) | Property |

## Type declaration

<a id="api-31e3fc5afb303d05"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrValue 36a64337cd194430f9be71d378d201e9e4f92cc4f5f8e403c79c54a9f699745f -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrValue
```

Identifies a typed single-assignment value within one intermediate block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L11).

## `#ctor`

<a id="api-d58905720d62104a"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrValue.#ctor eaeea5fc56a1fb2df1e3a7399088228d4910495ae1d0c43186ff2c64b28995db -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue.ShaderIrValue()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L11).

## `index`

<a id="api-abdc1c4ef9a31895"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrValue.index 569b20a625137d45327c27a1743857c8d487ff09b8aa5380253830ac6bf20d85 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrValue.index { get; }
```

Gets the deterministic block-local value index, not a GPU register or resource slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L26).

## `type`

<a id="api-252870fb64ef6d14"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrValue.type 5fd99685301061b7796712fd6abf245a3bad41a9af736488754c1fa05cb9a53b -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderIrValue.type { get; }
```

Gets the complete language-independent value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L30).
