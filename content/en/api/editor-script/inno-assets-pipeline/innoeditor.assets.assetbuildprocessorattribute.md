---
title: "AssetBuildProcessorAttribute"
description: "Reference for AssetBuildProcessorAttribute in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.5bbb4ab909c9df5f
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetBuildProcessorAttribute`

This reference describes `AssetBuildProcessorAttribute` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bb330cdc530f9a4f) | Method |
| [`id`](#api-4c2a6f9ac57e814f) | Property |

## Type declaration

<a id="api-5bbb4ab909c9df5f"></a>
<!-- api: T:InnoEditor.Assets.AssetBuildProcessorAttribute f06be30be6d691ebb135ced2b5c3a463885f4b6e27b45d8d90f4e8a90a96d508 -->

```csharp
public sealed class InnoEditor.Assets.AssetBuildProcessorAttribute : System.Attribute
```

Declares the immutable cache protocol identity of an automatically discovered asset build processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L14).

## `#ctor`

<a id="api-bb330cdc530f9a4f"></a>
<!-- api: M:InnoEditor.Assets.AssetBuildProcessorAttribute.#ctor(System.String) 74da9d7127374a6390dc718850f43e93832dec1329b0583ba28da72c28934502 -->

```csharp
public InnoEditor.Assets.AssetBuildProcessorAttribute.AssetBuildProcessorAttribute(string id)
```

Creates build-processor discovery metadata.

**Parameter `id`:** Globally stable build processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L22).

## `id`

<a id="api-4c2a6f9ac57e814f"></a>
<!-- api: P:InnoEditor.Assets.AssetBuildProcessorAttribute.id eec7e63483213bc8d81e8254a5e0b8371711c67930af22a89f6aa213a8c7b41a -->

```csharp
public string InnoEditor.Assets.AssetBuildProcessorAttribute.id { get; }
```

Gets the globally stable build processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L31).
