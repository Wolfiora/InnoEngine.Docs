---
title: "ReloadableContributor"
description: "Reference for ReloadableContributor in Inno.Rendering.Runtime.Reload.TestModule."
uid: api.inno.rendering.runtime.reload.testmodule.54b045d071829d45
kind: api
owners:
  - Inno.Rendering.Runtime.Reload.TestModule
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime-reload-testmodule
---
# `ReloadableContributor`

This reference describes `ReloadableContributor` in `Inno.Rendering.Runtime.Reload.TestModule`. Read the [shared contract](../../../../contributing/testing/support/inno-rendering-runtime-reload-testmodule.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.IRenderFrameGraphContributor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e31fcb97dd1cf5c9) | Method |
| [`AddRenderPasses`](#api-c7b31cb59f2696ce) | Method |
| [`PrepareFrame`](#api-f0936f5eecdf5a2e) | Method |

## Type declaration

<a id="api-54b045d071829d45"></a>
<!-- api: T:Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor 873467654e9292db29f090ab2e0bef30c92a6cd0845c3afdc343ab89cb833bb8 -->

```csharp
public sealed class Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor : Inno.Rendering.IRenderFrameGraphContributor
```

Contributes collectible frame callbacks while its host removes registration during preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/rendering/fixtures/Inno.Rendering.Runtime.Reload.TestModule/ReloadableContributor.cs#L9).

## `#ctor`

<a id="api-e31fcb97dd1cf5c9"></a>
<!-- api: M:Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor.#ctor(System.Action{Inno.Rendering.IRenderFrameGraphContributor},System.Boolean) 676cfc497fc375ca5490e3e352cff23a4b19096ebb1c2a5dc7e1c2300ab6ff07 -->

```csharp
public Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor.ReloadableContributor(System.Action<Inno.Rendering.IRenderFrameGraphContributor> unregister, bool rejectGraph)
```

Creates a frame contributor whose callback exercises the public registration lifetime.

**Parameter `unregister`:** Host-owned callback removing this instance from the next frame snapshot.

**Parameter `rejectGraph`:** Whether graph construction must fail after adding its collectible draw callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/rendering/fixtures/Inno.Rendering.Runtime.Reload.TestModule/ReloadableContributor.cs#L23).

## `AddRenderPasses`

<a id="api-c7b31cb59f2696ce"></a>
<!-- api: M:Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor.AddRenderPasses(Inno.Rendering.RenderGraphBuilder,System.UInt64) 315674d4ab869b98898a2de2ec287c6b8cf3a756be7d1959b2417fc6c3f96c38 -->

```csharp
public void Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor.AddRenderPasses(Inno.Rendering.RenderGraphBuilder graph, ulong frameIndex)
```

Adds frame-scoped passes after all user render-request graphs have executed.

**Parameter `graph`:** Shared final graph builder.

**Parameter `frameIndex`:** Monotonic engine render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/rendering/fixtures/Inno.Rendering.Runtime.Reload.TestModule/ReloadableContributor.cs#L35).

## `PrepareFrame`

<a id="api-f0936f5eecdf5a2e"></a>
<!-- api: M:Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor.PrepareFrame(System.UInt64) 4a5cd61cb7e21f1d257044768897bc63d0a62ffc4c649ea3c7d650be14e1a50c -->

```csharp
public void Inno.Rendering.Runtime.Reload.TestModule.ReloadableContributor.PrepareFrame(ulong frameIndex)
```

Applies queued resource changes at the current frame safety point.

**Parameter `frameIndex`:** Monotonic engine render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/rendering/fixtures/Inno.Rendering.Runtime.Reload.TestModule/ReloadableContributor.cs#L32).
