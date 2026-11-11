---
title: "EditorShaderDraftCompilationSnapshot"
description: "Reference for EditorShaderDraftCompilationSnapshot in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.fea9e636707bb349
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorShaderDraftCompilationSnapshot`

This reference describes `EditorShaderDraftCompilationSnapshot` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-42b944d9c6c87fdc) | Method |
| [`Deconstruct`](#api-07bab2aa5e7d9024) | Method |
| [`Equals`](#api-f1d01dd0c8997b19) | Method |
| [`Equals`](#api-37842e812be32858) | Method |
| [`GetHashCode`](#api-9a1f4beb82300c69) | Method |
| [`op_Equality`](#api-4e2a159d77125d34) | Method |
| [`op_Inequality`](#api-42450c6c31d15b91) | Method |
| [`ToString`](#api-4a729485012b9c88) | Method |
| [`artifact`](#api-a3a2878b231a3132) | Property |
| [`diagnostics`](#api-dfb2d1e440731f32) | Property |
| [`state`](#api-1327c36b80be77ac) | Property |
| [`usingLastGood`](#api-e8ba1cbfff46917a) | Property |

## Type declaration

<a id="api-fea9e636707bb349"></a>
<!-- api: T:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot 405531f0e9f3c6e39f13e728d32a5cc9f9e890a44a048f12155eaeb59d4d8b35 -->

```csharp
public sealed record Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot : System.IEquatable<Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot>
```

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `#ctor`

<a id="api-42b944d9c6c87fdc"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic},Inno.Rendering.Assets.RenderShaderArtifact) f19a6e4573b5cad5c4541d07e7a645893a6e3b2a2f7c931449ff0d99e2997f4f -->

```csharp
public Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.EditorShaderDraftCompilationSnapshot(Inno.Editor.Rendering.EditorShaderCompilationState state, bool usingLastGood, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics, Inno.Rendering.Assets.RenderShaderArtifact? artifact)
```

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `Deconstruct`

<a id="api-07bab2aa5e7d9024"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.Deconstruct(Inno.Editor.Rendering.EditorShaderCompilationState@,System.Boolean@,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}@,Inno.Rendering.Assets.RenderShaderArtifact@) 1c45e592234978dd8070c538f5ba939ba336a58258ffc540a83c5196dc29f2ef -->

```csharp
public void Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.Deconstruct(out Inno.Editor.Rendering.EditorShaderCompilationState state, out bool usingLastGood, out System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics, out Inno.Rendering.Assets.RenderShaderArtifact? artifact)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `Equals`

<a id="api-f1d01dd0c8997b19"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot) 53ad42e306799f294958834d9ce69605339cfc407d77b480e2e5e665d6acd1b8 -->

```csharp
public bool Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `Equals`

<a id="api-37842e812be32858"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(System.Object) 2561ac65d605e5ba10409208dbdb83f3b1203952d7fd32fd3362f843bb611ebf -->

```csharp
public override bool Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `GetHashCode`

<a id="api-9a1f4beb82300c69"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.GetHashCode 89e245fb9156511070afc0ca9bfe5dce2be77d5f4a60344004546f3c0a9f7680 -->

```csharp
public override int Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `op_Equality`

<a id="api-4e2a159d77125d34"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.op_Equality(Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot,Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot) f854a96adf34c5c11c8b06529eaf9de798e285cd023278a707a5f7f191d02b05 -->

```csharp
public static bool Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.operator ==(Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot? left, Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `op_Inequality`

<a id="api-42450c6c31d15b91"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.op_Inequality(Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot,Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot) 8067dd579a7eead6a97f627b6fc28c9030af488efe13ad490db37b4c91ab6187 -->

```csharp
public static bool Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.operator !=(Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot? left, Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `ToString`

<a id="api-4a729485012b9c88"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.ToString 40821f2b9a98a3dbd2baf70bcfb93a36f3f2718919d2104675d18b1e13961092 -->

```csharp
public override string Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `artifact`

<a id="api-a3a2878b231a3132"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.artifact 907a689526512005ea3d86a4b18eca34bb48010f110330568a7e3a0d24d7c23f -->

```csharp
public Inno.Rendering.Assets.RenderShaderArtifact? Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.artifact { get; init; }
```

Preview-only complete shader candidate, or null before the first success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L66).

## `diagnostics`

<a id="api-dfb2d1e440731f32"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.diagnostics 0b674075379e0079da9184c9114b9c42b2437c73b6063b4bcdc0505c2611079f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.diagnostics { get; init; }
```

Latest detached preview diagnostics, separate from project diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L65).

## `state`

<a id="api-1327c36b80be77ac"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.state 9b93793ad05014c46c102c24c6056dc0ea3f358bad9abad4a92857efab28297b -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilationState Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.state { get; init; }
```

Latest draft compilation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L63).

## `usingLastGood`

<a id="api-e8ba1cbfff46917a"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.usingLastGood fbe7fda6a3eb117bf25f4ab8596fadf131d311cd602a60c7d9b6e9e2fb4d8974 -->

```csharp
public bool Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.usingLastGood { get; init; }
```

Whether the preview artifact belongs to an earlier successful draft.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L64).
