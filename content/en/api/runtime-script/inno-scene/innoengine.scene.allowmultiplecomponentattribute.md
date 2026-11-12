---
title: "AllowMultipleComponentAttribute"
description: "Reference for AllowMultipleComponentAttribute in Inno.Scene."
uid: api.inno.scene.runtime-script.a0928ae1177c8b81
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `AllowMultipleComponentAttribute`

This reference describes `AllowMultipleComponentAttribute` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d66d31d793595128) | Method |

## Type declaration

<a id="api-a0928ae1177c8b81"></a>
<!-- api: T:InnoEngine.Scene.AllowMultipleComponentAttribute 12bb9bbb7386ce925df4cb590d8004dc9a088a790cb89a1fa9538cdd052230ca -->

```csharp
public sealed class InnoEngine.Scene.AllowMultipleComponentAttribute : System.Attribute
```

Allows multiple instances of a concrete component type on one game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Attributes/AllowMultipleComponentAttribute.cs#L9).

## `#ctor`

<a id="api-d66d31d793595128"></a>
<!-- api: M:InnoEngine.Scene.AllowMultipleComponentAttribute.#ctor a2a6f522858e48acd2f8b39d0c85d9391214424ddff43e3a5e7f6140f33bec7c -->

```csharp
public InnoEngine.Scene.AllowMultipleComponentAttribute.AllowMultipleComponentAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Attributes/AllowMultipleComponentAttribute.cs#L9).
