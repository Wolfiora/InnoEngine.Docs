---
title: "SerializationCollectionMetadata"
description: "Reference for SerializationCollectionMetadata in Inno.Core.Serialization."
uid: api.inno.core.serialization.6db23bce20aeb15c
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationCollectionMetadata`

This reference describes `SerializationCollectionMetadata` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4308240581e0ca6d) | Method |
| [`buildMap`](#api-b20d049e93ee3212) | Property |
| [`buildSequence`](#api-7a8e82bf4eccaaca) | Property |
| [`elementType`](#api-de3e179936eb5bed) | Property |
| [`enumerateMap`](#api-034c53bff0c53f48) | Property |
| [`keyType`](#api-a69c1e52938095bf) | Property |

## Type declaration

<a id="api-6db23bce20aeb15c"></a>
<!-- api: T:Inno.Core.Serialization.SerializationCollectionMetadata f6317e7d1d94853d92e5cb51516b00ecd2e3701bccf152796ea8bb9578c2926f -->

```csharp
public sealed class Inno.Core.Serialization.SerializationCollectionMetadata
```

Supplies typed collection construction and map enumeration without runtime generic compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L9).

## `#ctor`

<a id="api-4308240581e0ca6d"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCollectionMetadata.#ctor(System.Type,System.Type,System.Func{System.Collections.Generic.IReadOnlyList{System.Object},System.Object},System.Func{System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}},System.Object},System.Func{System.Object,System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}}}) 342a657e5dbb940d2a9bbb4463b05c77cda6fbda159d1b9e9975d02f87edfed3 -->

```csharp
public Inno.Core.Serialization.SerializationCollectionMetadata.SerializationCollectionMetadata(System.Type elementType, System.Type? keyType, System.Func<System.Collections.Generic.IReadOnlyList<object?>, object>? buildSequence, System.Func<System.Collections.Generic.IReadOnlyList<System.Collections.Generic.KeyValuePair<object?, object?>>, object>? buildMap, System.Func<object, System.Collections.Generic.IReadOnlyList<System.Collections.Generic.KeyValuePair<object?, object?>>>? enumerateMap)
```

Defines the shape and typed operations of a sequence or map.

**Parameter `elementType`:** The sequence element or map value type.

**Parameter `keyType`:** The map key type, or null for a sequence.

**Parameter `buildSequence`:** A sequence factory, or null for a map.

**Parameter `buildMap`:** A map factory, or null for a sequence.

**Parameter `enumerateMap`:** Typed map enumeration, or null for a sequence.

**Throws `System.ArgumentException`:** The operations do not describe exactly one complete collection shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L32).

## `buildMap`

<a id="api-b20d049e93ee3212"></a>
<!-- api: P:Inno.Core.Serialization.SerializationCollectionMetadata.buildMap 8896ed958cf71f7c6d670ac9e7724da729a0f6381908bf9ef8c8edb640362c46 -->

```csharp
public System.Func<System.Collections.Generic.IReadOnlyList<System.Collections.Generic.KeyValuePair<object?, object?>>, object>? Inno.Core.Serialization.SerializationCollectionMetadata.buildMap { get; }
```

Gets the typed map constructor, or null for a sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L68).

## `buildSequence`

<a id="api-7a8e82bf4eccaaca"></a>
<!-- api: P:Inno.Core.Serialization.SerializationCollectionMetadata.buildSequence d40ef4c4da4b369b1207773a8ddb65a8564c30c750af4596ab37d7b827911a3c -->

```csharp
public System.Func<System.Collections.Generic.IReadOnlyList<object?>, object>? Inno.Core.Serialization.SerializationCollectionMetadata.buildSequence { get; }
```

Gets the typed sequence constructor, or null for a map.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L63).

## `elementType`

<a id="api-de3e179936eb5bed"></a>
<!-- api: P:Inno.Core.Serialization.SerializationCollectionMetadata.elementType 19cc39e70aa108fe907b3749cd83b4364c2fc126a67f98c999414c37237bb4ab -->

```csharp
public System.Type Inno.Core.Serialization.SerializationCollectionMetadata.elementType { get; }
```

Gets the sequence element or map value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L53).

## `enumerateMap`

<a id="api-034c53bff0c53f48"></a>
<!-- api: P:Inno.Core.Serialization.SerializationCollectionMetadata.enumerateMap dd722e6587623eb0e2358eb63e0852d29c61eb9853fdcfe1d8a53a0f0b57e517 -->

```csharp
public System.Func<object, System.Collections.Generic.IReadOnlyList<System.Collections.Generic.KeyValuePair<object?, object?>>>? Inno.Core.Serialization.SerializationCollectionMetadata.enumerateMap { get; }
```

Gets typed map enumeration, or null for a sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L73).

## `keyType`

<a id="api-a69c1e52938095bf"></a>
<!-- api: P:Inno.Core.Serialization.SerializationCollectionMetadata.keyType 4174864a2d226e6fe30c0ea0fbdb303745721f6a589af61aa7ef354ea429ba2f -->

```csharp
public System.Type? Inno.Core.Serialization.SerializationCollectionMetadata.keyType { get; }
```

Gets the map key type, or null for a sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Metadata/SerializationCollectionMetadata.cs#L58).
