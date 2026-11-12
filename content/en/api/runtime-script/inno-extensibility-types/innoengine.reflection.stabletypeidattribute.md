---
title: "StableTypeIdAttribute"
description: "Reference for StableTypeIdAttribute in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.runtime-script.2536f7efacbf8b7f
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: runtime-script
contracts:
  - project.inno-extensibility-types
  - manual.scripting.use-script-api
---
# `StableTypeIdAttribute`

This reference describes `StableTypeIdAttribute` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-737191312215435e) | Method |
| [`id`](#api-c2af785a424b7246) | Property |

## Type declaration

<a id="api-2536f7efacbf8b7f"></a>
<!-- api: T:InnoEngine.Reflection.StableTypeIdAttribute 9c1ab1e89d48704bb132cbacc26e92ea917a39093af05ddb33e229682a48820f -->

```csharp
public sealed class InnoEngine.Reflection.StableTypeIdAttribute : System.Attribute
```

Defines a stable identity for a type, used by persistence and hot-reload remapping.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/Attributes/StableTypeIdAttribute.cs#L12).

## `#ctor`

<a id="api-737191312215435e"></a>
<!-- api: M:InnoEngine.Reflection.StableTypeIdAttribute.#ctor(System.String) 32d9a66c57efaf8f2bf2bb1a8bf52f8789c2772f424024df0e8a7226658a3d53 -->

```csharp
public InnoEngine.Reflection.StableTypeIdAttribute.StableTypeIdAttribute(string id)
```

Defines a stable identity for a type, used by persistence and hot-reload remapping.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/Attributes/StableTypeIdAttribute.cs#L12).

## `id`

<a id="api-c2af785a424b7246"></a>
<!-- api: P:InnoEngine.Reflection.StableTypeIdAttribute.id 56ac18e8a8d1197504ea7c5899612ed1e83b5b17925840d7ee5fbe7cf2ad1dd6 -->

```csharp
public string InnoEngine.Reflection.StableTypeIdAttribute.id { get; }
```

Stable type id as Guid string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/extensibility/Inno.Extensibility.Types/TypeCache/Attributes/StableTypeIdAttribute.cs#L17).
