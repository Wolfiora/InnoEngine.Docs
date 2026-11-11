---
title: "MissingGameComponent"
description: "Reference for MissingGameComponent in Inno.Scene."
uid: api.inno.scene.83abc338c761e599
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `MissingGameComponent`

This reference describes `MissingGameComponent` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.GameComponent`.

## Members

| Member | Kind |
| --- | --- |
| [`missingType`](#api-0a13f37d2871b90c) | Property |
| [`missingTypeName`](#api-5c5eaec56a4b63f9) | Property |

## Type declaration

<a id="api-83abc338c761e599"></a>
<!-- api: T:Inno.Scene.MissingGameComponent 2d4e1df80a9bdcfa7936df0a96a2e1b5bc249357c16f4c0c9d6909883625cd9c -->

```csharp
public sealed class Inno.Scene.MissingGameComponent : Inno.Scene.GameComponent
```

Preserves the identity, order, and serialized state of a component whose managed type is unavailable.

**Constraints:** The scene serializer and script reload pipeline create this placeholder automatically. It does not retain
the unavailable managed `System.Type` or any object from its collectible assembly load context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/MissingGameComponent.cs#L19).

## `missingType`

<a id="api-0a13f37d2871b90c"></a>
<!-- api: P:Inno.Scene.MissingGameComponent.missingType 320c9ef217b12015c1223f0488b98e79256548719b092cb48a46c8e4deee2bda -->

```csharp
public Inno.Extensibility.Types.TypeRef Inno.Scene.MissingGameComponent.missingType { get; }
```

Gets the logical identity of the unavailable component type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/MissingGameComponent.cs#L45).

## `missingTypeName`

<a id="api-5c5eaec56a4b63f9"></a>
<!-- api: P:Inno.Scene.MissingGameComponent.missingTypeName 95ea1c062d5aa451739b3282d035e25ec538dcf0527e850e4af22d92c60b8f6a -->

```csharp
public string Inno.Scene.MissingGameComponent.missingTypeName { get; }
```

Gets the last known managed type name for diagnostics and editor presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/MissingGameComponent.cs#L50).
