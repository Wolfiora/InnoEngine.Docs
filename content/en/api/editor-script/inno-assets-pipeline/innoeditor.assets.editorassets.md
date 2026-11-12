---
title: "EditorAssets"
description: "Reference for EditorAssets in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.4aebbd26f3c1cba4
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `EditorAssets`

This reference describes `EditorAssets` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```CaptureProperties``1```](#api-8bfa75963dbc1192) | Method |
| [```DecodeNative``1```](#api-c52bb91c6b04685a) | Method |
| [`EncodeNative`](#api-673151c59f8ff95b) | Method |
| [`Save`](#api-fdd2a6d761cafdf4) | Method |

## Type declaration

<a id="api-4aebbd26f3c1cba4"></a>
<!-- api: T:InnoEditor.Assets.EditorAssets f8434e1e0f1fd19378e787ef8c9d6900e879ceb139117329399058b39aec8eb2 -->

```csharp
public static class InnoEditor.Assets.EditorAssets
```

Provides Editor-script asset mutations through the authoring pipeline bound by the current host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L11).

## ```CaptureProperties``1```

<a id="api-8bfa75963dbc1192"></a>
<!-- api: M:InnoEditor.Assets.EditorAssets.CaptureProperties``1(``0) 97cd220f8fe7c3f3f6aee4990be8a246dbb3d19433df5b0783f3a63dfeff015a -->

```csharp
public static InnoEngine.Assets.AssetPropertySnapshot InnoEditor.Assets.EditorAssets.CaptureProperties<TValue>(TValue value) where TValue : class, InnoEngine.Serialization.ISerializable
```

Captures reload-safe settings using the currently bound authoring owner's converters and references.

**Type parameter `TValue`:** Current serializable settings type.

**Parameter `value`:** Settings to capture without saving or mutating their referenced assets.

**Returns:** Native properties, stable type identity and automatically collected dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L64).

## ```DecodeNative``1```

<a id="api-c52bb91c6b04685a"></a>
<!-- api: M:InnoEditor.Assets.EditorAssets.DecodeNative``1(System.Byte[]) 84a6bc40822dc409af5b51f2ad24b88edf938c119a7c75942c058fcf7978a2d5 -->

```csharp
public static TAsset InnoEditor.Assets.EditorAssets.DecodeNative<TAsset>(byte[] bytes) where TAsset : InnoEngine.Assets.AssetObject
```

Decodes detached native asset bytes with the current authoring pipeline's converters and reference context.

**Type parameter `TAsset`:** Expected native asset type.

**Parameter `bytes`:** Bytes previously produced by the native asset source codec.

**Returns:** A detached asset value that can be edited without publishing it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L43).

## `EncodeNative`

<a id="api-673151c59f8ff95b"></a>
<!-- api: M:InnoEditor.Assets.EditorAssets.EncodeNative(InnoEngine.Assets.AssetObject) ce27d26b4d7da765af5c8d31b08b2e32edcd92d6e716970abffaa9143019a94a -->

```csharp
public static byte[] InnoEditor.Assets.EditorAssets.EncodeNative(InnoEngine.Assets.AssetObject asset)
```

Encodes a detached native asset with the current authoring pipeline's converters and reference context.

**Parameter `asset`:** Complete detached value to encode without saving or importing it.

**Returns:** Reload-safe native asset bytes suitable for draft state and History payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L22).

## `Save`

<a id="api-fdd2a6d761cafdf4"></a>
<!-- api: M:InnoEditor.Assets.EditorAssets.Save(InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetObject) 76cb75c82e4d6f0be16f9635995424aadc952e8eee92d3036d4a43130dfb526e -->

```csharp
public static bool InnoEditor.Assets.EditorAssets.Save(InnoEngine.Assets.AssetPath path, InnoEngine.Assets.AssetObject asset)
```

Creates or replaces a writable project asset source and imports the committed result.

**Parameter `path`:** The writable project asset path.

**Parameter `asset`:** The complete source value to persist. Saving over an existing source retains that source's persistent identity.

**Returns:** `true` when the source was committed and imported successfully.

**Throws `System.ArgumentNullException`:** Thrown when `asset` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the current execution context is not bound to an authoring asset pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L88).
