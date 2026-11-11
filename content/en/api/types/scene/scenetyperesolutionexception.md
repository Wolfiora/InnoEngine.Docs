---
title: "SceneTypeResolutionException"
description: "Reference for SceneTypeResolutionException in Inno.Scene."
uid: api.inno.scene.7bdd6dd7608981ea
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneTypeResolutionException`

This reference describes `SceneTypeResolutionException` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Exception`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f75d85a55121c213) | Method |
| [`elementKind`](#api-286ec47e6085f50c) | Property |
| [`stableTypeId`](#api-1c95c5c9349c5fea) | Property |

## Type declaration

<a id="api-7bdd6dd7608981ea"></a>
<!-- api: T:Inno.Scene.SceneTypeResolutionException 6a52fa46e1e3e63cd7676129b4bf022600c7b105da53b37c120a72caaffef4de -->

```csharp
public sealed class Inno.Scene.SceneTypeResolutionException : System.Exception
```

Reports that a serialized scene element cannot be created because its stable type is not present
in the active type catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneTypeResolutionException.cs#L9).

## `#ctor`

<a id="api-f75d85a55121c213"></a>
<!-- api: M:Inno.Scene.SceneTypeResolutionException.#ctor(System.Guid,System.String) 032ee2119959182d4358591984c2bb07f2508388b9fabf0a345c5dfc9cd2360c -->

```csharp
public Inno.Scene.SceneTypeResolutionException.SceneTypeResolutionException(System.Guid stableTypeId, string elementKind)
```

Creates an exception for one unresolved serialized scene type.

**Parameter `stableTypeId`:** The stable identity stored by the serialized scene element.

**Parameter `elementKind`:** The human-readable scene element kind, such as component or system.

**Throws `System.ArgumentException`:** Thrown when `stableTypeId` is empty or `elementKind` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneTypeResolutionException.cs#L23).

## `elementKind`

<a id="api-286ec47e6085f50c"></a>
<!-- api: P:Inno.Scene.SceneTypeResolutionException.elementKind 73479ba2ec2dc52a0aee2989e4ea39f9c35ddc844afab05cfc0c95a3c1385c84 -->

```csharp
public string Inno.Scene.SceneTypeResolutionException.elementKind { get; }
```

Gets the scene element kind that expected the missing type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneTypeResolutionException.cs#L44).

## `stableTypeId`

<a id="api-1c95c5c9349c5fea"></a>
<!-- api: P:Inno.Scene.SceneTypeResolutionException.stableTypeId c67f72033215fdb2a40b65584adca41a59801655298f2da1054e3bf1e8e9e624 -->

```csharp
public System.Guid Inno.Scene.SceneTypeResolutionException.stableTypeId { get; }
```

Gets the unresolved stable type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneTypeResolutionException.cs#L39).
