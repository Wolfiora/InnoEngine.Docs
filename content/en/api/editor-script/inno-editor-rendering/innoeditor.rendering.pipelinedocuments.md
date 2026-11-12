---
title: "PipelineDocuments"
description: "Reference for PipelineDocuments in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.7bc0cfe58e60728f
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `PipelineDocuments`

This reference describes `PipelineDocuments` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b2c98a759e625517) | Method |
| [`OnStart`](#api-c544564a25c723b5) | Method |
| [`OnStop`](#api-9037dc61f21b0d5f) | Method |
| [`OnUpdate`](#api-879e823402ba60d2) | Method |
| [`Open`](#api-a792d02980d5f405) | Method |
| [`Read`](#api-c34d080530c8b7a5) | Method |
| [`Replace`](#api-535c35f21589d9fe) | Method |
| [```ReplaceSettings``1```](#api-6843a5db3cc9d6e7) | Method |
| [`RestoreSettings`](#api-d9d7e5bfa988786c) | Method |
| [`serialization`](#api-8a290feede3d1c3a) | Property |

## Type declaration

<a id="api-7bc0cfe58e60728f"></a>
<!-- api: T:InnoEditor.Rendering.PipelineDocuments 743ac80bb50f5b9e1b7bb5e458aca2abdf70061ad36eeb187b7ebe794547aa6a -->

```csharp
public sealed class InnoEditor.Rendering.PipelineDocuments : InnoEditor.Core.EditorModule
```

Edits Pipeline sources and typed extension settings without changing canonical rendering assets before Save.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L18).

## `#ctor`

<a id="api-b2c98a759e625517"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.#ctor 543016c11c7832d6afb849c88e4d7601763fdd31320994acc2681b6b7d914d04 -->

```csharp
public InnoEditor.Rendering.PipelineDocuments.PipelineDocuments()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L18).

## `OnStart`

<a id="api-c544564a25c723b5"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.OnStart(InnoEditor.Core.EditorContext) fbd265a71ae8f844032c5b5b11cf9e76a12b59dcbcead8c602b2c6fa36968ff8 -->

```csharp
protected override void InnoEditor.Rendering.PipelineDocuments.OnStart(InnoEditor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L145).

## `OnStop`

<a id="api-9037dc61f21b0d5f"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.OnStop(InnoEditor.Core.EditorContext) f8a6827c2cca4ba50db55fb618ef3cb93d4dc41e61aac8d28c8b8d0c288ce7aa -->

```csharp
protected override void InnoEditor.Rendering.PipelineDocuments.OnStop(InnoEditor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L159).

## `OnUpdate`

<a id="api-879e823402ba60d2"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.OnUpdate(InnoEditor.Core.EditorContext) 08237ec316e63c29e88db5456d54c061af5255f5b0412258fb42e07ac0c6ce7c -->

```csharp
protected override void InnoEditor.Rendering.PipelineDocuments.OnUpdate(InnoEditor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L152).

## `Open`

<a id="api-a792d02980d5f405"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.Open(InnoEngine.Assets.AssetPath) 431c90bf1081c2bb22c68d37911da8a46bac793e78a1575834135237a1e899ce -->

```csharp
public System.Guid InnoEditor.Rendering.PipelineDocuments.Open(InnoEngine.Assets.AssetPath path)
```

Opens a native Pipeline source in the shared document service, including failed imports.

**Parameter `path`:** Mounted source path.

**Returns:** The persistent source identity used by draft operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L61).

## `Read`

<a id="api-c34d080530c8b7a5"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.Read(System.Guid) c4dbeef5a3805841dc64d5e2912a4ea60749cc6c8c68146b37ccc0aac4e97491 -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset InnoEditor.Rendering.PipelineDocuments.Read(System.Guid assetId)
```

Reads a detached current-generation Pipeline value; its referenced canonical assets must not be mutated.

**Parameter `assetId`:** Open Pipeline identity.

**Returns:** The unsaved native Pipeline value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L71).

## `Replace`

<a id="api-535c35f21589d9fe"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.Replace(System.Guid,InnoEngine.Rendering.RenderPipelineAsset,System.String) ffd71f20b0a54772007824c8dd36f9d4ffd8ca6e7ba936d32731efa378587983 -->

```csharp
public void InnoEditor.Rendering.PipelineDocuments.Replace(System.Guid assetId, InnoEngine.Rendering.RenderPipelineAsset candidate, string? mergeKey = null)
```

Changes a draft through shared History without publishing it to Scene/Game.

**Parameter `assetId`:** Open Pipeline identity.

**Parameter `candidate`:** Detached edited value.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L84).

## ```ReplaceSettings``1```

<a id="api-6843a5db3cc9d6e7"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.ReplaceSettings``1(System.Guid,``0,System.String) ef88db2a313b2d4b8dcd7f188e47f4c3a51f36bb14a56ef2bb0a41d0ef9552f7 -->

```csharp
public void InnoEditor.Rendering.PipelineDocuments.ReplaceSettings<TSettings>(System.Guid assetId, TSettings settings, string? mergeKey = null) where TSettings : class, InnoEngine.Serialization.ISerializable
```

Captures typed Pipeline settings with this source owner's complete reference and dependency context.

**Type parameter `TSettings`:** Current plugin settings contract.

**Parameter `assetId`:** Open Pipeline identity.

**Parameter `settings`:** Detached edited settings.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L104).

## `RestoreSettings`

<a id="api-d9d7e5bfa988786c"></a>
<!-- api: M:InnoEditor.Rendering.PipelineDocuments.RestoreSettings(InnoEngine.Rendering.SerializedRenderExtensionState) 50a939536ef7b46f7c3bf4eb5043a732c3fc42e4368dff13523244f640c611fd -->

```csharp
public InnoEngine.Serialization.ISerializable? InnoEditor.Rendering.PipelineDocuments.RestoreSettings(InnoEngine.Rendering.SerializedRenderExtensionState state)
```

Restores detached settings using the current type and serialization generation.

**Parameter `state`:** Neutral settings retaining their stable type identity and properties.

**Returns:** The detached settings, or null when the extension is temporarily unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L126).

## `serialization`

<a id="api-8a290feede3d1c3a"></a>
<!-- api: P:InnoEditor.Rendering.PipelineDocuments.serialization 9b0bf948f11008309ce66164831004500aee8c33f15639faa1144152ad151282 -->

```csharp
public InnoEngine.Serialization.SerializationRegistry InnoEditor.Rendering.PipelineDocuments.serialization { get; }
```

Gets the current owner serialization registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L32).
