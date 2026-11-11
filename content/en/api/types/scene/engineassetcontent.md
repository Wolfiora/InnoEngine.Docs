---
title: "EngineAssetContent"
description: "Reference for EngineAssetContent in Inno.Scene."
uid: api.inno.scene.c6d398afe947e188
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `EngineAssetContent`

This reference describes `EngineAssetContent` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9c4677efd0cd5d4d) | Method |
| [`GetDependencies`](#api-72e04414d0f920a5) | Method |
| [`GetPayload`](#api-b1f0c73a2b2839f0) | Method |

## Type declaration

<a id="api-c6d398afe947e188"></a>
<!-- api: T:Inno.Scene.EngineAssetContent 832126f67b8a836dabd772da890296827e787906d869c6b7946b8558e52e6c4f -->

```csharp
public sealed class Inno.Scene.EngineAssetContent
```

Carries immutable scene or prefab runtime content across the runtime-to-authoring asset boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/EngineAssetContent.cs#L11).

## `#ctor`

<a id="api-9c4677efd0cd5d4d"></a>
<!-- api: M:Inno.Scene.EngineAssetContent.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency}) 3dd77b3ab107350f00d39242bbaec7b00bce951009ad28b85c8df1e1385e06a0 -->

```csharp
public Inno.Scene.EngineAssetContent.EngineAssetContent(System.ReadOnlySpan<byte> payload, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetDependency> dependencies)
```

Creates a detached engine asset content snapshot.

**Parameter `payload`:** The complete serialized runtime graph.

**Parameter `dependencies`:** The direct persistent asset dependencies of the graph.

**Throws `System.ArgumentException`:** Thrown when `payload` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/EngineAssetContent.cs#L28).

## `GetDependencies`

<a id="api-72e04414d0f920a5"></a>
<!-- api: M:Inno.Scene.EngineAssetContent.GetDependencies 0579eeed870ef8070687edf0757c785fbe9a1d11dd34137566704bff5fcecdda -->

```csharp
public Inno.Assets.AssetDependency[] Inno.Scene.EngineAssetContent.GetDependencies()
```

Gets a detached copy of direct persistent asset dependencies.

**Returns:** A dependency array owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/EngineAssetContent.cs#L53).

## `GetPayload`

<a id="api-b1f0c73a2b2839f0"></a>
<!-- api: M:Inno.Scene.EngineAssetContent.GetPayload 6ec51f2602be9e884720d5647f89fd86a4ab2b418f4bd80c691c382d91cae68c -->

```csharp
public byte[] Inno.Scene.EngineAssetContent.GetPayload()
```

Gets a detached copy of the serialized runtime graph.

**Returns:** A payload copy owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Assets/EngineAssetContent.cs#L45).
