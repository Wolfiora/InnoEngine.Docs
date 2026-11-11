---
title: "ViewContentSourceExtensionAttribute"
description: "Reference for ViewContentSourceExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.5a3b0d303345aaf0
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `ViewContentSourceExtensionAttribute`

This reference describes `ViewContentSourceExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b98e550ea2ac1ca4) | Method |
| [`id`](#api-95121548bb51621f) | Property |

## Type declaration

<a id="api-5a3b0d303345aaf0"></a>
<!-- api: T:Inno.Rendering.Runtime.ViewContentSourceExtensionAttribute 115fe6b8f32354b892e6d25de6031150f554984cce0ab1971192d7fa4ab06046 -->

```csharp
public sealed class Inno.Rendering.Runtime.ViewContentSourceExtensionAttribute : System.Attribute
```

Discovers an independently reloadable world-content source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L404).

## `#ctor`

<a id="api-b98e550ea2ac1ca4"></a>
<!-- api: M:Inno.Rendering.Runtime.ViewContentSourceExtensionAttribute.#ctor(System.String) 46beb858171de4abfd3eb3447b2204b172adc42370f2a0e6f82a3a0298bb75f8 -->

```csharp
public Inno.Rendering.Runtime.ViewContentSourceExtensionAttribute.ViewContentSourceExtensionAttribute(string id)
```

Creates a source declaration with a stable identifier.

**Parameter `id`:** Globally stable source identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L412).

## `id`

<a id="api-95121548bb51621f"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentSourceExtensionAttribute.id 7fde74b5f85cf1ef8a01965f478105615c912262d32999c4db6c2811996eee03 -->

```csharp
public string Inno.Rendering.Runtime.ViewContentSourceExtensionAttribute.id { get; }
```

Gets the globally stable source identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L421).
