---
title: "SerializationTypeMetadata"
description: "Reference for SerializationTypeMetadata in Inno.Core.Serialization."
uid: api.inno.core.serialization.54f9b83dc96f194a
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationTypeMetadata`

This reference describes `SerializationTypeMetadata` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7a427659b5f98683) | Method |
| [`CreateInstance`](#api-18a4bb440a35330c) | Method |
| [`WithCaptureRevision`](#api-83806fe2248aa3b5) | Method |
| [`WithPureFieldAccess`](#api-bab6b904832d8c2b) | Method |
| [`collection`](#api-a942d7ce44c4bbea) | Property |
| [`members`](#api-e216f1b9fd5a8856) | Property |
| [`requiresConverter`](#api-09a82af69190b388) | Property |
| [`restored`](#api-656ec679b4a72c5e) | Property |
| [`type`](#api-88e89d6ba6df602c) | Property |

## Type declaration

<a id="api-54f9b83dc96f194a"></a>
<!-- api: T:Inno.Core.Serialization.SerializationTypeMetadata cf0a2ad5ab2e7a767949dadb442e3b2ede3d55225536f6e18cf2d782a5693cac -->

```csharp
public sealed class Inno.Core.Serialization.SerializationTypeMetadata
```

Freezes member access, construction and restoration callbacks for an exact closed declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L10).

## `#ctor`

<a id="api-7a427659b5f98683"></a>
<!-- api: M:Inno.Core.Serialization.SerializationTypeMetadata.#ctor(System.Type,System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationMemberMetadata},System.Func{System.Object},System.Action{System.Object,Inno.Core.Serialization.SerializationContext},Inno.Core.Serialization.SerializationCollectionMetadata,System.Boolean,Inno.Core.Serialization.SerializationTypeMetadata) 790a9f2e14f0921f88db6eef1c618af8bbf9144c84152dff3fb39896346058e9 -->

```csharp
public Inno.Core.Serialization.SerializationTypeMetadata.SerializationTypeMetadata(System.Type type, System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationMemberMetadata> members, System.Func<object>? factory, System.Action<object, Inno.Core.Serialization.SerializationContext>? restored = null, Inno.Core.Serialization.SerializationCollectionMetadata? collection = null, bool requiresConverter = false, Inno.Core.Serialization.SerializationTypeMetadata? inherited = null)
```

Copies complete declaration metadata before it participates in a serialization generation.

**Parameter `type`:** The exact closed declaration.

**Parameter `members`:** Ordered persistent and runtime members, without duplicate keys.

**Parameter `factory`:** A parameterless constructor, or null when an explicit converter owns construction.

**Parameter `restored`:** An ordered restoration callback, or null when the type declares no hooks.

**Parameter `collection`:** Optional sequence or map construction and enumeration metadata.

**Parameter `requiresConverter`:** Whether default object serialization must be rejected.

**Parameter `inherited`:** Optional metadata contributed by the owner of a base declaration.

**Throws `System.ArgumentException`:** A member is null or a persistent key is duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L42).

## `CreateInstance`

<a id="api-18a4bb440a35330c"></a>
<!-- api: M:Inno.Core.Serialization.SerializationTypeMetadata.CreateInstance 86862e15977bc7f84d317f062f3d5153bb45d95d0c029c102e95143e16ab492b -->

```csharp
public object Inno.Core.Serialization.SerializationTypeMetadata.CreateInstance()
```

Creates a new instance through the declaration's selected constructor.

**Returns:** A new caller-owned instance; a missing factory or failed constructor throws.

**Throws `System.InvalidOperationException`:** No parameterless constructor is supplied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L159).

## `WithCaptureRevision`

<a id="api-83806fe2248aa3b5"></a>
<!-- api: M:Inno.Core.Serialization.SerializationTypeMetadata.WithCaptureRevision(System.Func{System.Object,System.Nullable{System.UInt64}}) 6e24281b721a57687b72a2c39297a77d70c5d00b2342bb3135f227a741e1173a -->

```csharp
public Inno.Core.Serialization.SerializationTypeMetadata Inno.Core.Serialization.SerializationTypeMetadata.WithCaptureRevision(System.Func<object, ulong?> readRevision)
```

Declares complete pure serialized-property revision access for a sealed serializable identity source.

**Parameter `readRevision`:** The owner-controlled revision reader; null results decline reuse and counters must not repeat for different state.

**Returns:** An immutable declaration; snapshots never retain this reader or metadata.

**Throws `System.ArgumentNullException`:** The revision reader is null.

**Throws `System.InvalidOperationException`:** The declaration is not a sealed identity reference type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L134).

## `WithPureFieldAccess`

<a id="api-bab6b904832d8c2b"></a>
<!-- api: M:Inno.Core.Serialization.SerializationTypeMetadata.WithPureFieldAccess 0da51207ebb97cea53f9f8d209c0fca3d2c68ada4293bc6836c205943df23b76 -->

```csharp
public Inno.Core.Serialization.SerializationTypeMetadata Inno.Core.Serialization.SerializationTypeMetadata.WithPureFieldAccess()
```

Declares that every serialized member of this value type reads a direct primitive field.

**Returns:** An immutable declaration with pure field access; the original declaration remains unchanged.

**Throws `System.InvalidOperationException`:** The declaration is not a default value type with primitive serialized members.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L108).

## `collection`

<a id="api-a942d7ce44c4bbea"></a>
<!-- api: P:Inno.Core.Serialization.SerializationTypeMetadata.collection 176332da5e6f8b8e26e5bc12641e2df27b8e6a33f4050154ec31f63cef227f4c -->

```csharp
public Inno.Core.Serialization.SerializationCollectionMetadata? Inno.Core.Serialization.SerializationTypeMetadata.collection { get; }
```

Gets collection access metadata, or null for a scalar or object declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L92).

## `members`

<a id="api-e216f1b9fd5a8856"></a>
<!-- api: P:Inno.Core.Serialization.SerializationTypeMetadata.members aa4bb144e3e068bed35d19dd6da8c65ebccbdc1995b374ccb75f455150290c98 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationMemberMetadata> Inno.Core.Serialization.SerializationTypeMetadata.members { get; }
```

Gets ordered immutable member declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L82).

## `requiresConverter`

<a id="api-09a82af69190b388"></a>
<!-- api: P:Inno.Core.Serialization.SerializationTypeMetadata.requiresConverter b0933ec2d98dd4a4b6245e599acc14de4455e744adab6aeda88d58405cba3185 -->

```csharp
public bool Inno.Core.Serialization.SerializationTypeMetadata.requiresConverter { get; }
```

Gets whether default object serialization requires an explicit converter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L97).

## `restored`

<a id="api-656ec679b4a72c5e"></a>
<!-- api: P:Inno.Core.Serialization.SerializationTypeMetadata.restored 7c1542d881f25587817d8f59eff17b54b2ee1fb00f15043311068fdb57a501f2 -->

```csharp
public System.Action<object, Inno.Core.Serialization.SerializationContext>? Inno.Core.Serialization.SerializationTypeMetadata.restored { get; }
```

Gets the generation-owned restoration callback, or null when no hooks are declared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L87).

## `type`

<a id="api-88e89d6ba6df602c"></a>
<!-- api: P:Inno.Core.Serialization.SerializationTypeMetadata.type 9af26a12a9db4f9ae35845ad8e66bc8144a850c3c6fbf9b3e1a4ee13775a080b -->

```csharp
public System.Type Inno.Core.Serialization.SerializationTypeMetadata.type { get; }
```

Gets the exact closed declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationTypeMetadata.cs#L77).
