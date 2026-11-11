---
title: "RenderExtensionStateContext"
description: "Reference for RenderExtensionStateContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.9750a5e278e01ef2
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderExtensionStateContext`

This reference describes `RenderExtensionStateContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7e0f932279960240) | Method |
| [```Restore``1```](#api-5d83d614b6a96694) | Method |

## Type declaration

<a id="api-9750a5e278e01ef2"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderExtensionStateContext d4c3e3262683d09595aebe4e78b9b4d5a6cd178648953bd7836ecc333a26eaeb -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderExtensionStateContext
```

Restores neutral render settings through the canonical asset's actual owner and pinned references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderExtensionStateContext.cs#L13).

## `#ctor`

<a id="api-7e0f932279960240"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderExtensionStateContext.#ctor(Inno.Assets.AssetObject) d54e371612d1dc14a2d871778b40cb9c17816c8bebcd19e03edf9aa88e87bc1f -->

```csharp
public Inno.Rendering.Runtime.RenderExtensionStateContext.RenderExtensionStateContext(Inno.Assets.AssetObject owner)
```

Binds restoration to a canonical asset, independently of the caller's ambient session.

**Parameter `owner`:** Asset whose database and pinned converter generation own the settings.

**Constraints:** It must not outlive the asset generation. Authoring captures use the asset system's property snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderExtensionStateContext.cs#L26).

## ```Restore``1```

<a id="api-5d83d614b6a96694"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderExtensionStateContext.Restore``1(Inno.Rendering.Assets.SerializedRenderExtensionState,``0) 332e89f23ebc29c9477aae6514d27c97bf167a515cab4660d301465edf51408e -->

```csharp
public void Inno.Rendering.Runtime.RenderExtensionStateContext.Restore<TSettings>(Inno.Rendering.Assets.SerializedRenderExtensionState state, TSettings target) where TSettings : class, Inno.Core.Serialization.ISerializable
```

Restores a matching settings contract with this owner's asset references.

**Type parameter `TSettings`:** Current settings type.

**Parameter `state`:** Detached neutral source state.

**Parameter `target`:** Current generation target, never retained by this context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderExtensionStateContext.cs#L40).
