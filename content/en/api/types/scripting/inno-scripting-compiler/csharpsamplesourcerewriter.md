---
title: "CSharpSampleSourceRewriter"
description: "Reference for CSharpSampleSourceRewriter in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.814f1b60b90c377e
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `CSharpSampleSourceRewriter`

This reference describes `CSharpSampleSourceRewriter` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Assets.Pipeline.IAssetSampleSourceRewriter`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-32781397bedf2f7b) | Method |
| [`Transform`](#api-e7ef04d98553113d) | Method |

## Type declaration

<a id="api-814f1b60b90c377e"></a>
<!-- api: T:Inno.Scripting.Compiler.CSharpSampleSourceRewriter 78e71d0ddfa26e747f81462b8714fc6ed74b4201d9c3a85c4d9013d05196abab -->

```csharp
public sealed class Inno.Scripting.Compiler.CSharpSampleSourceRewriter : Inno.Assets.Pipeline.IAssetSampleSourceRewriter
```

Gives imported C# sample scripts distinct type identities before their scene assets are remapped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/CSharpSampleSourceRewriter.cs#L17).

## `#ctor`

<a id="api-32781397bedf2f7b"></a>
<!-- api: M:Inno.Scripting.Compiler.CSharpSampleSourceRewriter.#ctor b0b48f6f368f673494776f6cff7115052f7a4fce935a9468c155d6a822e7536d -->

```csharp
public Inno.Scripting.Compiler.CSharpSampleSourceRewriter.CSharpSampleSourceRewriter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/CSharpSampleSourceRewriter.cs#L17).

## `Transform`

<a id="api-e7ef04d98553113d"></a>
<!-- api: M:Inno.Scripting.Compiler.CSharpSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext) 1e24adba6bb90a90b67ec19be140bf6db88bc0316a478215b9eff92234ea8454 -->

```csharp
public void Inno.Scripting.Compiler.CSharpSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext context)
```

Rewrites explicit stable type identities in cloned C# scripts and registers their asset mappings.

**Parameter `context`:** The private sample import stage and its identity map.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Compilation/CSharpSampleSourceRewriter.cs#L25).
