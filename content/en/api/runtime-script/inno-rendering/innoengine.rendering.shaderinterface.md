---
title: "ShaderInterface"
description: "Reference for ShaderInterface in Inno.Rendering."
uid: api.inno.rendering.runtime-script.d16de35c796ead21
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderInterface`

This reference describes `ShaderInterface` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5675d046e3026afd) | Method |
| [`bindings`](#api-1a7457e25c405861) | Property |

## Type declaration

<a id="api-d16de35c796ead21"></a>
<!-- api: T:InnoEngine.Rendering.ShaderInterface 09028d433333476e9b702d4d1c244e6778a78ff62f28a8318599e69d46449bce -->

```csharp
public sealed class InnoEngine.Rendering.ShaderInterface
```

Stores the manifest-derived binding contract verified after backend program creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterface.cs#L10).

## `#ctor`

<a id="api-5675d046e3026afd"></a>
<!-- api: M:InnoEngine.Rendering.ShaderInterface.#ctor(System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.ShaderInterfaceBinding}) b65f95a8de48c926f21cd3cd6073524f6737d1b5cae70ef7f8e11f72d0a3e145 -->

```csharp
public InnoEngine.Rendering.ShaderInterface.ShaderInterface(System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ShaderInterfaceBinding> bindings)
```

Creates a shader interface contract.

**Parameter `bindings`:** Stable expected bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterface.cs#L18).

## `bindings`

<a id="api-1a7457e25c405861"></a>
<!-- api: P:InnoEngine.Rendering.ShaderInterface.bindings 4bf9537454f68932a3408e7078184e3580efd882c991ad102a83e31709c3b177 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ShaderInterfaceBinding> InnoEngine.Rendering.ShaderInterface.bindings { get; }
```

Gets stable expected bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderInterface.cs#L27).
