---
title: "SerializationCaptureKeyBuilder"
description: "Reference for SerializationCaptureKeyBuilder in Inno.Core.Serialization."
uid: api.inno.core.serialization.6f07b7634363d447
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationCaptureKeyBuilder`

This reference describes `SerializationCaptureKeyBuilder` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AddText`](#api-52868b779c7dc412) | Method |
| [`AddValue`](#api-5e21a658586ed95e) | Method |
| [`AddValue`](#api-83d81abb5af4d860) | Method |
| [`EnsureCapacity`](#api-b8b89bec6df537f8) | Method |
| [`TryAddOwner`](#api-f804c1f20b454dbd) | Method |
| [`TryAddProperties`](#api-3928368a92ede019) | Method |
| [`context`](#api-d97fb2c2865d03d9) | Property |

## Type declaration

<a id="api-6f07b7634363d447"></a>
<!-- api: T:Inno.Core.Serialization.SerializationCaptureKeyBuilder 6c97de0261870eb0b2ca7b43da673bbc954ac0cdb3d5651765f2c36f31bb68b9 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationCaptureKeyBuilder
```

Builds an exact neutral key during one owned synchronous converter capture callback.

**Constraints:** Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not
serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L16).

## `AddText`

<a id="api-52868b779c7dc412"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.AddText(System.String) 6c9c299d231276f170056bd9e2df9e3d2138e9ddf81229fa2790493636c2b821 -->

```csharp
public void Inno.Core.Serialization.SerializationCaptureKeyBuilder.AddText(string? value)
```

Adds exact ordinal text, preserving the distinction between null and empty.

**Parameter `value`:** The immutable current text input.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L192).

## `AddValue`

<a id="api-5e21a658586ed95e"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.AddValue(System.Guid) d7df60a5ecaa3629190e2a1e1fd3e16a727574633203c1154c650771b12776a0 -->

```csharp
public void Inno.Core.Serialization.SerializationCaptureKeyBuilder.AddValue(System.Guid value)
```

Adds an exact neutral identifier without hashing or allocating text.

**Parameter `value`:** The current identifier input, including an empty identifier when meaningful.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L181).

## `AddValue`

<a id="api-83d81abb5af4d860"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.AddValue(System.UInt64) da6b1c5af5b7a4064330c4c6454b600fe1d0153826f7563c9ba01439e91a8315 -->

```csharp
public void Inno.Core.Serialization.SerializationCaptureKeyBuilder.AddValue(ulong value)
```

Adds an exact neutral numeric input to the declared key.

**Parameter `value`:** The current complete input value.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L170).

## `EnsureCapacity`

<a id="api-b8b89bec6df537f8"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32) 85368cff5690182ff05680562168d382346aa6c09b171649a5c70802a2464da2 -->

```csharp
public void Inno.Core.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(int capacity)
```

Reserves capacity for actual frozen input entries without changing a matching key.

**Parameter `capacity`:** The expected total entry count, including Core guards.

**Throws `System.ArgumentOutOfRangeException`:** Capacity is negative.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L78).

## `TryAddOwner`

<a id="api-f804c1f20b454dbd"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(Inno.Core.Identity.IdentityObject,System.Nullable{System.UInt64}) ff96320ab89162c6486f565a3bd1a9174177bda8a104e44d0150b17877845efd -->

```csharp
public bool Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(Inno.Core.Identity.IdentityObject source, ulong? revision)
```

Adds an owner revision through its current Core identity; a null revision or detached source invalidates the key.

**Parameter `source`:** The current owner, never retained in the completed key.

**Parameter `revision`:** A complete revision for the producer-owned state, or null when reuse cannot be certified.

**Returns:** True when an identity and revision were available; false invalidates the complete key.

**Throws `System.ArgumentNullException`:** Source is null.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L105).

## `TryAddProperties`

<a id="api-3928368a92ede019"></a>
<!-- api: M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(Inno.Core.Serialization.ISerializable) dda539c1be3d7d72c4aa0a2c3b338840af0f399dad581cd3b0c7e32bc59a62cd -->

```csharp
public bool Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(Inno.Core.Serialization.ISerializable source)
```

Adds a complete property revision only when current metadata proves context-free default capture without converters.

**Parameter `source`:** The current serializable identity object.

**Returns:** True for certified property state; false invalidates the complete key and requires normal capture.

**Throws `System.ArgumentNullException`:** Source is null.

**Throws `System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L134).

## `context`

<a id="api-d97fb2c2865d03d9"></a>
<!-- api: P:Inno.Core.Serialization.SerializationCaptureKeyBuilder.context 2ef0aecc865385075552b213d81f74edbb099fd65ea180fa70bceb058a352085 -->

```csharp
public Inno.Core.Serialization.SerializationContext Inno.Core.Serialization.SerializationCaptureKeyBuilder.context { get; }
```

Gets the current immutable owner context while this callback is active.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L64).
