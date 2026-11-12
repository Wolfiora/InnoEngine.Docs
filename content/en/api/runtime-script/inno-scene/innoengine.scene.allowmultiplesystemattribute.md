---
title: "AllowMultipleSystemAttribute"
description: "Reference for AllowMultipleSystemAttribute in Inno.Scene."
uid: api.inno.scene.runtime-script.0857e3e99964b24e
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `AllowMultipleSystemAttribute`

This reference describes `AllowMultipleSystemAttribute` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1e0465a96b73435b) | Method |

## Type declaration

<a id="api-0857e3e99964b24e"></a>
<!-- api: T:InnoEngine.Scene.AllowMultipleSystemAttribute d32d51bb0e447713bba09e94436e71beec80b5e650b5f853fdd441dfd94c85d1 -->

```csharp
public sealed class InnoEngine.Scene.AllowMultipleSystemAttribute : System.Attribute
```

Allows multiple instances of a concrete `InnoEngine.Scene.GameSystem` type in one scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Attributes/AllowMultipleSystemAttribute.cs#L9).

## `#ctor`

<a id="api-1e0465a96b73435b"></a>
<!-- api: M:InnoEngine.Scene.AllowMultipleSystemAttribute.#ctor 92829d8cb95503ba9804117ee4e6c71c26db22925857d40798ce198a35362c88 -->

```csharp
public InnoEngine.Scene.AllowMultipleSystemAttribute.AllowMultipleSystemAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Attributes/AllowMultipleSystemAttribute.cs#L9).
