---
title: "LayerStack"
description: "Reference for LayerStack in Inno.Core.Layers."
uid: api.inno.core.layers.e301efda57467678
kind: api
owners:
  - Inno.Core.Layers
apiSurface: source-clr
contracts:
  - project.inno-core-layers#attachment-and-frame-contract
---
# `LayerStack`

This reference describes `LayerStack` in `Inno.Core.Layers`. Read the [shared contract](../../projects/inno-core-layers.md#attachment-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d6b75b4b9b8e34d) | Method |
| [`Clear`](#api-76190adff81bfab2) | Method |
| [`Dispose`](#api-6c896dfd09e1a44e) | Method |
| [`OnFixedUpdate`](#api-e3481f49e1875c5a) | Method |
| [`OnLateUpdate`](#api-2e9c6bdcbc57b40c) | Method |
| [`OnUpdate`](#api-c44463e4ac01bd74) | Method |
| [`PopLayer`](#api-d4b2fa2c899e7acd) | Method |
| [`PopOverlay`](#api-2fdda75a0568f717) | Method |
| [`PushLayer`](#api-ac53ab5b73fe5278) | Method |
| [`PushOverlay`](#api-3164e299531ceb5e) | Method |
| [`RenderFrame`](#api-3094fff4f50a3b89) | Method |
| [`count`](#api-0c7537d94ad1eb9e) | Property |
| [`Item`](#api-2a5f7a32be804c30) | Property |

## Type declaration

<a id="api-e301efda57467678"></a>
<!-- api: T:Inno.Core.Layers.LayerStack d3cc022e7fcef800dc941922ec9f6fba7b3b71d1dbc0213d41fce8d66a1d0bed -->

```csharp
public sealed class Inno.Core.Layers.LayerStack : System.IDisposable
```

Owns an ordered collection of base layers and overlays with isolated event scopes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L13).

## `#ctor`

<a id="api-1d6b75b4b9b8e34d"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.#ctor(System.Func{Inno.Core.Events.EventHub}) 8e62ab711ca93457d7dca0a7238e6dda2652097fd1c6edeb8c5b689f73873037 -->

```csharp
public Inno.Core.Layers.LayerStack.LayerStack(System.Func<Inno.Core.Events.EventHub> eventHubFactory)
```

Creates a layer stack that obtains one event scope for each attachment.

**Parameter `eventHubFactory`:** The factory used to create a distinct event hub for every attached layer.

**Throws `System.ArgumentNullException`:** Thrown when `eventHubFactory` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L31).

## `Clear`

<a id="api-76190adff81bfab2"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.Clear 8ea9b77b9244ec4c985133d4b8cc7477b87352f707b24c50fed75cc3725012f1 -->

```csharp
public void Inno.Core.Layers.LayerStack.Clear()
```

Detaches every layer in top-to-bottom order while keeping this stack reusable.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Cleanup is incomplete. The remaining layers stay owned; only Clear or Dispose may resume cleanup.

**Throws `System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L251).

## `Dispose`

<a id="api-6c896dfd09e1a44e"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.Dispose e24519f284c71960b03765282b78b65af4cca9c4abc352a57ea2539455a3b810 -->

```csharp
public void Inno.Core.Layers.LayerStack.Dispose()
```

Detaches every layer and permanently releases this stack.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A layer still owns live work. The current and lower layers remain owned until disposal is retried.

**Throws `System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L268).

## `OnFixedUpdate`

<a id="api-e3481f49e1875c5a"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.OnFixedUpdate(System.Single) 2732a4f343b1988295f38eb5b02e52c72ac6186f241e29c7b83ca74f34b8d075 -->

```csharp
public void Inno.Core.Layers.LayerStack.OnFixedUpdate(float fixedDeltaTime)
```

Advances fixed-step callbacks in bottom-to-top stack order.

**Parameter `fixedDeltaTime`:** The fixed simulation interval in seconds.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L153).

## `OnLateUpdate`

<a id="api-2e9c6bdcbc57b40c"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.OnLateUpdate(System.Single) 3440634fa5bf60e32f1ab208728fe3093a409ac65e9af6f68a23839ecf3f93b7 -->

```csharp
public void Inno.Core.Layers.LayerStack.OnLateUpdate(float deltaTime)
```

Advances late-update callbacks in bottom-to-top stack order.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L185).

## `OnUpdate`

<a id="api-c44463e4ac01bd74"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.OnUpdate(System.Single) 8a5311937be668c72575a652a5bdd639cb1bacb4e6f08462559ce36928fb0586 -->

```csharp
public void Inno.Core.Layers.LayerStack.OnUpdate(float deltaTime)
```

Advances variable-step callbacks in bottom-to-top stack order.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L169).

## `PopLayer`

<a id="api-d4b2fa2c899e7acd"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.PopLayer(Inno.Core.Layers.Layer) ff79217749c290b6ea9d4233f8bde620788be9deaf640609a188df58c60ae94f -->

```csharp
public bool Inno.Core.Layers.LayerStack.PopLayer(Inno.Core.Layers.Layer layer)
```

Detaches a base layer from this stack.

**Parameter `layer`:** The base layer to detach.

**Returns:** `true` when the layer was attached in the base region; otherwise, `false`.

**Throws `System.ArgumentNullException`:** Thrown when `layer` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L107).

## `PopOverlay`

<a id="api-2fdda75a0568f717"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.PopOverlay(Inno.Core.Layers.Layer) ee8c0fc512083af98c2e320c75d6ee5cc970feec579fd972c3591b07426047b8 -->

```csharp
public bool Inno.Core.Layers.LayerStack.PopOverlay(Inno.Core.Layers.Layer overlay)
```

Detaches an overlay from this stack.

**Parameter `overlay`:** The overlay to detach.

**Returns:** `true` when the layer was attached in the overlay region; otherwise, `false`.

**Throws `System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L133).

## `PushLayer`

<a id="api-ac53ab5b73fe5278"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.PushLayer(Inno.Core.Layers.Layer) 2d6a458deef33434742fad0788d00346bc2bb9b1b3d3d870341d7171b8d8aa46 -->

```csharp
public void Inno.Core.Layers.LayerStack.PushLayer(Inno.Core.Layers.Layer layer)
```

Attaches a base layer below all overlays.

**Parameter `layer`:** The layer to attach.

**Throws `System.ArgumentNullException`:** Thrown when `layer` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the same instance is already attached or the event hub factory returns `null`.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L70).

## `PushOverlay`

<a id="api-3164e299531ceb5e"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.PushOverlay(Inno.Core.Layers.Layer) 593bf31a51f903daf33c60ad875994aab112546440f51a9be071baac5861f65d -->

```csharp
public void Inno.Core.Layers.LayerStack.PushOverlay(Inno.Core.Layers.Layer overlay)
```

Attaches an overlay above all base layers and existing overlays.

**Parameter `overlay`:** The overlay to attach.

**Throws `System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the same instance is already attached or the event hub factory returns `null`.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L90).

## `RenderFrame`

<a id="api-3094fff4f50a3b89"></a>
<!-- api: M:Inno.Core.Layers.LayerStack.RenderFrame(System.Single) d98fb3ba3feed73adaea42c7382bbf9b5e7782cbed63847bb5356963baa94761 -->

```csharp
public void Inno.Core.Layers.LayerStack.RenderFrame(float deltaTime)
```

Executes preparation and submission in stack order, then completion in reverse order.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Throws `System.AggregateException`:** Thrown when multiple render or unwind callbacks fail.

**Throws `System.ObjectDisposedException`:** Thrown when this stack has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L204).

## `count`

<a id="api-0c7537d94ad1eb9e"></a>
<!-- api: P:Inno.Core.Layers.LayerStack.count 8b00e14362c7c7bebbf99689fff557c049715999b84403697eccebf85aa8eef4 -->

```csharp
public int Inno.Core.Layers.LayerStack.count { get; }
```

Gets the number of attached base layers and overlays.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L39).

## `Item`

<a id="api-2a5f7a32be804c30"></a>
<!-- api: P:Inno.Core.Layers.LayerStack.Item(System.Int32) 39536263e82d5504dde5955c1280eb461b781ab1561142cc4a612180b7e65d88 -->

```csharp
public Inno.Core.Layers.Layer Inno.Core.Layers.LayerStack.this[int index] { get; }
```

Gets the layer at the supplied stack position.

**Parameter `index`:** The zero-based stack position.

**Returns:** The attached layer at the requested position.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `index` is outside the current stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/LayerStack.cs#L53).
