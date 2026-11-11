---
title: "EditorShaderCompilationSnapshot"
description: "Reference for EditorShaderCompilationSnapshot in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.f146a58ba70aa862
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorShaderCompilationSnapshot`

This reference describes `EditorShaderCompilationSnapshot` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorShaderCompilationSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-92131c66e57467a4) | Method |
| [`Deconstruct`](#api-3580d77854567a7b) | Method |
| [`Equals`](#api-62574c6241659a30) | Method |
| [`Equals`](#api-5458f88b1768d20f) | Method |
| [`GetHashCode`](#api-a7c826ca4a21df71) | Method |
| [`op_Equality`](#api-b58d6afe9773f5dd) | Method |
| [`op_Inequality`](#api-6616e511e030c29d) | Method |
| [`ToString`](#api-4bff5c0dfd1157e9) | Method |
| [`diagnostics`](#api-dc1791b113586aef) | Property |
| [`state`](#api-ff6a4b0af6e80500) | Property |
| [`usingLastGood`](#api-6f077d819a83d68c) | Property |

## Type declaration

<a id="api-f146a58ba70aa862"></a>
<!-- api: T:Inno.Editor.Rendering.EditorShaderCompilationSnapshot 70df04abd5a28210f4c432cfb5a9091cc473d15e02a41aa5cd4b896cf002f89c -->

```csharp
public sealed record Inno.Editor.Rendering.EditorShaderCompilationSnapshot : System.IEquatable<Inno.Editor.Rendering.EditorShaderCompilationSnapshot>
```

Contains detached compiler state without retaining assets, tasks or extension instances.

**Parameter `state`:** Latest requested semantic candidate state.

**Parameter `usingLastGood`:** Whether rendering still uses a previous successful candidate.

**Parameter `diagnostics`:** Immutable latest completed compiler diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `#ctor`

<a id="api-92131c66e57467a4"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}) f393ccb52aa44996ed4bae6cead6fe0ba1fe64bf78da897af63aa819d8e67e87 -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilationSnapshot.EditorShaderCompilationSnapshot(Inno.Editor.Rendering.EditorShaderCompilationState state, bool usingLastGood, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics)
```

Contains detached compiler state without retaining assets, tasks or extension instances.

**Parameter `state`:** Latest requested semantic candidate state.

**Parameter `usingLastGood`:** Whether rendering still uses a previous successful candidate.

**Parameter `diagnostics`:** Immutable latest completed compiler diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `Deconstruct`

<a id="api-3580d77854567a7b"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.Deconstruct(Inno.Editor.Rendering.EditorShaderCompilationState@,System.Boolean@,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}@) c1a5aa45a7eea26f5ad62a894c316603ef0820bcb17bcea2cc507f92c447e3cb -->

```csharp
public void Inno.Editor.Rendering.EditorShaderCompilationSnapshot.Deconstruct(out Inno.Editor.Rendering.EditorShaderCompilationState state, out bool usingLastGood, out System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `Equals`

<a id="api-62574c6241659a30"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.Equals(Inno.Editor.Rendering.EditorShaderCompilationSnapshot) ce6703630fcb31d9cd5ecdd89d8cbba464dd385301a0ff937e0062a163225e1c -->

```csharp
public bool Inno.Editor.Rendering.EditorShaderCompilationSnapshot.Equals(Inno.Editor.Rendering.EditorShaderCompilationSnapshot? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `Equals`

<a id="api-5458f88b1768d20f"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.Equals(System.Object) f669ec9e8b773d8fea09b1b761a3589809e4cf9092b8de4eb109c01674ebc470 -->

```csharp
public override bool Inno.Editor.Rendering.EditorShaderCompilationSnapshot.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `GetHashCode`

<a id="api-a7c826ca4a21df71"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.GetHashCode 521cc1f9a563dd863bd03f3de3cb3bf443017b48957445e66735d4a243997427 -->

```csharp
public override int Inno.Editor.Rendering.EditorShaderCompilationSnapshot.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `op_Equality`

<a id="api-b58d6afe9773f5dd"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.op_Equality(Inno.Editor.Rendering.EditorShaderCompilationSnapshot,Inno.Editor.Rendering.EditorShaderCompilationSnapshot) a66c2336a1c763eb6815c53b78f6d61d8555fd194e644700603eb605dcc826a8 -->

```csharp
public static bool Inno.Editor.Rendering.EditorShaderCompilationSnapshot.operator ==(Inno.Editor.Rendering.EditorShaderCompilationSnapshot? left, Inno.Editor.Rendering.EditorShaderCompilationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `op_Inequality`

<a id="api-6616e511e030c29d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.op_Inequality(Inno.Editor.Rendering.EditorShaderCompilationSnapshot,Inno.Editor.Rendering.EditorShaderCompilationSnapshot) a14b1682f64274dbe526ad37ebd91ba000a139b0a2e3510dbc751678e4361a99 -->

```csharp
public static bool Inno.Editor.Rendering.EditorShaderCompilationSnapshot.operator !=(Inno.Editor.Rendering.EditorShaderCompilationSnapshot? left, Inno.Editor.Rendering.EditorShaderCompilationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `ToString`

<a id="api-4bff5c0dfd1157e9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.ToString a20f4e965e1d51173d483d60a1ca74b717425a94539c0bbf6ca6891876bbe576 -->

```csharp
public override string Inno.Editor.Rendering.EditorShaderCompilationSnapshot.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L41).

## `diagnostics`

<a id="api-dc1791b113586aef"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.diagnostics 9d80107ef0d7825a9de0c6028cf1a762a9ebb9298128099e91bea5da0bf51d1f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> Inno.Editor.Rendering.EditorShaderCompilationSnapshot.diagnostics { get; init; }
```

Immutable latest completed compiler diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L44).

## `state`

<a id="api-ff6a4b0af6e80500"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.state d9cb45e1cb7c62d0dbe55655c2f3dca5bd454eaa7a1dfe55156e74e87c2e179d -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilationState Inno.Editor.Rendering.EditorShaderCompilationSnapshot.state { get; init; }
```

Latest requested semantic candidate state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L42).

## `usingLastGood`

<a id="api-6f077d819a83d68c"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderCompilationSnapshot.usingLastGood 3baf259f6f8574140bef9c7fb51dd25a99cdcf58b02e3e27f08ba2bddfc8a4fd -->

```csharp
public bool Inno.Editor.Rendering.EditorShaderCompilationSnapshot.usingLastGood { get; init; }
```

Whether rendering still uses a previous successful candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L43).
