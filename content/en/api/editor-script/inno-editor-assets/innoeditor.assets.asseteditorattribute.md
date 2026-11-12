---
title: "AssetEditorAttribute"
description: "Reference for AssetEditorAttribute in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.a7b0a0a310c273d5
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetEditorAttribute`

This reference describes `AssetEditorAttribute` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1c4431172cc9ef54) | Method |
| [`assetType`](#api-a3d0a8ceb20ef4f0) | Property |
| [`priority`](#api-10ba139e1f0eebd2) | Property |
| [`useForChildren`](#api-a8f57fdef32511fd) | Property |

## Type declaration

<a id="api-a7b0a0a310c273d5"></a>
<!-- api: T:InnoEditor.Assets.AssetEditorAttribute 1908365a603866d39d1727756b34ff788520153fdc428035c538ec6a8c6c7784 -->

```csharp
public sealed class InnoEditor.Assets.AssetEditorAttribute : System.Attribute
```

Associates an asset editor with an imported asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L8).

## `#ctor`

<a id="api-1c4431172cc9ef54"></a>
<!-- api: M:InnoEditor.Assets.AssetEditorAttribute.#ctor(System.Type,System.Boolean,System.Int32) c628fca410042d5aa70c0468b6455286f0b85fd505ac20ae74cb3aa7649e0a8b -->

```csharp
public InnoEditor.Assets.AssetEditorAttribute.AssetEditorAttribute(System.Type assetType, bool useForChildren = false, int priority = 0)
```

Creates an asset-editor registration for an imported runtime asset type.

**Parameter `assetType`:** The imported asset type handled by the editor.

**Parameter `useForChildren`:** Whether the editor may also handle assignable derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Throws `System.ArgumentNullException`:** Thrown when `assetType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L25).

## `assetType`

<a id="api-a3d0a8ceb20ef4f0"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorAttribute.assetType c8b7760882d040d3ae10af759d3ceb913b6eea2111bbe178b06531f8a65a7477 -->

```csharp
public System.Type InnoEditor.Assets.AssetEditorAttribute.assetType { get; }
```

Gets the imported asset type handled by the editor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L38).

## `priority`

<a id="api-10ba139e1f0eebd2"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorAttribute.priority f02ca160e28b9937511c88702e71124f198a24bbff3595af9e0bd801a5fc77fd -->

```csharp
public int InnoEditor.Assets.AssetEditorAttribute.priority { get; }
```

Gets the tie-breaking priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L46).

## `useForChildren`

<a id="api-a8f57fdef32511fd"></a>
<!-- api: P:InnoEditor.Assets.AssetEditorAttribute.useForChildren 8eaccb5de558e59cb11359eb0822de4c0f18c2834e381bcee087ba9f348ce652 -->

```csharp
public bool InnoEditor.Assets.AssetEditorAttribute.useForChildren { get; }
```

Gets whether derived asset types are accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditorAttribute.cs#L42).
