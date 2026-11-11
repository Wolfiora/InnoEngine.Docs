---
title: "AllowMultipleComponentAttribute"
description: "Reference for AllowMultipleComponentAttribute in Inno.Scene."
uid: api.inno.scene.ebb1044cb513cfde
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `AllowMultipleComponentAttribute`

This reference describes `AllowMultipleComponentAttribute` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-52cd3a1554b3816c) | Method |

## Type declaration

<a id="api-ebb1044cb513cfde"></a>
<!-- api: T:Inno.Scene.AllowMultipleComponentAttribute 6d4fd6384d2230e5eb8620eaa05ab5e8fd2e9936f329bdecd4cc4c50c9873909 -->

```csharp
public sealed class Inno.Scene.AllowMultipleComponentAttribute : System.Attribute
```

Allows multiple instances of a concrete component type on one game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Attributes/AllowMultipleComponentAttribute.cs#L9).

## `#ctor`

<a id="api-52cd3a1554b3816c"></a>
<!-- api: M:Inno.Scene.AllowMultipleComponentAttribute.#ctor 5b2e2a3c7f8a7c948e660ef11ab69bea9b3403353fa58e78772e940006db56b4 -->

```csharp
public Inno.Scene.AllowMultipleComponentAttribute.AllowMultipleComponentAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Attributes/AllowMultipleComponentAttribute.cs#L9).
