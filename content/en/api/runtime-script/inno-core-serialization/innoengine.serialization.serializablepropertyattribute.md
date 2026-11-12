---
title: "SerializablePropertyAttribute"
description: "Reference for SerializablePropertyAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.9459016e17158590
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializablePropertyAttribute`

This reference describes `SerializablePropertyAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-475c63543bc15b34) | Method |
| [`order`](#api-dccb5263eb78878c) | Property |
| [`propertyVisibility`](#api-87e6ec15ddd06337) | Property |

## Type declaration

<a id="api-9459016e17158590"></a>
<!-- api: T:InnoEngine.Serialization.SerializablePropertyAttribute 6b2db29b0835706d0acb5719d7fde3c6afffea82f7133aedb00419db1420fb49 -->

```csharp
public sealed class InnoEngine.Serialization.SerializablePropertyAttribute : System.Attribute
```

Declares a field or property as participating in `InnoEngine.Serialization.ISerializable` property persistence.

**Constraints:** The default visibility is `InnoEngine.Serialization.PropertyVisibility.Show`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L12).

## `#ctor`

<a id="api-475c63543bc15b34"></a>
<!-- api: M:InnoEngine.Serialization.SerializablePropertyAttribute.#ctor(InnoEngine.Serialization.PropertyVisibility) 2b0c2640c4e9e3f19378eeb6eb95de82b4679d45fc5449a85c046b262b52e6e1 -->

```csharp
public InnoEngine.Serialization.SerializablePropertyAttribute.SerializablePropertyAttribute(InnoEngine.Serialization.PropertyVisibility visibility = InnoEngine.Serialization.PropertyVisibility.Show)
```

Initializes a new instance of the `InnoEngine.Serialization.SerializablePropertyAttribute` class.

**Parameter `visibility`:** The member visibility in the serialization graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L33).

## `order`

<a id="api-dccb5263eb78878c"></a>
<!-- api: P:InnoEngine.Serialization.SerializablePropertyAttribute.order 51c2a59237d505aa9f982e1ae03fcae5b3fff90411e5e53736f3ed1b84db42cf -->

```csharp
public int InnoEngine.Serialization.SerializablePropertyAttribute.order { get; set; }
```

Gets or sets the member order within its declaring type.

**Constraints:** Lower values are processed first. The script compiler fills this value from source declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L20).

## `propertyVisibility`

<a id="api-87e6ec15ddd06337"></a>
<!-- api: P:InnoEngine.Serialization.SerializablePropertyAttribute.propertyVisibility 571a055ce99e7d70ca8b63208a2d5107c97069d887a7510e6e4d2052eff219b0 -->

```csharp
public InnoEngine.Serialization.PropertyVisibility InnoEngine.Serialization.SerializablePropertyAttribute.propertyVisibility { get; }
```

Gets the visibility of the annotated member.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L25).
