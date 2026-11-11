---
title: "EditorAssets"
description: "Reference for EditorAssets in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.e392a6b824367ec4
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `EditorAssets`

This reference describes `EditorAssets` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```CaptureProperties``1```](#api-087ccdf73ef8b660) | Method |
| [```DecodeNative``1```](#api-5dba5546ea453eca) | Method |
| [`EncodeNative`](#api-1a14c320586b8733) | Method |
| [`Save`](#api-364be6e49e3f46d2) | Method |

## Type declaration

<a id="api-e392a6b824367ec4"></a>
<!-- api: T:Inno.Assets.Pipeline.EditorAssets 559ba38c4475a898b20c22b25dee92e0eacea014baf1269784d9d361444363dc -->

```csharp
public static class Inno.Assets.Pipeline.EditorAssets
```

Provides Editor-script asset mutations through the authoring pipeline bound by the current host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L11).

## ```CaptureProperties``1```

<a id="api-087ccdf73ef8b660"></a>
<!-- api: M:Inno.Assets.Pipeline.EditorAssets.CaptureProperties``1(``0) 4b4350b67f0215813bce19957968520d405ede82ece6c9624baf6f2f034b0032 -->

```csharp
public static Inno.Assets.AssetPropertySnapshot Inno.Assets.Pipeline.EditorAssets.CaptureProperties<TValue>(TValue value) where TValue : class, Inno.Core.Serialization.ISerializable
```

Captures reload-safe settings using the currently bound authoring owner's converters and references.

**Type parameter `TValue`:** Current serializable settings type.

**Parameter `value`:** Settings to capture without saving or mutating their referenced assets.

**Returns:** Native properties, stable type identity and automatically collected dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L64).

## ```DecodeNative``1```

<a id="api-5dba5546ea453eca"></a>
<!-- api: M:Inno.Assets.Pipeline.EditorAssets.DecodeNative``1(System.Byte[]) ba90d76c7f664d60c563018e0c21a831ebf96b301aa114ff396e0a6dedc3c028 -->

```csharp
public static TAsset Inno.Assets.Pipeline.EditorAssets.DecodeNative<TAsset>(byte[] bytes) where TAsset : Inno.Assets.AssetObject
```

Decodes detached native asset bytes with the current authoring pipeline's converters and reference context.

**Type parameter `TAsset`:** Expected native asset type.

**Parameter `bytes`:** Bytes previously produced by the native asset source codec.

**Returns:** A detached asset value that can be edited without publishing it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L43).

## `EncodeNative`

<a id="api-1a14c320586b8733"></a>
<!-- api: M:Inno.Assets.Pipeline.EditorAssets.EncodeNative(Inno.Assets.AssetObject) ecb91379718418b3b7c005cc17cbdc721dc2091bcdbd4b3e3096a0acbc736a9b -->

```csharp
public static byte[] Inno.Assets.Pipeline.EditorAssets.EncodeNative(Inno.Assets.AssetObject asset)
```

Encodes a detached native asset with the current authoring pipeline's converters and reference context.

**Parameter `asset`:** Complete detached value to encode without saving or importing it.

**Returns:** Reload-safe native asset bytes suitable for draft state and History payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L22).

## `Save`

<a id="api-364be6e49e3f46d2"></a>
<!-- api: M:Inno.Assets.Pipeline.EditorAssets.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject) 195c15a6f4cf6f43cbd0985bc4d5a77a501b68fd6b56a650dff977c9c1b5b983 -->

```csharp
public static bool Inno.Assets.Pipeline.EditorAssets.Save(Inno.Assets.AssetPath path, Inno.Assets.AssetObject asset)
```

Creates or replaces a writable project asset source and imports the committed result.

**Parameter `path`:** The writable project asset path.

**Parameter `asset`:** The complete source value to persist. Saving over an existing source retains that source's persistent identity.

**Returns:** `true` when the source was committed and imported successfully.

**Throws `System.ArgumentNullException`:** Thrown when `asset` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the current execution context is not bound to an authoring asset pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/EditorAssets.cs#L88).
