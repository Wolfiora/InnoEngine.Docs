---
title: "GenerateSerializationConverterAttribute"
description: "Reference for GenerateSerializationConverterAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.11812311c3a25ad5
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `GenerateSerializationConverterAttribute`

This reference describes `GenerateSerializationConverterAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2cea33f612b7cac5) | Method |

## Type declaration

<a id="api-11812311c3a25ad5"></a>
<!-- api: T:Inno.Core.Serialization.GenerateSerializationConverterAttribute 5b1a14fb318307eba57276af799f0bd62d6636e10cea9f1d1c573b0b0d656757 -->

```csharp
public sealed class Inno.Core.Serialization.GenerateSerializationConverterAttribute : System.Attribute
```

Requests a compile-time serialization converter for a closed data-transfer type.

**Constraints:** The annotated type must implement `Inno.Core.Serialization.ISerializable`, expose a constructor that generated
code can invoke, and use `Inno.Core.Serialization.SerializablePropertyAttribute` on every persisted member.
Types with polymorphic identity, reference graphs, or custom restoration invariants must use an
explicit converter instead.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/GenerateSerializationConverterAttribute.cs#L15).

## `#ctor`

<a id="api-2cea33f612b7cac5"></a>
<!-- api: M:Inno.Core.Serialization.GenerateSerializationConverterAttribute.#ctor 73722471ee5599bc3ae8dfce99247c2a55417984cbec0ab37354006899e49426 -->

```csharp
public Inno.Core.Serialization.GenerateSerializationConverterAttribute.GenerateSerializationConverterAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Attributes/GenerateSerializationConverterAttribute.cs#L15).
