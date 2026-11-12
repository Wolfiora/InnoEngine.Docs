---
title: "AssetEditor"
description: "Reference for AssetEditor in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.db575002865231b9
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetEditor`

This reference describes `AssetEditor` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-35d8b3d34fa1ca9c) | Method |
| [`CanOpen`](#api-fffabe8280a767f0) | Method |
| [`CanStartDrag`](#api-3a7c00f0ea15ebc1) | Method |
| [`CreateDragData`](#api-d9d13016a29dd8f1) | Method |
| [`OnDeleted`](#api-3fcdfee75d6c5b8a) | Method |
| [`OnRenamed`](#api-fd2e99ff28f78670) | Method |
| [`Open`](#api-2bd211b7fa1f7c11) | Method |
| [`ValidateDelete`](#api-33406cd96af8ddca) | Method |
| [`ValidateRename`](#api-7d1798892329ec84) | Method |

## Type declaration

<a id="api-db575002865231b9"></a>
<!-- api: T:InnoEditor.Assets.AssetEditor 91d9a5765b15bbd556cbd3df4e21e36fd5acf9634937b6751e7875ec7d1d6f2c -->

```csharp
public abstract class InnoEditor.Assets.AssetEditor
```

Customizes editor interactions for one imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L7).

## `#ctor`

<a id="api-35d8b3d34fa1ca9c"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.#ctor 37cc39fbe946e0171a327816052cd6c486dde31d2b534627122f1c526c2c699f -->

```csharp
protected InnoEditor.Assets.AssetEditor.AssetEditor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L7).

## `CanOpen`

<a id="api-fffabe8280a767f0"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.CanOpen(InnoEditor.Assets.AssetEditorContext) ccdf5d1ab041675ab02f803d7306a5e04bf3aa0b96ea8e853673285489cc0941 -->

```csharp
public virtual bool InnoEditor.Assets.AssetEditor.CanOpen(InnoEditor.Assets.AssetEditorContext context)
```

Gets whether the fallback asset editor can open the supplied source entry.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.

**Returns:** `true` when `InnoEditor.Assets.AssetEditor.Open(InnoEditor.Assets.AssetEditorContext)` can handle the entry; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L18).

## `CanStartDrag`

<a id="api-3a7c00f0ea15ebc1"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.CanStartDrag(InnoEditor.Assets.AssetEditorContext) 853320fe88e92820323e891a72017524b8552dcca3c55e150da84e11cad16410 -->

```csharp
public virtual bool InnoEditor.Assets.AssetEditor.CanStartDrag(InnoEditor.Assets.AssetEditorContext context)
```

Gets whether the supplied entry can begin a managed editor drag operation.

**Parameter `context`:** The immutable source and catalog snapshot for the entry.

**Returns:** `true` when drag data can be created; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L93).

## `CreateDragData`

<a id="api-d9d13016a29dd8f1"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.CreateDragData(InnoEditor.Assets.AssetEditorContext) 05144fa05807b6ba988557807e813f2801e95cd9938e90cad300712b2b5cb75e -->

```csharp
public virtual InnoEditor.Interactions.EditorDragData InnoEditor.Assets.AssetEditor.CreateDragData(InnoEditor.Assets.AssetEditorContext context)
```

Creates the managed source, preview label, and validity predicate for an asset drag.

**Parameter `context`:** The immutable source and catalog snapshot for the entry.

**Returns:** The managed drag data published by the Asset Browser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L103).

## `OnDeleted`

<a id="api-3fcdfee75d6c5b8a"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.OnDeleted(InnoEditor.Assets.AssetEditorContext) b4d8734f4dbbafbc1503ca6778e1e2b147c8166e4db8da9defea953a9c01ac5c -->

```csharp
public virtual void InnoEditor.Assets.AssetEditor.OnDeleted(InnoEditor.Assets.AssetEditorContext context)
```

Runs after an asset deletion transaction commits successfully.

**Parameter `context`:** The immutable snapshot captured before the entry was deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L80).

## `OnRenamed`

<a id="api-fd2e99ff28f78670"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.OnRenamed(InnoEditor.Assets.AssetEditorContext,System.String,System.String) f8d6397d2b6210117b5bd0dc35b862151c561f7fa05cca58ccbd65d833e9657a -->

```csharp
public virtual void InnoEditor.Assets.AssetEditor.OnRenamed(InnoEditor.Assets.AssetEditorContext context, string oldPath, string newPath)
```

Runs after an asset move transaction commits successfully.

**Parameter `context`:** The immutable snapshot captured before the move.

**Parameter `oldPath`:** The previous source-relative path.

**Parameter `newPath`:** The committed source-relative destination path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L57).

## `Open`

<a id="api-2bd211b7fa1f7c11"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.Open(InnoEditor.Assets.AssetEditorContext) 58f92f6c238854123722ec80bc26fd34ba399799e56346aa0ce602d6f0e395d8 -->

```csharp
public virtual void InnoEditor.Assets.AssetEditor.Open(InnoEditor.Assets.AssetEditorContext context)
```

Opens the supplied asset entry when no more specific typed open action handled it.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L25).

## `ValidateDelete`

<a id="api-33406cd96af8ddca"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.ValidateDelete(InnoEditor.Assets.AssetEditorContext) 13248a3438b0c956aee26625d7c7ea90837b188bc13a176a64da506e330f0069 -->

```csharp
public virtual InnoEditor.Assets.AssetOperationValidation InnoEditor.Assets.AssetEditor.ValidateDelete(InnoEditor.Assets.AssetEditorContext context)
```

Validates a requested asset deletion before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the entry that would be deleted.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L73).

## `ValidateRename`

<a id="api-7d1798892329ec84"></a>
<!-- api: M:InnoEditor.Assets.AssetEditor.ValidateRename(InnoEditor.Assets.AssetEditorContext,System.String) 6afd7d9dbc7a4228a14877c52a73a0de858aa48a9b7c0c07df04ed57abc3843d -->

```csharp
public virtual InnoEditor.Assets.AssetOperationValidation InnoEditor.Assets.AssetEditor.ValidateRename(InnoEditor.Assets.AssetEditorContext context, string targetPath)
```

Validates a requested asset move before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the source entry before the move.

**Parameter `targetPath`:** The normalized source-relative destination path.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditor.cs#L41).
