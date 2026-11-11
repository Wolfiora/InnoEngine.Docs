---
title: "StableTypeIdAttribute"
description: "Reference for StableTypeIdAttribute in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.651172b63fe8fe28
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# `StableTypeIdAttribute`

This reference describes `StableTypeIdAttribute` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d7e3d3effd552fc1) | Method |
| [`id`](#api-19b85461c8770e0e) | Property |

## Type declaration

<a id="api-651172b63fe8fe28"></a>
<!-- api: T:Inno.Extensibility.Types.StableTypeIdAttribute 77024b1a955768e995143a84db264bacea022ddee27b6b88cbec67e923a9ecec -->

```csharp
public sealed class Inno.Extensibility.Types.StableTypeIdAttribute : System.Attribute
```

Defines a stable identity for a type, used by persistence and hot-reload remapping.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/Attributes/StableTypeIdAttribute.cs#L12).

## `#ctor`

<a id="api-d7e3d3effd552fc1"></a>
<!-- api: M:Inno.Extensibility.Types.StableTypeIdAttribute.#ctor(System.String) 02d449bd62d0b396b28aea78357cc6f1e626070bede8df7c5421793972796309 -->

```csharp
public Inno.Extensibility.Types.StableTypeIdAttribute.StableTypeIdAttribute(string id)
```

Defines a stable identity for a type, used by persistence and hot-reload remapping.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/Attributes/StableTypeIdAttribute.cs#L12).

## `id`

<a id="api-19b85461c8770e0e"></a>
<!-- api: P:Inno.Extensibility.Types.StableTypeIdAttribute.id 5f176dfcc77b6d7b0205ae7c32bf713aacc9b6e4df50446dca112a0de2823446 -->

```csharp
public string Inno.Extensibility.Types.StableTypeIdAttribute.id { get; }
```

Stable type id as Guid string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/Attributes/StableTypeIdAttribute.cs#L17).
