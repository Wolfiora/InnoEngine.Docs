---
title: "RenderRequestProvider"
description: "Reference for RenderRequestProvider in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.f6e107996be6c074
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderRequestProvider`

This reference describes `RenderRequestProvider` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4da3709043539286) | Method |
| [`Dispose`](#api-a651a8ec7ac3a14c) | Method |
| [`Dispose`](#api-25dd12861d5e307b) | Method |
| [`Submit`](#api-8c7a299c0034f08f) | Method |

## Type declaration

<a id="api-f6e107996be6c074"></a>
<!-- api: T:InnoEngine.Rendering.RenderRequestProvider b5e0dbeb4aef399d9fae4b2fbfe56aa28c354f8f0b8e76e69a8561dbf0e5d0ec -->

```csharp
public abstract class InnoEngine.Rendering.RenderRequestProvider : System.IDisposable
```

Produces arbitrary render requests without prescribing a scene or rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L162).

## `#ctor`

<a id="api-4da3709043539286"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequestProvider.#ctor 2a63c2eded4a3705ac3193838be1219fe06c53210c589bc5fcb8dc660d1eb907 -->

```csharp
protected InnoEngine.Rendering.RenderRequestProvider.RenderRequestProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L162).

## `Dispose`

<a id="api-a651a8ec7ac3a14c"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequestProvider.Dispose 5587407621b3dce7609eff0c580fafd79253063706c5c09000d8aa963e0f24ae -->

```csharp
public void InnoEngine.Rendering.RenderRequestProvider.Dispose()
```

Releases generation-scoped provider state.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Provider work is still active. The owner must retain this instance and retry before releasing dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L180).

## `Dispose`

<a id="api-25dd12861d5e307b"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequestProvider.Dispose(System.Boolean) 2cd780ab94ac609833437bd2f7abbf0c4d85265184899f986f0336b5015f71e1 -->

```csharp
protected virtual void InnoEngine.Rendering.RenderRequestProvider.Dispose(bool disposing)
```

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L210).

## `Submit`

<a id="api-8c7a299c0034f08f"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequestProvider.Submit(InnoEngine.Rendering.RenderRequestProviderContext) 671fd0ecde762fed3b6458b50257ae57c8465740dda7f74401e27acb3d5bf496 -->

```csharp
public abstract void InnoEngine.Rendering.RenderRequestProvider.Submit(InnoEngine.Rendering.RenderRequestProviderContext context)
```

Submits zero or more requests for the current frame.

**Parameter `context`:** Frame-scoped provider context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L172).
