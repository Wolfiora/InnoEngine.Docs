---
title: "AssetExportContext"
description: "Reference for AssetExportContext in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.fd2c877062cd8860
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetExportContext`

This reference describes `AssetExportContext` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-da7fffe9844d6037) | Method |
| [`serialization`](#api-0b574bd1c0fc8342) | Property |
| [`services`](#api-8dee1682f7d514f8) | Property |

## Type declaration

<a id="api-fd2c877062cd8860"></a>
<!-- api: T:InnoEditor.Assets.AssetExportContext 0e4c63550f98bcf8564d339eacbccfbdd6c99901ae73b5ca0e2142540336637f -->

```csharp
public sealed class InnoEditor.Assets.AssetExportContext
```

Provides generation-bound services for one editable asset source export.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L12).

## `#ctor`

<a id="api-da7fffe9844d6037"></a>
<!-- api: M:InnoEditor.Assets.AssetExportContext.#ctor 6cee9debc26dee4b80b63c4bff5c0b532a180ff64dbf1259d54ffd12b1f41acd -->

```csharp
public InnoEditor.Assets.AssetExportContext.AssetExportContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L12).

## `serialization`

<a id="api-0b574bd1c0fc8342"></a>
<!-- api: P:InnoEditor.Assets.AssetExportContext.serialization 6bcd1d4aab2cdc7cd1c6a45bf067feea9a2ccdf49ab5bf89c77e7aa2cb2a8880 -->

```csharp
public InnoEngine.Serialization.SerializationRegistry InnoEditor.Assets.AssetExportContext.serialization { get; }
```

Gets the serialization registry bound to the active export generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L35).

## `services`

<a id="api-8dee1682f7d514f8"></a>
<!-- api: P:InnoEditor.Assets.AssetExportContext.services fca03e8a81ff0d2479eafd80b25f2ba52009de2fc6abe3ef8c05b14a1d81c232 -->

```csharp
public InnoEditor.Assets.AssetSerializationServices InnoEditor.Assets.AssetExportContext.services { get; }
```

Gets the narrow structured serialization API bound to this export generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetExportContext.cs#L40).
