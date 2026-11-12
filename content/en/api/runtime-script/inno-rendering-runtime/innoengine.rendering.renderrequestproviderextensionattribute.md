---
title: "RenderRequestProviderExtensionAttribute"
description: "Reference for RenderRequestProviderExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.20a2e88e924b9f83
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderRequestProviderExtensionAttribute`

This reference describes `RenderRequestProviderExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4209a2ce7a3751bd) | Method |
| [`id`](#api-eca6465a59110ef8) | Property |
| [`priority`](#api-eaf2816269b4456a) | Property |

## Type declaration

<a id="api-20a2e88e924b9f83"></a>
<!-- api: T:InnoEngine.Rendering.RenderRequestProviderExtensionAttribute d364c0aa5e7dbbb438c3ca297d957e64edd2acd7b87f1f397285dbee88ac722b -->

```csharp
public sealed class InnoEngine.Rendering.RenderRequestProviderExtensionAttribute : System.Attribute
```

Marks a reloadable provider that produces model-neutral render requests each frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L13).

## `#ctor`

<a id="api-4209a2ce7a3751bd"></a>
<!-- api: M:InnoEngine.Rendering.RenderRequestProviderExtensionAttribute.#ctor(System.String,System.Int32) fa5b3a027fcf75be7a546e49d4adbebe811d908dade2169c1e4248555795c006 -->

```csharp
public InnoEngine.Rendering.RenderRequestProviderExtensionAttribute.RenderRequestProviderExtensionAttribute(string id, int priority = 0)
```

Creates a render request provider declaration.

**Parameter `id`:** Globally stable provider identifier.

**Parameter `priority`:** Provider invocation priority; lower values run first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L24).

## `id`

<a id="api-eca6465a59110ef8"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderExtensionAttribute.id 35dd7afbfb91b44eee5959120e3b14138e1b1828eac603a7dc2ea2b76bad1dcc -->

```csharp
public string InnoEngine.Rendering.RenderRequestProviderExtensionAttribute.id { get; }
```

Gets the globally stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L36).

## `priority`

<a id="api-eaf2816269b4456a"></a>
<!-- api: P:InnoEngine.Rendering.RenderRequestProviderExtensionAttribute.priority 3ada7aa6bb0adf47014a30a3742b86610aac6e30a7df6de9b3958f68b0b86b89 -->

```csharp
public int InnoEngine.Rendering.RenderRequestProviderExtensionAttribute.priority { get; }
```

Gets the provider invocation priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L41).
