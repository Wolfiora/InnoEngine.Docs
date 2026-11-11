---
title: "AssetEditor"
description: "Reference for AssetEditor in Inno.Editor.Assets."
uid: api.inno.editor.assets.5c488adfd681c908
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetEditor`

This reference describes `AssetEditor` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-17ac170374826ad7) | Method |
| [`CanOpen`](#api-6ea72eed5ad5e5a4) | Method |
| [`CanStartDrag`](#api-13bae727ca0171db) | Method |
| [`CreateDragData`](#api-c254ff7f5cbf0af4) | Method |
| [`OnDeleted`](#api-2104fc3634d46203) | Method |
| [`OnRenamed`](#api-ccec27ef9e34a870) | Method |
| [`Open`](#api-7e5674d95bd29f89) | Method |
| [`ValidateDelete`](#api-586eea434f8d75e5) | Method |
| [`ValidateRename`](#api-67cc107d92086b31) | Method |

## Type declaration

<a id="api-5c488adfd681c908"></a>
<!-- api: T:Inno.Editor.Assets.AssetEditor c71b63fdc1ac54d736bc4d3119355d0c2e20d2db7cf9fdf848c353258e74dc13 -->

```csharp
public abstract class Inno.Editor.Assets.AssetEditor
```

Customizes editor interactions for one imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L7).

## `#ctor`

<a id="api-17ac170374826ad7"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.#ctor 13a05c50225d947ad16fdbfa8ff078c2ee092fb5e736ca27f8a27c4d0562bf57 -->

```csharp
protected Inno.Editor.Assets.AssetEditor.AssetEditor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L7).

## `CanOpen`

<a id="api-6ea72eed5ad5e5a4"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.CanOpen(Inno.Editor.Assets.AssetEditorContext) 7b906801359b13ed32e3c5b5fc136481b38d2e92133247db945eabee4d70cffa -->

```csharp
public virtual bool Inno.Editor.Assets.AssetEditor.CanOpen(Inno.Editor.Assets.AssetEditorContext context)
```

Gets whether the fallback asset editor can open the supplied source entry.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.

**Returns:** `true` when `Inno.Editor.Assets.AssetEditor.Open(Inno.Editor.Assets.AssetEditorContext)` can handle the entry; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L18).

## `CanStartDrag`

<a id="api-13bae727ca0171db"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.CanStartDrag(Inno.Editor.Assets.AssetEditorContext) 5783dbb38e6df273100db89c725829f6c5fddce9b4e70dc9fb57986735b3309f -->

```csharp
public virtual bool Inno.Editor.Assets.AssetEditor.CanStartDrag(Inno.Editor.Assets.AssetEditorContext context)
```

Gets whether the supplied entry can begin a managed editor drag operation.

**Parameter `context`:** The immutable source and catalog snapshot for the entry.

**Returns:** `true` when drag data can be created; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L93).

## `CreateDragData`

<a id="api-c254ff7f5cbf0af4"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.CreateDragData(Inno.Editor.Assets.AssetEditorContext) 22e6970f44cefd89a36c28e050b7f1d533d551dc6f0811b3e4d397c75fc0d0fc -->

```csharp
public virtual Inno.Editor.Interactions.EditorDragData Inno.Editor.Assets.AssetEditor.CreateDragData(Inno.Editor.Assets.AssetEditorContext context)
```

Creates the managed source, preview label, and validity predicate for an asset drag.

**Parameter `context`:** The immutable source and catalog snapshot for the entry.

**Returns:** The managed drag data published by the Asset Browser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L103).

## `OnDeleted`

<a id="api-2104fc3634d46203"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.OnDeleted(Inno.Editor.Assets.AssetEditorContext) 6b6e4dd166a3d8acda19fc82eb0bacc9c8ad2f62c9ac004381910aae21b3a43f -->

```csharp
public virtual void Inno.Editor.Assets.AssetEditor.OnDeleted(Inno.Editor.Assets.AssetEditorContext context)
```

Runs after an asset deletion transaction commits successfully.

**Parameter `context`:** The immutable snapshot captured before the entry was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L80).

## `OnRenamed`

<a id="api-ccec27ef9e34a870"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.OnRenamed(Inno.Editor.Assets.AssetEditorContext,System.String,System.String) 9654ab7eb2b9ed03d189610b06e5a3059957d5a10407f1df354406991f178e19 -->

```csharp
public virtual void Inno.Editor.Assets.AssetEditor.OnRenamed(Inno.Editor.Assets.AssetEditorContext context, string oldPath, string newPath)
```

Runs after an asset move transaction commits successfully.

**Parameter `context`:** The immutable snapshot captured before the move.

**Parameter `oldPath`:** The previous source-relative path.

**Parameter `newPath`:** The committed source-relative destination path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L57).

## `Open`

<a id="api-7e5674d95bd29f89"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.Open(Inno.Editor.Assets.AssetEditorContext) aa4fac2613e2a60574bbbdbe8bedc890b261642f0c198b21fb2f232a1f0e54fb -->

```csharp
public virtual void Inno.Editor.Assets.AssetEditor.Open(Inno.Editor.Assets.AssetEditorContext context)
```

Opens the supplied asset entry when no more specific typed open action handled it.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L25).

## `ValidateDelete`

<a id="api-586eea434f8d75e5"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.ValidateDelete(Inno.Editor.Assets.AssetEditorContext) 4cdd6e1c96a171c64f7eaff7f50fd2b19b884feac4108099a049a670421eee92 -->

```csharp
public virtual Inno.Editor.Assets.AssetOperationValidation Inno.Editor.Assets.AssetEditor.ValidateDelete(Inno.Editor.Assets.AssetEditorContext context)
```

Validates a requested asset deletion before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the entry that would be deleted.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L73).

## `ValidateRename`

<a id="api-67cc107d92086b31"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditor.ValidateRename(Inno.Editor.Assets.AssetEditorContext,System.String) bf66adc0b7be7860e23a0f8abf31db7d98035366d2b999552f992847f373e884 -->

```csharp
public virtual Inno.Editor.Assets.AssetOperationValidation Inno.Editor.Assets.AssetEditor.ValidateRename(Inno.Editor.Assets.AssetEditorContext context, string targetPath)
```

Validates a requested asset move before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the source entry before the move.

**Parameter `targetPath`:** The normalized source-relative destination path.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L41).
