---
title: "AssetImportSettingsSnapshot"
description: "Reference for AssetImportSettingsSnapshot in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.27e09848d9f10ff4
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImportSettingsSnapshot`

This reference describes `AssetImportSettingsSnapshot` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`fingerprint`](#api-c560125a872a5e56) | Property |
| [`value`](#api-598830c1705f999b) | Property |

## Type declaration

<a id="api-27e09848d9f10ff4"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImportSettingsSnapshot ba2c7150a1d3c92b53d61ed7a2e8b36312373260746f24f1533d9de0d7d2f26f -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetImportSettingsSnapshot
```

Provides a detached settings value and an optimistic concurrency token for its source sidecar.

**Constraints:** The value belongs to the current importer generation. Editors must retain neutral serialized state,
not this instance, across extension reloads. Reading this snapshot never edits source metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportSettingsSnapshot.cs#L12).

## `fingerprint`

<a id="api-c560125a872a5e56"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportSettingsSnapshot.fingerprint 20c97e67eb43ccb52cf188d02092f45891cd060bd182a9cecdf2f5c35824e3d8 -->

```csharp
public string Inno.Assets.Pipeline.AssetImportSettingsSnapshot.fingerprint { get; }
```

Gets the source metadata fingerprint required when saving this copy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportSettingsSnapshot.cs#L30).

## `value`

<a id="api-598830c1705f999b"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportSettingsSnapshot.value 85b2600af43b900cd90767f099a8e2dec1e63c665b2a8dabe2cced5c2de13226 -->

```csharp
public Inno.Core.Serialization.ISerializable? Inno.Assets.Pipeline.AssetImportSettingsSnapshot.value { get; }
```

Gets the editable settings copy, or null for an importer without settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportSettingsSnapshot.cs#L25).
