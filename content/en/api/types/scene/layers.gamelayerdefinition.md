---
title: "Layers.GameLayerDefinition"
description: "Reference for Layers.GameLayerDefinition in Inno.Scene."
uid: api.inno.scene.ef9506fc8b779ab0
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `Layers.GameLayerDefinition`

This reference describes `Layers.GameLayerDefinition` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-514c44ec6d896607) | Method |
| [`GetId`](#api-63b389c59070cfda) | Method |
| [`layer`](#api-5a22082e93751e7b) | Property |
| [`localId`](#api-98f47107bc38fc58) | Property |
| [`name`](#api-9ed1e82339318029) | Property |

## Type declaration

<a id="api-ef9506fc8b779ab0"></a>
<!-- api: T:Inno.Scene.Layers.GameLayerDefinition 7155924f7def18e5732e55689150756a4e2141e78e22c825d0369fb4de863218 -->

```csharp
public sealed class Inno.Scene.Layers.GameLayerDefinition
```

Describes one named layer slot in a `Inno.Scene.Layers.GameLayerCatalog` snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L10).

## `#ctor`

<a id="api-514c44ec6d896607"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerDefinition.#ctor(Inno.Core.Settings.ProjectLocalId,Inno.Scene.Layers.GameLayer,System.String) 2b35301366b724595004840ec978a1c1af4ce7ced0a2dfa39c3839e756a8217e -->

```csharp
public Inno.Scene.Layers.GameLayerDefinition.GameLayerDefinition(Inno.Core.Settings.ProjectLocalId localId, Inno.Scene.Layers.GameLayer layer, string name)
```

Creates an immutable layer definition.

**Parameter `localId`:** The stable project-independent identity.

**Parameter `layer`:** The layer slot represented by the definition.

**Parameter `name`:** The non-empty display and lookup name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L24).

## `GetId`

<a id="api-63b389c59070cfda"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerDefinition.GetId(Inno.Core.Settings.ProjectId) 93b0478eba7873756d36a6b581879470fcdb46b7be7610c1ac644779382bd105 -->

```csharp
public Inno.Scene.Layers.GameLayerId Inno.Scene.Layers.GameLayerDefinition.GetId(Inno.Core.Settings.ProjectId projectId)
```

Resolves the complete identity under a project namespace.

**Parameter `projectId`:** The current project namespace.

**Returns:** The canonical project-scoped layer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L60).

## `layer`

<a id="api-5a22082e93751e7b"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerDefinition.layer 56b701dd0e91f8a92885ae478c386fe135e3dfbfad9631a04be3058144a5b58f -->

```csharp
public Inno.Scene.Layers.GameLayer Inno.Scene.Layers.GameLayerDefinition.layer { get; }
```

Gets the layer slot represented by this definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L44).

## `localId`

<a id="api-98f47107bc38fc58"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerDefinition.localId a58d7bef34e3abe4ecda210b373886acfac411beda3d06acc5dc045e89284fa7 -->

```csharp
public Inno.Core.Settings.ProjectLocalId Inno.Scene.Layers.GameLayerDefinition.localId { get; }
```

Gets the stable project-independent identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L39).

## `name`

<a id="api-9ed1e82339318029"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerDefinition.name 959b68082120232a24867347321cde29eab9651545c16417cb14e822c8bfa980 -->

```csharp
public string Inno.Scene.Layers.GameLayerDefinition.name { get; }
```

Gets the unique ordinal layer name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerDefinition.cs#L49).
