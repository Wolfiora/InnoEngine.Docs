---
title: "AssetImportSettingsEdits"
description: "Reference for AssetImportSettingsEdits in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.671962f669ac046e
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetImportSettingsEdits`

This reference describes `AssetImportSettingsEdits` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9481b4e03673d4f1) | Method |
| [`Apply`](#api-868de170e29987c1) | Method |

## Type declaration

<a id="api-671962f669ac046e"></a>
<!-- api: T:InnoEditor.Assets.AssetImportSettingsEdits 3c5c3b8ad50a10649a0e855a465048abe617924c196834482725fa1e73be7361 -->

```csharp
public sealed class InnoEditor.Assets.AssetImportSettingsEdits : InnoEditor.Core.EditorModule
```

Applies importer configuration through the common sidecar pipeline and stable-identity Editor history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/ImportSettings/AssetImportSettingsEdits.cs#L15).

## `#ctor`

<a id="api-9481b4e03673d4f1"></a>
<!-- api: M:InnoEditor.Assets.AssetImportSettingsEdits.#ctor 532dc48381eaa124ff81aa1cae369d1fd7c37465f291f1f61e148ce45057ee25 -->

```csharp
public InnoEditor.Assets.AssetImportSettingsEdits.AssetImportSettingsEdits()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/ImportSettings/AssetImportSettingsEdits.cs#L15).

## `Apply`

<a id="api-868de170e29987c1"></a>
<!-- api: M:InnoEditor.Assets.AssetImportSettingsEdits.Apply(InnoEngine.Assets.AssetPath,InnoEngine.Serialization.ISerializable,System.String) 4a6dcda7d5446c8ac91b0d43517bc62f99b7f9cba809148a1282eddf08e2b557 -->

```csharp
public bool InnoEditor.Assets.AssetImportSettingsEdits.Apply(InnoEngine.Assets.AssetPath path, InnoEngine.Serialization.ISerializable settings, string expectedFingerprint)
```

Saves one settings gesture, recording neutral before/after properties even when reimport reports an error.

**Parameter `path`:** Writable source asset path.

**Parameter `settings`:** Detached current-generation settings value.

**Parameter `expectedFingerprint`:** Sidecar fingerprint captured when editing began.

**Returns:** Whether the saved configuration reimported successfully; false does not mean the settings were discarded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/ImportSettings/AssetImportSettingsEdits.cs#L65).
