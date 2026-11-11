---
title: "Layer"
description: "Reference for Layer in Inno.Core.Layers."
uid: api.inno.core.layers.8a83c4cbccb84691
kind: api
owners:
  - Inno.Core.Layers
apiSurface: source-clr
contracts:
  - project.inno-core-layers#attachment-and-frame-contract
---
# `Layer`

This reference describes `Layer` in `Inno.Core.Layers`. Read the [shared contract](../../projects/inno-core-layers.md#attachment-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d04245ff34a54c67) | Method |
| [`Announce`](#api-c18fec37c96c4fa8) | Method |
| [```Listen``1```](#api-be06bae0a66ab863) | Method |
| [```ListenOnce``1```](#api-7be0af5e32efd78e) | Method |
| [`OnAfterRender`](#api-6cd1c785f8be2478) | Method |
| [`OnAttach`](#api-497693988c29136c) | Method |
| [`OnBeforeRender`](#api-36c7d6df5ff5e787) | Method |
| [`OnDetach`](#api-7a30f41d1d037442) | Method |
| [`OnFixedUpdate`](#api-da04fda6fcc03afa) | Method |
| [`OnLateUpdate`](#api-c49b4e3fb3e57adb) | Method |
| [`OnRender`](#api-beb80e26c5754f6c) | Method |
| [`OnUpdate`](#api-e335f3baa944f800) | Method |
| [`name`](#api-86096bb75f31ceea) | Property |

## Type declaration

<a id="api-8a83c4cbccb84691"></a>
<!-- api: T:Inno.Core.Layers.Layer 4960b81f83d9528c244a7562a99e56660616f166842a8535411d68e07cb7e20e -->

```csharp
public abstract class Inno.Core.Layers.Layer
```

Defines a backend-neutral lifecycle participant that can receive frame callbacks and own event subscriptions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L13).

## `#ctor`

<a id="api-d04245ff34a54c67"></a>
<!-- api: M:Inno.Core.Layers.Layer.#ctor(System.String) 827c878facaf20829ae56e7896fb99c1a701d584fbc97f71c940a02da887c18d -->

```csharp
protected Inno.Core.Layers.Layer.Layer(string name = "Layer")
```

Creates a layer with the supplied diagnostic name.

**Parameter `name`:** The non-empty name used to identify the layer in diagnostics.

**Throws `System.ArgumentException`:** Thrown when `name` is empty or consists only of whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L29).

## `Announce`

<a id="api-c18fec37c96c4fa8"></a>
<!-- api: M:Inno.Core.Layers.Layer.Announce(Inno.Core.Events.Event) 32749dbdb9a4d4eae45e3743f4efaf24fb44cf4e27ecc8a9405611adc14437d8 -->

```csharp
protected void Inno.Core.Layers.Layer.Announce(Inno.Core.Events.Event evnt)
```

Dispatches an event immediately inside this layer's event scope.

**Parameter `evnt`:** The event to dispatch to this layer's listeners.

**Throws `System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L193).

## ```Listen``1```

<a id="api-be06bae0a66ab863"></a>
<!-- api: M:Inno.Core.Layers.Layer.Listen``1(System.Action{``0},System.Int32) 9843c2aaeb3834410a9875ab21cc48a55e848f7fca50f087fb317d457d0e0895 -->

```csharp
protected System.IDisposable Inno.Core.Layers.Layer.Listen<TEvent>(System.Action<TEvent> handler, int priority = 0) where TEvent : Inno.Core.Events.Event
```

Subscribes to an event for the lifetime of this layer attachment.

**Type parameter `TEvent`:** The event type handled by the callback.

**Parameter `handler`:** The callback invoked when the event reaches this layer.

**Parameter `priority`:** The listener priority inside this layer. Higher values run earlier.

**Returns:** A token that can remove the subscription before the layer detaches.

**Throws `System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L142).

## ```ListenOnce``1```

<a id="api-7be0af5e32efd78e"></a>
<!-- api: M:Inno.Core.Layers.Layer.ListenOnce``1(System.Action{``0},System.Int32) bcf5661d3cc352eeb9cea971514e8a88ee890f4970fe4599b034926a561ce3c5 -->

```csharp
protected System.IDisposable Inno.Core.Layers.Layer.ListenOnce<TEvent>(System.Action<TEvent> handler, int priority = 0) where TEvent : Inno.Core.Events.Event
```

Subscribes once to an event for the lifetime of this layer attachment.

**Type parameter `TEvent`:** The event type handled by the callback.

**Parameter `handler`:** The callback invoked at most once when the event reaches this layer.

**Parameter `priority`:** The listener priority inside this layer. Higher values run earlier.

**Returns:** A token that can cancel the one-shot subscription before it runs.

**Throws `System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L172).

## `OnAfterRender`

<a id="api-6cd1c785f8be2478"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnAfterRender(System.Single) 533b49f794e9bd088d37a76f2a9bdedc180767e214d3fae1a7a1c6a1b1ad4f91 -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnAfterRender(float deltaTime)
```

Completes frame-scoped rendering state after render submission.

**Constraints:** A `Inno.Core.Layers.LayerStack` invokes this callback in reverse order for every layer whose
`Inno.Core.Layers.Layer.OnBeforeRender(System.Single)` callback completed successfully, including when later work fails.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L120).

## `OnAttach`

<a id="api-497693988c29136c"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnAttach ecfc48fd9604cdb386ec07f4754e04c92f4447731d5f75b4488ffda7f753e78b -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnAttach()
```

Runs after the layer has received its event scope and joined a stack.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L44).

## `OnBeforeRender`

<a id="api-36c7d6df5ff5e787"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnBeforeRender(System.Single) 4f7cb4bf29ddfc49bef5458852c8729ea3248c706e176422903d718fb12610f9 -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnBeforeRender(float deltaTime)
```

Prepares frame-scoped rendering state before render work is submitted.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L96).

## `OnDetach`

<a id="api-7a30f41d1d037442"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnDetach 301243b410da67904df00c7f686ba83f589a9cc08f6c75e088cf019198376aba -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnDetach()
```

Runs while the layer is leaving its stack and before its event scope is released.

**Constraints:** This callback also compensates a partially failed attachment. Throwing
`Inno.Core.Execution.RetirementPendingException` retains ownership and permits a later cleanup retry.
Completed cleanup steps must not be repeated on that retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L56).

## `OnFixedUpdate`

<a id="api-da04fda6fcc03afa"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnFixedUpdate(System.Single) 1705c922dc70526dee18a91893484ff088c0f57c860a99e4afd26ac258881027 -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnFixedUpdate(float fixedDeltaTime)
```

Advances fixed-step work for this layer.

**Parameter `fixedDeltaTime`:** The fixed simulation interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L66).

## `OnLateUpdate`

<a id="api-c49b4e3fb3e57adb"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnLateUpdate(System.Single) fa084b1776a87129aa957865dfd8090c7c2d7260fe93a9c779c14c567288e2c5 -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnLateUpdate(float deltaTime)
```

Advances work that must run after the regular update phase.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L86).

## `OnRender`

<a id="api-beb80e26c5754f6c"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnRender(System.Single) 050a802803b7d534c8ff732fb95789c2cdae2d034fa844b9b56fa3deb575fddf -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnRender(float deltaTime)
```

Submits rendering work without presenting a concrete graphics backend.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L106).

## `OnUpdate`

<a id="api-e335f3baa944f800"></a>
<!-- api: M:Inno.Core.Layers.Layer.OnUpdate(System.Single) ecfe97b150bcd63f294d96397d7e32da3916a97d66a86b8c0d131cc842778013 -->

```csharp
public virtual void Inno.Core.Layers.Layer.OnUpdate(float deltaTime)
```

Advances variable-step work for this layer.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L76).

## `name`

<a id="api-86096bb75f31ceea"></a>
<!-- api: P:Inno.Core.Layers.Layer.name d9f72e0e77f370f1d9c325e3ea77c3893085f3c1a6f58115e7dd591e7ae908e3 -->

```csharp
public string Inno.Core.Layers.Layer.name { get; }
```

Gets the diagnostic name of this layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Layers/Layer.cs#L39).
