---
title: "ViewContentSourceExtensionAttribute"
description: "Reference for ViewContentSourceExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.be68f22ac4fcc348
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `ViewContentSourceExtensionAttribute`

This reference describes `ViewContentSourceExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-584fd840377665c3) | Method |
| [`id`](#api-718b932a71d20f05) | Property |

## Type declaration

<a id="api-be68f22ac4fcc348"></a>
<!-- api: T:InnoEngine.Rendering.ViewContentSourceExtensionAttribute b51ccb5affc182bed40619352eaa7f6d84cf1274472ebf99a31e57e0cda62510 -->

```csharp
public sealed class InnoEngine.Rendering.ViewContentSourceExtensionAttribute : System.Attribute
```

Discovers an independently reloadable world-content source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L404).

## `#ctor`

<a id="api-584fd840377665c3"></a>
<!-- api: M:InnoEngine.Rendering.ViewContentSourceExtensionAttribute.#ctor(System.String) 334f5d9d2587a0a039ddd8ae18082be23687ade51c0cfc4e86a6e43f2a67d0b2 -->

```csharp
public InnoEngine.Rendering.ViewContentSourceExtensionAttribute.ViewContentSourceExtensionAttribute(string id)
```

Creates a source declaration with a stable identifier.

**Parameter `id`:** Globally stable source identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L412).

## `id`

<a id="api-718b932a71d20f05"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentSourceExtensionAttribute.id bb1ccbb6c8d2b8645866b832b808aff50d43e27fa0a41ec64a7d75b17d41906f -->

```csharp
public string InnoEngine.Rendering.ViewContentSourceExtensionAttribute.id { get; }
```

Gets the globally stable source identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L421).
