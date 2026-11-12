---
title: "RenderExtensionStateContext"
description: "Reference for RenderExtensionStateContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.3231c40113ee2d38
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderExtensionStateContext`

This reference describes `RenderExtensionStateContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4438a24f237d8289) | Method |
| [```Restore``1```](#api-846868b979ac5a53) | Method |

## Type declaration

<a id="api-3231c40113ee2d38"></a>
<!-- api: T:InnoEngine.Rendering.RenderExtensionStateContext 114414fce3db049b2af9ccf47e03dcd434b9fdd6fcd31cd4f4826169988cc6f5 -->

```csharp
public sealed class InnoEngine.Rendering.RenderExtensionStateContext
```

Restores neutral render settings through the canonical asset's actual owner and pinned references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderExtensionStateContext.cs#L13).

## `#ctor`

<a id="api-4438a24f237d8289"></a>
<!-- api: M:InnoEngine.Rendering.RenderExtensionStateContext.#ctor(InnoEngine.Assets.AssetObject) fafbc762e590247d0143847e3b5bf856ffa1134ba14a7529761a7f0d8469de34 -->

```csharp
public InnoEngine.Rendering.RenderExtensionStateContext.RenderExtensionStateContext(InnoEngine.Assets.AssetObject owner)
```

Binds restoration to a canonical asset, independently of the caller's ambient session.

**Parameter `owner`:** Asset whose database and pinned converter generation own the settings.

**Constraints:** It must not outlive the asset generation. Authoring captures use the asset system's property snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderExtensionStateContext.cs#L26).

## ```Restore``1```

<a id="api-846868b979ac5a53"></a>
<!-- api: M:InnoEngine.Rendering.RenderExtensionStateContext.Restore``1(InnoEngine.Rendering.SerializedRenderExtensionState,``0) e259c983fc8b39c0191a4eee34ac65a2c434a092ef98ccb536bdfd8a3c5fe737 -->

```csharp
public void InnoEngine.Rendering.RenderExtensionStateContext.Restore<TSettings>(InnoEngine.Rendering.SerializedRenderExtensionState state, TSettings target) where TSettings : class, InnoEngine.Serialization.ISerializable
```

Restores a matching settings contract with this owner's asset references.

**Type parameter `TSettings`:** Current settings type.

**Parameter `state`:** Detached neutral source state.

**Parameter `target`:** Current generation target, never retained by this context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderExtensionStateContext.cs#L40).
