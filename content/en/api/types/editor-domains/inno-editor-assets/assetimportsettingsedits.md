---
title: "AssetImportSettingsEdits"
description: "Reference for AssetImportSettingsEdits in Inno.Editor.Assets."
uid: api.inno.editor.assets.bb29963e7b7b9871
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetImportSettingsEdits`

This reference describes `AssetImportSettingsEdits` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-83a3562a1aee14e3) | Method |
| [`Apply`](#api-319970551a9a1bda) | Method |

## Type declaration

<a id="api-bb29963e7b7b9871"></a>
<!-- api: T:Inno.Editor.Assets.AssetImportSettingsEdits 186a666d0af09e005517f1eb435643d19cc0eab6d860672ca89832b6823f33ee -->

```csharp
public sealed class Inno.Editor.Assets.AssetImportSettingsEdits : Inno.Editor.Core.EditorModule
```

Applies importer configuration through the common sidecar pipeline and stable-identity Editor history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/ImportSettings/AssetImportSettingsEdits.cs#L15).

## `#ctor`

<a id="api-83a3562a1aee14e3"></a>
<!-- api: M:Inno.Editor.Assets.AssetImportSettingsEdits.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,Inno.Editor.Interactions.EditorInteractions) 5a9276b78d5165997b9ee01328a3fbb2962b82f0e914e06f6b7858f402710a1b -->

```csharp
public Inno.Editor.Assets.AssetImportSettingsEdits.AssetImportSettingsEdits(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types, Inno.Editor.Interactions.EditorInteractions interactions)
```

Uses the authoring owners responsible for source identity, converter generations and shared undo.

**Parameter `assets`:** Authoritative asset pipeline.

**Parameter `serialization`:** Current owner converter registry.

**Parameter `types`:** Current type generation owner.

**Parameter `interactions`:** Shared Editor history owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/ImportSettings/AssetImportSettingsEdits.cs#L38).

## `Apply`

<a id="api-319970551a9a1bda"></a>
<!-- api: M:Inno.Editor.Assets.AssetImportSettingsEdits.Apply(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String) 7271e6e580837e30bed5f281c450781f49ebab4993470ed81aa6693a054bfbc2 -->

```csharp
public bool Inno.Editor.Assets.AssetImportSettingsEdits.Apply(Inno.Assets.AssetPath path, Inno.Core.Serialization.ISerializable settings, string expectedFingerprint)
```

Saves one settings gesture, recording neutral before/after properties even when reimport reports an error.

**Parameter `path`:** Writable source asset path.

**Parameter `settings`:** Detached current-generation settings value.

**Parameter `expectedFingerprint`:** Sidecar fingerprint captured when editing began.

**Returns:** Whether the saved configuration reimported successfully; false does not mean the settings were discarded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/ImportSettings/AssetImportSettingsEdits.cs#L65).
