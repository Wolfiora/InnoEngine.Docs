---
title: "EditorShaderDraftCompilationSnapshot"
description: "Reference for EditorShaderDraftCompilationSnapshot in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.2d0fd9bc539e6b00
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorShaderDraftCompilationSnapshot`

This reference describes `EditorShaderDraftCompilationSnapshot` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-07ebb607a4036cd2) | Method |
| [`Deconstruct`](#api-03e35aaab91a3c95) | Method |
| [`Equals`](#api-7d875098fd24c565) | Method |
| [`Equals`](#api-febf7ed9acc546d4) | Method |
| [`GetHashCode`](#api-b8d7c8c9006eedaf) | Method |
| [`op_Equality`](#api-655504f812a1c488) | Method |
| [`op_Inequality`](#api-9caf2d6a8c824276) | Method |
| [`ToString`](#api-9aa4d2c3fc5f7bd8) | Method |
| [`artifact`](#api-b80db7de4e5af5cc) | Property |
| [`diagnostics`](#api-2a75260b8805beab) | Property |
| [`state`](#api-1b0494ebcfd8c449) | Property |
| [`usingLastGood`](#api-03c1d493af18885b) | Property |

## Type declaration

<a id="api-2d0fd9bc539e6b00"></a>
<!-- api: T:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot 2c156e0ad2b1d58af0d479c3f8ddd786d37afe574a23b4148a4cc8cc26dab976 -->

```csharp
public sealed class InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot : System.IEquatable<InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot>
```

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `#ctor`

<a id="api-07ebb607a4036cd2"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(InnoEditor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.ShaderDiagnostic},InnoEngine.Rendering.RenderShaderArtifact) ef5fc892deba1ffb577c6f59cdea3b35c6a5fe52b0328632e53d139cb8ad9e3a -->

```csharp
public InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.EditorShaderDraftCompilationSnapshot(InnoEditor.Rendering.EditorShaderCompilationState state, bool usingLastGood, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ShaderDiagnostic> diagnostics, InnoEngine.Rendering.RenderShaderArtifact? artifact)
```

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `Deconstruct`

<a id="api-03e35aaab91a3c95"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.Deconstruct(InnoEditor.Rendering.EditorShaderCompilationState@,System.Boolean@,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.ShaderDiagnostic}@,InnoEngine.Rendering.RenderShaderArtifact@) 42e3c643475fffc2a684d475db5174f69e19b7418d37a53058ff0bd6c4f62570 -->

```csharp
public void InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.Deconstruct(out InnoEditor.Rendering.EditorShaderCompilationState state, out bool usingLastGood, out System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ShaderDiagnostic> diagnostics, out InnoEngine.Rendering.RenderShaderArtifact? artifact)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `Equals`

<a id="api-7d875098fd24c565"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot) 66210fc8cf8ef578116ea0a25174544b2acce26a7b50b2c5bba10219b8bc8a33 -->

```csharp
public bool InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `Equals`

<a id="api-febf7ed9acc546d4"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(System.Object) b850d294c7fddb4eda8c6a3161e631a23a876017ded2c8181f4c3c2cfbe51631 -->

```csharp
public override bool InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `GetHashCode`

<a id="api-b8d7c8c9006eedaf"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.GetHashCode bb81e6a32c226af4ae3df58c4fc208afd110c35170caafdc4b866376d5a1d043 -->

```csharp
public override int InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `op_Equality`

<a id="api-655504f812a1c488"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.op_Equality(InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot,InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot) 0974365ddbf99f3c67ddfa3fb7dede81965e18b7fee32eb86c3771bfc7ba4a3e -->

```csharp
public static bool InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.operator ==(InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot? left, InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `op_Inequality`

<a id="api-9caf2d6a8c824276"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.op_Inequality(InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot,InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot) dc28e7f0f098830aec3667ab35984804491944bc95ee9c25a6b1b81bd5adecf4 -->

```csharp
public static bool InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.operator !=(InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot? left, InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `ToString`

<a id="api-9aa4d2c3fc5f7bd8"></a>
<!-- api: M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.ToString cef56264a12f33653c2e4c734e09cab78905ff9ff1acf74a3696ffbfdd9afd73 -->

```csharp
public override string InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L62).

## `artifact`

<a id="api-b80db7de4e5af5cc"></a>
<!-- api: P:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.artifact 7986ca91351b2e77e477ba623e4b9b1c3d4e1a09d843ece8550893729472b2db -->

```csharp
public InnoEngine.Rendering.RenderShaderArtifact? InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.artifact { get; set; }
```

Preview-only complete shader candidate, or null before the first success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L66).

## `diagnostics`

<a id="api-2a75260b8805beab"></a>
<!-- api: P:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.diagnostics 9dd39f13defa07a9f8d85795eff30056727e5c4f31727d9bf6a695a1034a194a -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ShaderDiagnostic> InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.diagnostics { get; set; }
```

Latest detached preview diagnostics, separate from project diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L65).

## `state`

<a id="api-1b0494ebcfd8c449"></a>
<!-- api: P:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.state e22a7a4ecf688529370040222495ffa004518e2c5524c97178bca75cfd822619 -->

```csharp
public InnoEditor.Rendering.EditorShaderCompilationState InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.state { get; set; }
```

Latest draft compilation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L63).

## `usingLastGood`

<a id="api-03c1d493af18885b"></a>
<!-- api: P:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.usingLastGood bd47be886ffc3ca43f99cceccbc254558feea5f0cbd63a08756f3cc4e0e048b1 -->

```csharp
public bool InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.usingLastGood { get; set; }
```

Whether the preview artifact belongs to an earlier successful draft.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderCompilation.cs#L64).
