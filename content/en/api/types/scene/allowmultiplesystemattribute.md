---
title: "AllowMultipleSystemAttribute"
description: "Reference for AllowMultipleSystemAttribute in Inno.Scene."
uid: api.inno.scene.2dd200aed3d3c74c
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `AllowMultipleSystemAttribute`

This reference describes `AllowMultipleSystemAttribute` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fd0c912e01d73c3a) | Method |

## Type declaration

<a id="api-2dd200aed3d3c74c"></a>
<!-- api: T:Inno.Scene.AllowMultipleSystemAttribute 8505d02f1f6060cfac5bb43ac6b6acdb6354a7828dac18b1b2f7b3e3101f472f -->

```csharp
public sealed class Inno.Scene.AllowMultipleSystemAttribute : System.Attribute
```

Allows multiple instances of a concrete `Inno.Scene.GameSystem` type in one scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Attributes/AllowMultipleSystemAttribute.cs#L9).

## `#ctor`

<a id="api-fd0c912e01d73c3a"></a>
<!-- api: M:Inno.Scene.AllowMultipleSystemAttribute.#ctor 4c278d85eaea5c085e8756315bd82bb2257616de667f6cfb57d2aa3d16e35a5e -->

```csharp
public Inno.Scene.AllowMultipleSystemAttribute.AllowMultipleSystemAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Attributes/AllowMultipleSystemAttribute.cs#L9).
