---
title: "ShaderStageToolResult"
description: "Reference for ShaderStageToolResult in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.3e62f87cd8e925b8
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderStageToolResult`

This reference describes `ShaderStageToolResult` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a5202d26489f8a73) | Method |
| [`bindings`](#api-1cc84643455e8c15) | Property |
| [`bytes`](#api-853f261fb2c923b9) | Property |
| [`diagnostics`](#api-a67148dc30d64bc1) | Property |
| [`succeeded`](#api-268a0168bcba156c) | Property |

## Type declaration

<a id="api-3e62f87cd8e925b8"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderStageToolResult f1450f884d8dffc6c3d5957d98b0378841d7d74402cbd3c0d4eea2875d9449d7 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderStageToolResult
```

Returns a frozen typed-stage compilation candidate; failure never carries a usable artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L50).

## `#ctor`

<a id="api-a5202d26489f8a73"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.Authoring.ShaderStageBinding},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceDiagnostic}) 2c9a42ec0703ad21c317ab9330c516c5094fef0b1e20797e0c140d5af45e68fb -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderStageToolResult.ShaderStageToolResult(System.ReadOnlySpan<byte> bytes, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.Authoring.ShaderStageBinding> bindings, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderSourceDiagnostic> diagnostics)
```

Creates a candidate result from adapter-owned generation, compilation and diagnostics.

**Parameter `bytes`:** Compiled binary, or empty after failure.

**Parameter `bindings`:** Logical-to-native resource layout used by this exact binary.

**Parameter `diagnostics`:** Structured adapter diagnostics with original source positions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L66).

## `bindings`

<a id="api-1cc84643455e8c15"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.bindings d3d94154cce1b10e8383d82df2abce0c1445a4e790dd6108709ca914debe1251 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.Authoring.ShaderStageBinding> Inno.Rendering.Assets.Authoring.ShaderStageToolResult.bindings { get; }
```

Gets the exact generated logical-to-native resource layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L87).

## `bytes`

<a id="api-853f261fb2c923b9"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.bytes 8e6cf72d9e6ed20fa4f67d56942ffbfbdf854d3e7a8c9c96176dcf22a54d9a07 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.Assets.Authoring.ShaderStageToolResult.bytes { get; }
```

Gets immutable target binary data, empty on failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L83).

## `diagnostics`

<a id="api-a67148dc30d64bc1"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.diagnostics 7134652038c41d42d43d3c69acdb50b7a5de52af8d5d5db04eb1a691389296e3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceDiagnostic> Inno.Rendering.Assets.Authoring.ShaderStageToolResult.diagnostics { get; }
```

Gets generation and native compiler diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L91).

## `succeeded`

<a id="api-268a0168bcba156c"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderStageToolResult.succeeded 714bc7625890aeecb6a9415f85128b043e2ded7aedd8b0b05800bf22cd76568d -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderStageToolResult.succeeded { get; }
```

Gets whether a nonempty binary was compiled without error diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L95).
