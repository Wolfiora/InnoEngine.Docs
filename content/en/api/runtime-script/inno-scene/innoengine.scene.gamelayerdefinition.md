---
title: "GameLayerDefinition"
description: "Reference for GameLayerDefinition in Inno.Scene."
uid: api.inno.scene.runtime-script.e750a839cc3d629c
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameLayerDefinition`

This reference describes `GameLayerDefinition` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1e7ff6c098b1cf86) | Method |
| [`GetId`](#api-4c5a911d21570852) | Method |
| [`layer`](#api-e40db50abd30be1b) | Property |
| [`localId`](#api-af616cd54e38abf0) | Property |
| [`name`](#api-834f4c432350bee5) | Property |

## Type declaration

<a id="api-e750a839cc3d629c"></a>
<!-- api: T:InnoEngine.Scene.GameLayerDefinition a74f3933d7074423c7a3ffdbe9c43eb05192b5cf5d38824b54b209516442fce5 -->

```csharp
public sealed class InnoEngine.Scene.GameLayerDefinition
```

Describes one named layer slot in a `InnoEngine.Scene.GameLayerCatalog` snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L10).

## `#ctor`

<a id="api-1e7ff6c098b1cf86"></a>
<!-- api: M:InnoEngine.Scene.GameLayerDefinition.#ctor(InnoEngine.Settings.ProjectLocalId,InnoEngine.Scene.GameLayer,System.String) 1c30630ec36fd0ff137020a1158919202ed102d759a842ec9c51919e9efb1f6a -->

```csharp
public InnoEngine.Scene.GameLayerDefinition.GameLayerDefinition(InnoEngine.Settings.ProjectLocalId localId, InnoEngine.Scene.GameLayer layer, string name)
```

Creates an immutable layer definition.

**Parameter `localId`:** The stable project-independent identity.

**Parameter `layer`:** The layer slot represented by the definition.

**Parameter `name`:** The non-empty display and lookup name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L24).

## `GetId`

<a id="api-4c5a911d21570852"></a>
<!-- api: M:InnoEngine.Scene.GameLayerDefinition.GetId(InnoEngine.Settings.ProjectId) 2f0d9d5a6104b97f1b8e60e45da3f2377a25e3d2f9097115d6a1bae9c1f3de3f -->

```csharp
public InnoEngine.Scene.GameLayerId InnoEngine.Scene.GameLayerDefinition.GetId(InnoEngine.Settings.ProjectId projectId)
```

Resolves the complete identity under a project namespace.

**Parameter `projectId`:** The current project namespace.

**Returns:** The canonical project-scoped layer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L60).

## `layer`

<a id="api-e40db50abd30be1b"></a>
<!-- api: P:InnoEngine.Scene.GameLayerDefinition.layer 4b8a55e6ebf9a4ab17780fcc1713a4f090c86cdc6fa14cf61b1a3dc1d3f195b4 -->

```csharp
public InnoEngine.Scene.GameLayer InnoEngine.Scene.GameLayerDefinition.layer { get; }
```

Gets the layer slot represented by this definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L44).

## `localId`

<a id="api-af616cd54e38abf0"></a>
<!-- api: P:InnoEngine.Scene.GameLayerDefinition.localId 47051f0c71f76a80eebfa0c4652e7cf4ef8239b636d6dc384b4b2696872bd0ff -->

```csharp
public InnoEngine.Settings.ProjectLocalId InnoEngine.Scene.GameLayerDefinition.localId { get; }
```

Gets the stable project-independent identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L39).

## `name`

<a id="api-834f4c432350bee5"></a>
<!-- api: P:InnoEngine.Scene.GameLayerDefinition.name 39ed1923c962d5ac4e4e9d8e50412e9a3e329a7b941af42f7d2555ec02b02a3e -->

```csharp
public string InnoEngine.Scene.GameLayerDefinition.name { get; }
```

Gets the unique ordinal layer name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L49).
