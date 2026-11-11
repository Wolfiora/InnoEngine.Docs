---
title: "SerializationRevisionAttribute"
description: "Reference for SerializationRevisionAttribute in Inno.Core.Serialization."
uid: api.inno.core.serialization.cece4bab5907d676
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationRevisionAttribute`

This reference describes `SerializationRevisionAttribute` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-624f6dbe1cbe8d00) | Method |
| [`memberName`](#api-176cc4c4870626e7) | Property |

## Type declaration

<a id="api-cece4bab5907d676"></a>
<!-- api: T:Inno.Core.Serialization.SerializationRevisionAttribute e49647c08c1f418466ab48adab7ddd73a70b19cc71fbe736c64f29102c42d02b -->

```csharp
public sealed class Inno.Core.Serialization.SerializationRevisionAttribute : System.Attribute
```

Declares a sealed identity source's transient revision member, which covers all serialized state and pure getters.

**Constraints:** The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation;
null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationRevisionAttribute.cs#L13).

## `#ctor`

<a id="api-624f6dbe1cbe8d00"></a>
<!-- api: M:Inno.Core.Serialization.SerializationRevisionAttribute.#ctor(System.String) 47d42e2a55ba785652056081a29a9de665d5352efe06e9156fd770ad238a9fa3 -->

```csharp
public Inno.Core.Serialization.SerializationRevisionAttribute.SerializationRevisionAttribute(string memberName)
```

Selects the source-owned nonserialized revision field or property.

**Parameter `memberName`:** The exact nonstatic field or readable nonindexed property name.

**Throws `System.ArgumentException`:** The name is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationRevisionAttribute.cs#L24).

## `memberName`

<a id="api-176cc4c4870626e7"></a>
<!-- api: P:Inno.Core.Serialization.SerializationRevisionAttribute.memberName b7eb7e11d44a6f0466b3bfb3cb1afd2002595cbcaf75bef3c031735a4bb47772 -->

```csharp
public string Inno.Core.Serialization.SerializationRevisionAttribute.memberName { get; }
```

Gets the exact source-owned revision member name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationRevisionAttribute.cs#L33).
