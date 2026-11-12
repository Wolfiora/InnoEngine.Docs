---
title: "RenderModelExtensionAttribute"
description: "Reference for RenderModelExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.98c332a94eede880
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderModelExtensionAttribute`

This reference describes `RenderModelExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b27a0fa3239a8d8a) | Method |
| [`id`](#api-f27fdb353c0a05fb) | Property |

## Type declaration

<a id="api-98c332a94eede880"></a>
<!-- api: T:InnoEngine.Rendering.RenderModelExtensionAttribute aa0959d66e992a63f1e0eb307d60ab3ffdbc0446b2fe39a721aa3e67cf2f863b -->

```csharp
public sealed class InnoEngine.Rendering.RenderModelExtensionAttribute : System.Attribute
```

Marks a reloadable rendering model with a stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelExtensionAttribute.cs#L16).

## `#ctor`

<a id="api-b27a0fa3239a8d8a"></a>
<!-- api: M:InnoEngine.Rendering.RenderModelExtensionAttribute.#ctor(System.String) f29b0ce21860761701b85141757746975f8db52b22a62f1d78f0236cf08872bb -->

```csharp
public InnoEngine.Rendering.RenderModelExtensionAttribute.RenderModelExtensionAttribute(string id)
```

Creates a model declaration.

**Parameter `id`:** Globally stable model identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelExtensionAttribute.cs#L24).

## `id`

<a id="api-f27fdb353c0a05fb"></a>
<!-- api: P:InnoEngine.Rendering.RenderModelExtensionAttribute.id e425abbbf1780402c9e93d18cdc4cbde9317b78454d7ade86c2b2008bb4aba3c -->

```csharp
public string InnoEngine.Rendering.RenderModelExtensionAttribute.id { get; }
```

Gets the globally stable model identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelExtensionAttribute.cs#L33).
