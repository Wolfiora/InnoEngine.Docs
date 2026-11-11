---
title: "MissingGameSystem"
description: "Reference for MissingGameSystem in Inno.Scene."
uid: api.inno.scene.fa7f9f58aebcae97
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `MissingGameSystem`

This reference describes `MissingGameSystem` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.GameSystem`.

## Members

| Member | Kind |
| --- | --- |
| [`missingType`](#api-c0e839020f220381) | Property |
| [`missingTypeName`](#api-d6ea197ae038cefe) | Property |

## Type declaration

<a id="api-fa7f9f58aebcae97"></a>
<!-- api: T:Inno.Scene.MissingGameSystem ff79817b94274ddea4262e1510b51f2b27099662d798b83556a49cb852642289 -->

```csharp
public sealed class Inno.Scene.MissingGameSystem : Inno.Scene.GameSystem
```

Preserves the identity, order, and serialized state of a scene system whose managed type is unavailable.

**Constraints:** The scene serializer and script reload pipeline create this placeholder automatically. It remains disabled
and does not retain the unavailable managed `System.Type` or its collectible assembly load context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/MissingGameSystem.cs#L19).

## `missingType`

<a id="api-c0e839020f220381"></a>
<!-- api: P:Inno.Scene.MissingGameSystem.missingType 3e0220459dc7933e14a9581c3814997d01d8d96b7ec7ba719881211b73e1132c -->

```csharp
public Inno.Extensibility.Types.TypeRef Inno.Scene.MissingGameSystem.missingType { get; }
```

Gets the logical identity of the unavailable system type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/MissingGameSystem.cs#L46).

## `missingTypeName`

<a id="api-d6ea197ae038cefe"></a>
<!-- api: P:Inno.Scene.MissingGameSystem.missingTypeName f8ba5aab6cbfeed3cb0931f82b95cfdcdb08bbed5f99f3162700b42ed73ae245 -->

```csharp
public string Inno.Scene.MissingGameSystem.missingTypeName { get; }
```

Gets the last known managed type name for diagnostics and editor presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Concrete/MissingGameSystem.cs#L51).
