---
title: "RenderRequestProviderExtensionAttribute"
description: "Reference for RenderRequestProviderExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.cfc44dd99f335900
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderRequestProviderExtensionAttribute`

This reference describes `RenderRequestProviderExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-52a817d1f34e948c) | Method |
| [`id`](#api-062af3b553b588e0) | Property |
| [`priority`](#api-057a2f295750f561) | Property |

## Type declaration

<a id="api-cfc44dd99f335900"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute 36fe4d12a588c75522b8f91f8970f99059d06045c8f36bdd36af07b1f04b95c1 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute : System.Attribute
```

Marks a reloadable provider that produces model-neutral render requests each frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L13).

## `#ctor`

<a id="api-52a817d1f34e948c"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute.#ctor(System.String,System.Int32) 90f2e1429fdb43dd8612e8b6ba226f566dfafa11c6bdd02bf7e280e47ad63c90 -->

```csharp
public Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute.RenderRequestProviderExtensionAttribute(string id, int priority = 0)
```

Creates a render request provider declaration.

**Parameter `id`:** Globally stable provider identifier.

**Parameter `priority`:** Provider invocation priority; lower values run first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L24).

## `id`

<a id="api-062af3b553b588e0"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute.id 6ec522338b7f3c322dd7e4c0a7c4c7f22c54b6d1e2be40b30692efc8efbf3e0f -->

```csharp
public string Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute.id { get; }
```

Gets the globally stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L36).

## `priority`

<a id="api-057a2f295750f561"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute.priority 126f283fdf6b2df9ce5cd7253bf64fb210269dbc11ffda7899e4967f930483e5 -->

```csharp
public int Inno.Rendering.Runtime.RenderRequestProviderExtensionAttribute.priority { get; }
```

Gets the provider invocation priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L41).
