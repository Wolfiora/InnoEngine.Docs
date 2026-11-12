---
title: "ShaderIrInstruction"
description: "Reference for ShaderIrInstruction in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.3b2d8e75046458bb
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrInstruction`

This reference describes `ShaderIrInstruction` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a18c58fa484f4bc9) | Method |
| [`constantBits`](#api-02171d8d541a8369) | Property |
| [`hasSideEffects`](#api-585f199a140b3eda) | Property |
| [`inputName`](#api-3fef33b7e269dd65) | Property |
| [`inputs`](#api-ae57008afedfb0b6) | Property |
| [`memberIndex`](#api-d50d7109bff4c7c7) | Property |
| [`operation`](#api-529e4e88bb6ce3f1) | Property |
| [`outputs`](#api-aee760bfd430cb23) | Property |
| [`regions`](#api-9003ad5baa7fdb6c) | Property |
| [`source`](#api-05b289d43d68de7c) | Property |

## Type declaration

<a id="api-3b2d8e75046458bb"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrInstruction d97157aa9e70c007389df4850d5694e185081327b73ca5482179a371de2acc12 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrInstruction
```

Stores one immutable typed instruction without generated stage source or backend expressions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L136).

## `#ctor`

<a id="api-a18c58fa484f4bc9"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrInstruction.#ctor a7f90f2b96135e049e0226dbb07a480a58c2a3261dc100ffa5ab6f139a7dd3ec -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrInstruction.ShaderIrInstruction()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L136).

## `constantBits`

<a id="api-02171d8d541a8369"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.constantBits 83a9e7a8ebced4773774119bd195221af699da7d2c85c9280347171d466919fd -->

```csharp
public ulong InnoEditor.Rendering.Shaders.ShaderIrInstruction.constantBits { get; }
```

Gets exact scalar bits for a Constant instruction; the result type determines interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L177).

## `hasSideEffects`

<a id="api-585f199a140b3eda"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.hasSideEffects e5c5ef0a4b091b92af0f7e30a2909cb1c0791e293ebc114b136fd4cf99b8c6d1 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderIrInstruction.hasSideEffects { get; }
```

Gets whether removing or reordering this instruction may change observable behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L193).

## `inputName`

<a id="api-3fef33b7e269dd65"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.inputName 68880e1afa39c8a017922b5396976d8c6630dbed674cb43ce64e9b30993ff965 -->

```csharp
public string? InnoEditor.Rendering.Shaders.ShaderIrInstruction.inputName { get; }
```

Gets the stable interface or region-parameter identity, only for Input or RegionInput.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L173).

## `inputs`

<a id="api-ae57008afedfb0b6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.inputs 1aeef2cf37273184d6992cd1a5976372e8d611983480c148069e9d398f642771 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderIrInstruction.inputs { get; }
```

Gets immutable operands in operation or function-declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L165).

## `memberIndex`

<a id="api-d50d7109bff4c7c7"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.memberIndex 8d175fb466e0653043d9dbbdaa189fbe6b68a9b3cf79550665ada68e7398c790 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrInstruction.memberIndex { get; }
```

Gets the zero-based component/member/element ordinal for an Extract instruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L181).

## `operation`

<a id="api-529e4e88bb6ce3f1"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.operation 97b080b8027d4e7d791bfd435591ec107575836f9f3fa221353352f411ebd3db -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrOperation InnoEditor.Rendering.Shaders.ShaderIrInstruction.operation { get; }
```

Gets the semantic operation independent of any source language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L161).

## `outputs`

<a id="api-aee760bfd430cb23"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.outputs 6502fa46cb147f2cb36551a373ee932be1691eb0098167cd28c2b3245b1165a7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderIrInstruction.outputs { get; }
```

Gets produced values; a call orders its return value first, then out/inout parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L169).

## `regions`

<a id="api-9003ad5baa7fdb6c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.regions 9f8cb8feec5df3e394b88273978391159c1601b9a23ee31076dd06f368663d20 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderIrBlock> InnoEditor.Rendering.Shaders.ShaderIrInstruction.regions { get; }
```

Gets immutable nested regions: true/false for Branch, or one body for Loop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L189).

## `source`

<a id="api-05b289d43d68de7c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrInstruction.source 8237c72f0dafba09d32c1925bc56bcc96a751acadadd6f2542bc9ede29dc6c99 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis? InnoEditor.Rendering.Shaders.ShaderIrInstruction.source { get; }
```

Gets a frozen, analyzed function implementation only for a SourceCall instruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L185).
