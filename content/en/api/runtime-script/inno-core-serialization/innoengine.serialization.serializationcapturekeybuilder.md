---
title: "SerializationCaptureKeyBuilder"
description: "Reference for SerializationCaptureKeyBuilder in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.d4d504dd725db198
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializationCaptureKeyBuilder`

This reference describes `SerializationCaptureKeyBuilder` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-25524c3de3df1385) | Method |
| [`AddText`](#api-5bd560718489c7b4) | Method |
| [`AddValue`](#api-200b7b0dbe091fd8) | Method |
| [`AddValue`](#api-d2233c00be4bafce) | Method |
| [`EnsureCapacity`](#api-8a988d24ad9423ee) | Method |
| [`TryAddOwner`](#api-b9e64229660a0ba7) | Method |
| [`TryAddProperties`](#api-3a854bb030b92f32) | Method |
| [`context`](#api-ac694767e5289527) | Property |

## Type declaration

<a id="api-d4d504dd725db198"></a>
<!-- api: T:InnoEngine.Serialization.SerializationCaptureKeyBuilder 94f66f5f48a2a1a160daa38d2936ab85ebad993bc92eb6bc22e45aba1d0fec4e -->

```csharp
public sealed class InnoEngine.Serialization.SerializationCaptureKeyBuilder
```

Builds an exact neutral key during one owned synchronous converter capture callback.

**Constraints:** Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not
serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L16).

## `#ctor`

<a id="api-25524c3de3df1385"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.#ctor a7a13dbd4d212ef530956b8bc7df8119dd120833977ad2451869d0a92ddd93cc -->

```csharp
public InnoEngine.Serialization.SerializationCaptureKeyBuilder.SerializationCaptureKeyBuilder()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L16).

## `AddText`

<a id="api-5bd560718489c7b4"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddText(System.String) 15e648a841c883daba7f7b3b04d94a2165e9748fe3a9b87c976444199b2e7de8 -->

```csharp
public void InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddText(string? value)
```

Adds exact ordinal text, preserving the distinction between null and empty.

**Parameter `value`:** The immutable current text input.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L192).

## `AddValue`

<a id="api-200b7b0dbe091fd8"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddValue(System.Guid) 5da37dc694fa44138d19cec0cf1d61950a4008da9c88bdc047e9d9ca51b6d423 -->

```csharp
public void InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddValue(System.Guid value)
```

Adds an exact neutral identifier without hashing or allocating text.

**Parameter `value`:** The current identifier input, including an empty identifier when meaningful.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L181).

## `AddValue`

<a id="api-d2233c00be4bafce"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddValue(System.UInt64) ef74da528c768808821184945415afd9bb982a80f0ec688b146a27a2e37bf997 -->

```csharp
public void InnoEngine.Serialization.SerializationCaptureKeyBuilder.AddValue(ulong value)
```

Adds an exact neutral numeric input to the declared key.

**Parameter `value`:** The current complete input value.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L170).

## `EnsureCapacity`

<a id="api-8a988d24ad9423ee"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32) 831e4700713eb9e624d93bb8d88b53a743638657438030758158839a6bb605d5 -->

```csharp
public void InnoEngine.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(int capacity)
```

Reserves capacity for actual frozen input entries without changing a matching key.

**Parameter `capacity`:** The expected total entry count, including Core guards.

**Throws `System.ArgumentOutOfRangeException`:** Capacity is negative.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L78).

## `TryAddOwner`

<a id="api-b9e64229660a0ba7"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(InnoEngine.Core.IdentityObject,System.Nullable{System.UInt64}) 92d704b9beb51421b1c7592ca95924d3a635d2225f59b428a30303baf74dc9fc -->

```csharp
public bool InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(InnoEngine.Core.IdentityObject source, ulong? revision)
```

Adds an owner revision through its current Core identity; a null revision or detached source invalidates the key.

**Parameter `source`:** The current owner, never retained in the completed key.

**Parameter `revision`:** A complete revision for the producer-owned state, or null when reuse cannot be certified.

**Returns:** True when an identity and revision were available; false invalidates the complete key.

**Throws `System.ArgumentNullException`:** Source is null.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L105).

## `TryAddProperties`

<a id="api-3a854bb030b92f32"></a>
<!-- api: M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(InnoEngine.Serialization.ISerializable) 9cdab1f4bc7d48aeab3c3f3502e06a1d12075538ba332a12a41459fb90f5d8b3 -->

```csharp
public bool InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(InnoEngine.Serialization.ISerializable source)
```

Adds a complete property revision only when current metadata proves context-free default capture without converters.

**Parameter `source`:** The current serializable identity object.

**Returns:** True for certified property state; false invalidates the complete key and requires normal capture.

**Throws `System.ArgumentNullException`:** Source is null.

**Throws `System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L134).

## `context`

<a id="api-ac694767e5289527"></a>
<!-- api: P:InnoEngine.Serialization.SerializationCaptureKeyBuilder.context 9d25cba17a943067ef9017056094b3764d4ce748acb181e3a1f0760496b22525 -->

```csharp
public InnoEngine.Serialization.SerializationContext InnoEngine.Serialization.SerializationCaptureKeyBuilder.context { get; }
```

Gets the current immutable owner context while this callback is active.

**Throws `System.InvalidOperationException`:** The callback has retired or is accessed from another thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Capture/SerializationCaptureKeyBuilder.cs#L64).
