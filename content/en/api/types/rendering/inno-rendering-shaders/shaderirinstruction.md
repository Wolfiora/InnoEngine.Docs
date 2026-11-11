---
title: "ShaderIrInstruction"
description: "Reference for ShaderIrInstruction in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.13e34aa59738d05e
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrInstruction`

This reference describes `ShaderIrInstruction` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`constantBits`](#api-0fc628961e5c020b) | Property |
| [`hasSideEffects`](#api-703ea85fe35396b0) | Property |
| [`inputName`](#api-1a1f0baea0c372ce) | Property |
| [`inputs`](#api-58056de069f40533) | Property |
| [`memberIndex`](#api-52a9b83596c3c974) | Property |
| [`operation`](#api-b21783f57cce0a8f) | Property |
| [`outputs`](#api-84b60344a6b4a571) | Property |
| [`regions`](#api-73b75fb72987d8ce) | Property |
| [`source`](#api-36a9260c2257589a) | Property |

## Type declaration

<a id="api-13e34aa59738d05e"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrInstruction 884df9a495c3189667301c2edf296cef071084f54ebac9e915dc60687bee443d -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrInstruction
```

Stores one immutable typed instruction without generated stage source or backend expressions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L136).

## `constantBits`

<a id="api-0fc628961e5c020b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.constantBits 93b6c081e556777b6eb94f510ab86e3d7a82020f1b7436026779993e9d7181c3 -->

```csharp
public ulong Inno.Rendering.Shaders.ShaderIrInstruction.constantBits { get; }
```

Gets exact scalar bits for a Constant instruction; the result type determines interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L177).

## `hasSideEffects`

<a id="api-703ea85fe35396b0"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.hasSideEffects c9710ee3c05e8177b7781fb16a96f458bdd051bacce34c1824fc787ea8bda38f -->

```csharp
public bool Inno.Rendering.Shaders.ShaderIrInstruction.hasSideEffects { get; }
```

Gets whether removing or reordering this instruction may change observable behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L193).

## `inputName`

<a id="api-1a1f0baea0c372ce"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.inputName 6b135841451da79f934f636de4b13259c08c5382dd40649aa72018370a834e12 -->

```csharp
public string? Inno.Rendering.Shaders.ShaderIrInstruction.inputName { get; }
```

Gets the stable interface or region-parameter identity, only for Input or RegionInput.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L173).

## `inputs`

<a id="api-58056de069f40533"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.inputs 31ee07ae981048d8635f72f6d24917d71a882f9c689934cf73485ae8c7e27eb2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderIrInstruction.inputs { get; }
```

Gets immutable operands in operation or function-declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L165).

## `memberIndex`

<a id="api-52a9b83596c3c974"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.memberIndex 72ab69439f5a525f4e7c9c183beda1e27f9ae2e94e4fdf51b3cd4002a16e8703 -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrInstruction.memberIndex { get; }
```

Gets the zero-based component/member/element ordinal for an Extract instruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L181).

## `operation`

<a id="api-b21783f57cce0a8f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.operation caed2228daced8c9ca70caa4fece8571f1027914e4a04ea4c5dbefe128e9d39d -->

```csharp
public Inno.Rendering.Shaders.ShaderIrOperation Inno.Rendering.Shaders.ShaderIrInstruction.operation { get; }
```

Gets the semantic operation independent of any source language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L161).

## `outputs`

<a id="api-84b60344a6b4a571"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.outputs 74a7da0a5ee07896984b63d29121da9d4b4a182518f3d2c12ba302a9577ab544 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderIrInstruction.outputs { get; }
```

Gets produced values; a call orders its return value first, then out/inout parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L169).

## `regions`

<a id="api-73b75fb72987d8ce"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.regions c17bb20ceee0ca44329a629b74ca201b1d8f1dafb2a5e5e0a33b89e812f3d007 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrBlock> Inno.Rendering.Shaders.ShaderIrInstruction.regions { get; }
```

Gets immutable nested regions: true/false for Branch, or one body for Loop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L189).

## `source`

<a id="api-36a9260c2257589a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrInstruction.source c5b49d928b2c1303a1e79b7e093dc974baeaddc624dbc79c10e8c8500e63ed4c -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis? Inno.Rendering.Shaders.ShaderIrInstruction.source { get; }
```

Gets a frozen, analyzed function implementation only for a SourceCall instruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L185).
