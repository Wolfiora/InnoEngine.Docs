---
title: "SerializablePropertyAttribute"
description: "Reference for SerializablePropertyAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.69b10187f4da906c
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializablePropertyAttribute`

This reference describes `SerializablePropertyAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-94755b7f39a633fc) | Method |
| [`order`](#api-9ccd3ebafac31f22) | Property |
| [`propertyVisibility`](#api-a08df422923edfa2) | Property |

## Type declaration

<a id="api-69b10187f4da906c"></a>
<!-- api: T:Inno.Core.Serialization.SerializablePropertyAttribute 17bffd6bda214f0026e9876650f829cf2c6548f041d368cf55c19f828f533c92 -->

```csharp
public sealed class Inno.Core.Serialization.SerializablePropertyAttribute : System.Attribute
```

Declares a field or property as participating in `Inno.Core.Serialization.ISerializable` property persistence.

**Constraints:** The default visibility is `Inno.Core.Serialization.PropertyVisibility.Show`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L12).

## `#ctor`

<a id="api-94755b7f39a633fc"></a>
<!-- api: M:Inno.Core.Serialization.SerializablePropertyAttribute.#ctor(Inno.Core.Serialization.PropertyVisibility) 110475887e6c6df37f93fd03c9ef3cfce4ce7f90923dbdc45a6bb06d8ab07cb3 -->

```csharp
public Inno.Core.Serialization.SerializablePropertyAttribute.SerializablePropertyAttribute(Inno.Core.Serialization.PropertyVisibility visibility = Inno.Core.Serialization.PropertyVisibility.Show)
```

Initializes a new instance of the `Inno.Core.Serialization.SerializablePropertyAttribute` class.

**Parameter `visibility`:** The member visibility in the serialization graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L33).

## `order`

<a id="api-9ccd3ebafac31f22"></a>
<!-- api: P:Inno.Core.Serialization.SerializablePropertyAttribute.order bc590684627a939d4d98641dd33d55c121c6807c1bc9b7228cc0aab6eb5e447c -->

```csharp
public int Inno.Core.Serialization.SerializablePropertyAttribute.order { get; set; }
```

Gets or sets the member order within its declaring type.

**Constraints:** Lower values are processed first. The script compiler fills this value from source declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L20).

## `propertyVisibility`

<a id="api-a08df422923edfa2"></a>
<!-- api: P:Inno.Core.Serialization.SerializablePropertyAttribute.propertyVisibility 29e8b9262b7326b5a306de62c149e5b3c7849ef12c7b307ab3ce1ef51dd18ee1 -->

```csharp
public Inno.Core.Serialization.PropertyVisibility Inno.Core.Serialization.SerializablePropertyAttribute.propertyVisibility { get; }
```

Gets the visibility of the annotated member.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/SerializablePropertyAttribute.cs#L25).
