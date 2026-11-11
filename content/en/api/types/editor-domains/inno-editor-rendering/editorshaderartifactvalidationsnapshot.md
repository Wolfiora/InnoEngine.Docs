---
title: "EditorShaderArtifactValidationSnapshot"
description: "Reference for EditorShaderArtifactValidationSnapshot in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.179ea54eb9298d00
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorShaderArtifactValidationSnapshot`

This reference describes `EditorShaderArtifactValidationSnapshot` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ff2fe0af67326ab4) | Method |
| [`Deconstruct`](#api-eac00120da802ec8) | Method |
| [`Equals`](#api-01845fec87cd22c9) | Method |
| [`Equals`](#api-4bb0949e69a1a4df) | Method |
| [`GetHashCode`](#api-e087f1ad6e517a8e) | Method |
| [`op_Equality`](#api-4ed67602c6c9f7e8) | Method |
| [`op_Inequality`](#api-edec9a51d003e83b) | Method |
| [`ToString`](#api-14b0f6603da8cc9a) | Method |
| [`diagnostics`](#api-f9a64642330692e9) | Property |
| [`state`](#api-ed27807ebfc132e8) | Property |

## Type declaration

<a id="api-179ea54eb9298d00"></a>
<!-- api: T:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot d98a5b8aba9a8ebe0dd6153583c59a61f4f31fa56bb52d4674cb471773a375f2 -->

```csharp
public sealed record Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot : System.IEquatable<Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot>
```

Contains active-device validation state for one immutable Editor shader candidate.

**Parameter `state`:** Pending, successful, or failed validation state.

**Parameter `diagnostics`:** Detached device validation diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `#ctor`

<a id="api-ff2fe0af67326ab4"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}) 70c42da6a7456cbe5a46edd62e10b4c9e514a2432aa1be65655cb63f82158935 -->

```csharp
public Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.EditorShaderArtifactValidationSnapshot(Inno.Editor.Rendering.EditorShaderCompilationState state, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics)
```

Contains active-device validation state for one immutable Editor shader candidate.

**Parameter `state`:** Pending, successful, or failed validation state.

**Parameter `diagnostics`:** Detached device validation diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `Deconstruct`

<a id="api-eac00120da802ec8"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.Deconstruct(Inno.Editor.Rendering.EditorShaderCompilationState@,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}@) e1b9694805b445220ca022203b3e87c32b639646a2b3c406710c07c914db8402 -->

```csharp
public void Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.Deconstruct(out Inno.Editor.Rendering.EditorShaderCompilationState state, out System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `Equals`

<a id="api-01845fec87cd22c9"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.Equals(Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot) 0c1df77e2ab06c28b01b4adf5bfaf8fa2ddc966dbefb0d9debb8542ce23da7f3 -->

```csharp
public bool Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.Equals(Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `Equals`

<a id="api-4bb0949e69a1a4df"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.Equals(System.Object) e9fdcc6f66a18d511db90948062ed25076dc631a5124edc5d83b2d27461f69ee -->

```csharp
public override bool Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `GetHashCode`

<a id="api-e087f1ad6e517a8e"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.GetHashCode b00558683d8e0ccde5abfc82391708c5d6e5d58e493e8d74cad5c4b3ae8929b6 -->

```csharp
public override int Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `op_Equality`

<a id="api-4ed67602c6c9f7e8"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.op_Equality(Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot,Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot) 09477d78352ad7bdc442b55b45dcc87b92bec5ae2bd7f05273a253ef62365b6b -->

```csharp
public static bool Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.operator ==(Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot? left, Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `op_Inequality`

<a id="api-edec9a51d003e83b"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.op_Inequality(Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot,Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot) ee97db510075e6143debe9df6aac298956a7b5ce47c010535ec9c6d0947a4aae -->

```csharp
public static bool Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.operator !=(Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot? left, Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `ToString`

<a id="api-14b0f6603da8cc9a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.ToString 89f711a6c1d1513bf67bb65b48aa1b9f0d808fe39545b819212ba3dc795a0fa1 -->

```csharp
public override string Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L17).

## `diagnostics`

<a id="api-f9a64642330692e9"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.diagnostics e0604888917287374cd11acd157ec1b0c1edbade43f41a412b705e359139db25 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.diagnostics { get; init; }
```

Detached device validation diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L19).

## `state`

<a id="api-ed27807ebfc132e8"></a>
<!-- api: P:Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.state 104ddece971d6c39ece17cac12f7863b19cde05de3a300396f16718724de2b49 -->

```csharp
public Inno.Editor.Rendering.EditorShaderCompilationState Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot.state { get; init; }
```

Pending, successful, or failed validation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L18).
