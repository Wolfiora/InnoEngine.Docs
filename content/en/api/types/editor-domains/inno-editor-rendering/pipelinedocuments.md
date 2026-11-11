---
title: "PipelineDocuments"
description: "Reference for PipelineDocuments in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.e11adb685b2241c1
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `PipelineDocuments`

This reference describes `PipelineDocuments` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`OnStart`](#api-e9d230ce43bdb175) | Method |
| [`OnStop`](#api-e669005e784a13e9) | Method |
| [`OnUpdate`](#api-ebdd0eafd6a89aee) | Method |
| [`Open`](#api-9fcba7fd42d01d62) | Method |
| [`Read`](#api-2a6ea5808532b070) | Method |
| [`Replace`](#api-e878157649ab71ab) | Method |
| [```ReplaceSettings``1```](#api-5a80ff2782fcfe42) | Method |
| [`RestoreSettings`](#api-d2b62bcd92e41c65) | Method |
| [`assets`](#api-9b1d733d6e4b11a5) | Property |
| [`drafts`](#api-c6c3a3b878de5632) | Property |
| [`serialization`](#api-150ada334124d69d) | Property |

## Type declaration

<a id="api-e11adb685b2241c1"></a>
<!-- api: T:Inno.Editor.Rendering.PipelineDocuments 08ec3083c4029178d432e13775176f321c9190994428355b483d240f72e74a3f -->

```csharp
public sealed class Inno.Editor.Rendering.PipelineDocuments : Inno.Editor.Core.EditorModule
```

Edits Pipeline sources and typed extension settings without changing canonical rendering assets before Save.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L18).

## `OnStart`

<a id="api-e9d230ce43bdb175"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.OnStart(Inno.Editor.Core.EditorContext) f031b5837309ae47c8de3074535b573193166703ffb9dd6968625617b83c9f61 -->

```csharp
protected override void Inno.Editor.Rendering.PipelineDocuments.OnStart(Inno.Editor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L145).

## `OnStop`

<a id="api-e669005e784a13e9"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.OnStop(Inno.Editor.Core.EditorContext) 98725e820cb96630705d63f043e86a6a17229f0fbfb453ad6cf5e89ed8e71cf3 -->

```csharp
protected override void Inno.Editor.Rendering.PipelineDocuments.OnStop(Inno.Editor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L159).

## `OnUpdate`

<a id="api-ebdd0eafd6a89aee"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.OnUpdate(Inno.Editor.Core.EditorContext) 955aa1db5f770f69647768d34d16ead461cee376773c767e3539acff2a720fa5 -->

```csharp
protected override void Inno.Editor.Rendering.PipelineDocuments.OnUpdate(Inno.Editor.Core.EditorContext context)
```

Advances this feature using the current runtime state.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L152).

## `Open`

<a id="api-9fcba7fd42d01d62"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.Open(Inno.Assets.AssetPath) 43756727f1e7380b7619452184a72ce8dc5af4778d682b05ae42e7e0c918ccd4 -->

```csharp
public System.Guid Inno.Editor.Rendering.PipelineDocuments.Open(Inno.Assets.AssetPath path)
```

Opens a native Pipeline source in the shared document service, including failed imports.

**Parameter `path`:** Mounted source path.

**Returns:** The persistent source identity used by draft operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L61).

## `Read`

<a id="api-2a6ea5808532b070"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.Read(System.Guid) f7a5f2884bed09c26464941edfb130a37106d365b187c359f751980a1a797b66 -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset Inno.Editor.Rendering.PipelineDocuments.Read(System.Guid assetId)
```

Reads a detached current-generation Pipeline value; its referenced canonical assets must not be mutated.

**Parameter `assetId`:** Open Pipeline identity.

**Returns:** The unsaved native Pipeline value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L71).

## `Replace`

<a id="api-e878157649ab71ab"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.Replace(System.Guid,Inno.Rendering.Assets.RenderPipelineAsset,System.String) e3708fe4c6870ba3b58a92b3b8da26cd0109b2868346c910956df7c7c72107b3 -->

```csharp
public void Inno.Editor.Rendering.PipelineDocuments.Replace(System.Guid assetId, Inno.Rendering.Assets.RenderPipelineAsset candidate, string? mergeKey = null)
```

Changes a draft through shared History without publishing it to Scene/Game.

**Parameter `assetId`:** Open Pipeline identity.

**Parameter `candidate`:** Detached edited value.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L84).

## ```ReplaceSettings``1```

<a id="api-5a80ff2782fcfe42"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.ReplaceSettings``1(System.Guid,``0,System.String) 9188e18225228af55344ffd1d3236051d20ecb5e95728ece779a3fb46861a8d4 -->

```csharp
public void Inno.Editor.Rendering.PipelineDocuments.ReplaceSettings<TSettings>(System.Guid assetId, TSettings settings, string? mergeKey = null) where TSettings : class, Inno.Core.Serialization.ISerializable
```

Captures typed Pipeline settings with this source owner's complete reference and dependency context.

**Type parameter `TSettings`:** Current plugin settings contract.

**Parameter `assetId`:** Open Pipeline identity.

**Parameter `settings`:** Detached edited settings.

**Parameter `mergeKey`:** The current gesture key, or null for a discrete edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L104).

## `RestoreSettings`

<a id="api-d2b62bcd92e41c65"></a>
<!-- api: M:Inno.Editor.Rendering.PipelineDocuments.RestoreSettings(Inno.Rendering.Assets.SerializedRenderExtensionState) b7f3c740cb383685fa2fcca0f4321ee4b9cba22cb6ec87ec2d765f60b08dc72f -->

```csharp
public Inno.Core.Serialization.ISerializable? Inno.Editor.Rendering.PipelineDocuments.RestoreSettings(Inno.Rendering.Assets.SerializedRenderExtensionState state)
```

Restores detached settings using the current type and serialization generation.

**Parameter `state`:** Neutral settings retaining their stable type identity and properties.

**Returns:** The detached settings, or null when the extension is temporarily unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L126).

## `assets`

<a id="api-9b1d733d6e4b11a5"></a>
<!-- api: P:Inno.Editor.Rendering.PipelineDocuments.assets 8125583966a33ae352c183977b5da8bb427610d85b76e14841508374fd3214d3 -->

```csharp
public Inno.Assets.Pipeline.AssetPipeline Inno.Editor.Rendering.PipelineDocuments.assets { get; }
```

Gets the authoritative asset pipeline used by source inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L26).

## `drafts`

<a id="api-c6c3a3b878de5632"></a>
<!-- api: P:Inno.Editor.Rendering.PipelineDocuments.drafts 86e23415ab6b80b4d690b2bc28b3087e95d13e6f8b711cb6e8025d07cb52ef04 -->

```csharp
public Inno.Editor.Assets.AssetDraftDocuments<Inno.Rendering.Assets.RenderPipelineAsset> Inno.Editor.Rendering.PipelineDocuments.drafts { get; }
```

Gets the source draft owner shared by Pipeline inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L38).

## `serialization`

<a id="api-150ada334124d69d"></a>
<!-- api: P:Inno.Editor.Rendering.PipelineDocuments.serialization 40f9ab3152783929bb8c9d3ad1f0767be7c3fa55414768961017fd893951835b -->

```csharp
public Inno.Core.Serialization.SerializationRegistry Inno.Editor.Rendering.PipelineDocuments.serialization { get; }
```

Gets the current owner serialization registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Pipelines/PipelineDocuments.cs#L32).
