---
title: "SerializationGeneration"
description: "Reference for SerializationGeneration in Inno.Core.Serialization."
uid: api.inno.core.serialization.629826818c1ca289
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationGeneration`

This reference describes `SerializationGeneration` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [```Decode``1```](#api-c8faf9c4019d2d9c) | Method |
| [```Deserialize``1```](#api-fe23d17205f7ed9e) | Method |
| [`Dispose`](#api-bb64b7bcbf5907dd) | Method |
| [`Encode`](#api-f3672a35d8da0d26) | Method |
| [```Serialize``1```](#api-a32124b1bf098381) | Method |

## Type declaration

<a id="api-629826818c1ca289"></a>
<!-- api: T:Inno.Core.Serialization.SerializationGeneration 17f9bf32c7924a338f280550b69a79c5daa0b550c6436c3e9f6e85b4f1baa766 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationGeneration : System.IDisposable
```

Pins one immutable converter generation so serialization remains deterministic across
asynchronous continuations and extension reloads.

**Constraints:** A generation may execute operations from any thread after it has been captured. The owner must
dispose it when the surrounding transaction completes so collectible extension generations can unload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationGeneration.cs#L14).

## ```Decode``1```

<a id="api-c8faf9c4019d2d9c"></a>
<!-- api: M:Inno.Core.Serialization.SerializationGeneration.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{Inno.Core.Serialization.SerializationReader,``0},Inno.Core.Serialization.SerializationContext) 70c36f02daa49e8953ba14d5052a7bf9cb98e39bf102f3e4a3aaf77e2dc3c45f -->

```csharp
public TResult Inno.Core.Serialization.SerializationGeneration.Decode<TResult>(System.ReadOnlySpan<byte> bytes, System.Func<Inno.Core.Serialization.SerializationReader, TResult> read, Inno.Core.Serialization.SerializationContext? context = null)
```

Decodes a manually defined structured root using the converter generation captured by this instance.

**Type parameter `TResult`:** The result produced by the read callback.

**Parameter `bytes`:** Deterministic binary data containing the structured root.

**Parameter `read`:** The callback that consumes the complete root object.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** The callback result after all restoration callbacks complete.

**Throws `System.ArgumentNullException`:** Thrown when `read` is null.

**Throws `System.ObjectDisposedException`:** Thrown when this generation has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationGeneration.cs#L128).

## ```Deserialize``1```

<a id="api-fe23d17205f7ed9e"></a>
<!-- api: M:Inno.Core.Serialization.SerializationGeneration.Deserialize``1(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext) 83431ecb5b6d6b07679fd019e157eb5f371405b6cd564655a520e8bc22e67960 -->

```csharp
public T Inno.Core.Serialization.SerializationGeneration.Deserialize<T>(System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationContext? context = null) where T : class, Inno.Core.Serialization.ISerializable
```

Deserializes a complete root object using the converter generation captured by this instance.

**Type parameter `T`:** The concrete root type to create.

**Parameter `bytes`:** Deterministic binary data containing the root object.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** The restored root object.

**Throws `System.ObjectDisposedException`:** Thrown when this generation has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationGeneration.cs#L73).

## `Dispose`

<a id="api-bb64b7bcbf5907dd"></a>
<!-- api: M:Inno.Core.Serialization.SerializationGeneration.Dispose 0af3c06f1fcf11f0f97f8d0a53dcdf3c3ac8455d8139ab1502c0c43745f21d18 -->

```csharp
public void Inno.Core.Serialization.SerializationGeneration.Dispose()
```

Releases the pinned converter generation and every collectible type reference owned by this lease.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationGeneration.cs#L138).

## `Encode`

<a id="api-f3672a35d8da0d26"></a>
<!-- api: M:Inno.Core.Serialization.SerializationGeneration.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext) dd640c58a09d286b82833d1b3550d6f5303b20f668334595dab93585b4293196 -->

```csharp
public byte[] Inno.Core.Serialization.SerializationGeneration.Encode(System.Action<Inno.Core.Serialization.SerializationWriter> write, Inno.Core.Serialization.SerializationContext? context = null)
```

Encodes a manually defined structured root using the converter generation captured by this instance.

**Parameter `write`:** The callback that writes the complete root object.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** Deterministic binary data containing the structured root.

**Throws `System.ArgumentNullException`:** Thrown when `write` is null.

**Throws `System.ObjectDisposedException`:** Thrown when this generation has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationGeneration.cs#L98).

## ```Serialize``1```

<a id="api-a32124b1bf098381"></a>
<!-- api: M:Inno.Core.Serialization.SerializationGeneration.Serialize``1(``0,Inno.Core.Serialization.SerializationContext) 25ba1604b162cfb7271399a3b644be530b679d22a71aa80d07476904c5c67bb8 -->

```csharp
public byte[] Inno.Core.Serialization.SerializationGeneration.Serialize<T>(T value, Inno.Core.Serialization.SerializationContext? context = null) where T : class, Inno.Core.Serialization.ISerializable
```

Serializes a complete root object using the converter generation captured by this instance.

**Type parameter `T`:** The declared concrete root type.

**Parameter `value`:** The non-null root object to encode.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** Deterministic binary data encoded by the captured converter generation.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.

**Throws `System.ObjectDisposedException`:** Thrown when this generation has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/SerializationGeneration.cs#L48).
