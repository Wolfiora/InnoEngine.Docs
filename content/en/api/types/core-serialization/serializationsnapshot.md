---
title: "SerializationSnapshot"
description: "Reference for SerializationSnapshot in Inno.Core.Serialization."
uid: api.inno.core.serialization.839fb78ae8c26a3e
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationSnapshot`

This reference describes `SerializationSnapshot` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ToArray`](#api-34c92f5b1e07bfd5) | Method |
| [`WriteTo`](#api-23e71b4b24a157b0) | Method |

## Type declaration

<a id="api-839fb78ae8c26a3e"></a>
<!-- api: T:Inno.Core.Serialization.SerializationSnapshot 883dcbcf6107904ff950202670cec521ec54015a55c5c575d0b13d37f76d0b1c -->

```csharp
public sealed class Inno.Core.Serialization.SerializationSnapshot
```

Holds an immutable, neutral capture of serialized values without retaining the source object or its generation.

**Constraints:** Capture again through ```Inno.Core.Serialization.SerializationRegistry.CaptureSnapshot``1(``0,Inno.Core.Serialization.SerializationContext,Inno.Core.Serialization.SerializationSnapshot)``` to reuse unchanged values.
Readers may share a snapshot across threads. It owns only scalar values, strings and copied binary data,
never source instances, metadata, converters or delegates. It is transient and is not a persistence format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationSnapshot.cs#L14).

## `ToArray`

<a id="api-34c92f5b1e07bfd5"></a>
<!-- api: M:Inno.Core.Serialization.SerializationSnapshot.ToArray a00c841730036584c0d4932feb4fa74d9d4ba0bd81b8ba3a094413eebbfc5ec1 -->

```csharp
public byte[] Inno.Core.Serialization.SerializationSnapshot.ToArray()
```

Encodes this capture using the same deterministic binary format as ordinary serialization.

**Returns:** A new caller-owned byte array; changing it cannot modify this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationSnapshot.cs#L24).

## `WriteTo`

<a id="api-23e71b4b24a157b0"></a>
<!-- api: M:Inno.Core.Serialization.SerializationSnapshot.WriteTo(System.IO.Stream) 2ad80e7b3b82905c0947b3072c2fde0b65008063c5393f1f983063160b61cb52 -->

```csharp
public void Inno.Core.Serialization.SerializationSnapshot.WriteTo(System.IO.Stream destination)
```

Streams this capture in the ordinary deterministic binary format without requiring a contiguous complete-output buffer.

**Parameter `destination`:** The writable caller-owned stream, which remains open.

**Constraints:** Immutable keyed objects may retain canonical encoded blocks of at most 64 KiB each. Larger
objects remain streamed, and cached bytes never contain source objects or generation references.

**Throws `System.ArgumentNullException`:** The destination is null.

**Throws `System.ArgumentException`:** The destination cannot be written.

**Throws `System.IO.IOException`:** The destination rejects a write; its partial bytes remain the caller's responsibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationSnapshot.cs#L45).
