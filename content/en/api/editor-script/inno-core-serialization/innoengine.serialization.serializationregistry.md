---
title: "SerializationRegistry"
description: "Reference for SerializationRegistry in Inno.Core.Serialization."
uid: api.inno.core.serialization.editor-script.8024cef9e9140e70
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: editor-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializationRegistry`

This reference describes `SerializationRegistry` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7f25c0f1ebb05475) | Method |
| [`CapturePropertiesData`](#api-aefbed455aaec59e) | Method |
| [`CapturePropertyData`](#api-52b89855445d02eb) | Method |
| [```Decode``1```](#api-656a720d972bb27c) | Method |
| [```Deserialize``1```](#api-889f3ee522c1c7e1) | Method |
| [`Dispose`](#api-ae1f6b1f11d1b335) | Method |
| [`Encode`](#api-dc04b5bafb999437) | Method |
| [`GetProperties`](#api-dc510e5c0ee17dab) | Method |
| [```Restore``1```](#api-dc3f60a98134661f) | Method |
| [```Serialize``1```](#api-df54315d523cb571) | Method |

## Type declaration

<a id="api-8024cef9e9140e70"></a>
<!-- api: T:InnoEngine.Serialization.SerializationRegistry d1f4ecf864ae1b5d6adb63d9fe2d8df2515568b788a6d9216b8b6f5540fbd97a -->

```csharp
public sealed class InnoEngine.Serialization.SerializationRegistry : System.IDisposable
```

Owns one generation-aware converter registry and provides deterministic root serialization operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L12).

## `#ctor`

<a id="api-7f25c0f1ebb05475"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.#ctor 5b6ce0e46f767a66e528881615170720ba40043f7f8ae50a5a0522d6f72030d9 -->

```csharp
public InnoEngine.Serialization.SerializationRegistry.SerializationRegistry()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L12).

## `CapturePropertiesData`

<a id="api-aefbed455aaec59e"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.CapturePropertiesData(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext) 8c2e65b9eddf88ead5fa6b81011bb3f13100eec9c1fd3899f9e7955ec4f96ed8 -->

```csharp
public byte[] InnoEngine.Serialization.SerializationRegistry.CapturePropertiesData(InnoEngine.Serialization.ISerializable value, InnoEngine.Serialization.SerializationContext? context = null)
```

Captures every persistent property as neutral bytes without serializing the owning object graph.

**Parameter `value`:** The serializable object whose persistent properties should be captured.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Strictly validated bytes containing independently encoded property values.

**Throws `System.ArgumentNullException`:** Thrown when `value` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L214).

## `CapturePropertyData`

<a id="api-52b89855445d02eb"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.CapturePropertyData(InnoEngine.Serialization.ISerializable,System.String,InnoEngine.Serialization.SerializationContext) 80bbdfe6598aedbc83190ea4462ca5dd67b22c0c0f0bb54b9e33bc0e6f52c852 -->

```csharp
public byte[] InnoEngine.Serialization.SerializationRegistry.CapturePropertyData(InnoEngine.Serialization.ISerializable value, string propertyName, InnoEngine.Serialization.SerializationContext? context = null)
```

Captures one persistent property as independently restorable neutral bytes without reading unrelated members.

**Parameter `value`:** The serializable object containing the requested property.

**Parameter `propertyName`:** The exact serialized member key to capture.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Neutral bytes containing the property name and encoded value.

**Throws `System.ArgumentNullException`:** Thrown when `value` is `null`.

**Throws `System.ArgumentException`:** Thrown when `propertyName` is empty or does not identify a persistent property.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L180).

## ```Decode``1```

<a id="api-656a720d972bb27c"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{InnoEngine.Serialization.SerializationReader,``0},InnoEngine.Serialization.SerializationContext) edf92b2b3389c2ab89fdcdff64d9c6cb51a03426f61ab47b953a31e9370a3bff -->

```csharp
public TResult InnoEngine.Serialization.SerializationRegistry.Decode<TResult>(System.ReadOnlySpan<byte> bytes, System.Func<InnoEngine.Serialization.SerializationReader, TResult> read, InnoEngine.Serialization.SerializationContext? context = null)
```

Decodes a manually defined structured schema from deterministic binary data.

**Type parameter `TResult`:** The result produced by the read callback.

**Parameter `bytes`:** The encoded bytes.

**Parameter `read`:** The callback that reads the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The callback result after all completion callbacks succeed.

**Throws `System.ArgumentNullException`:** Thrown when `read` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L621).

## ```Deserialize``1```

<a id="api-889f3ee522c1c7e1"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.Deserialize``1(System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext) 9411a05433e8c196d80c1645b7ee6fc77ea0a41bca045726f1cfe57a0a779f58 -->

```csharp
public T InnoEngine.Serialization.SerializationRegistry.Deserialize<T>(System.ReadOnlySpan<byte> bytes, InnoEngine.Serialization.SerializationContext? context = null) where T : class, InnoEngine.Serialization.ISerializable
```

Deserializes a new serializable root object from deterministic binary data.

**Type parameter `T`:** The concrete root type to create.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The restored object.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L470).

## `Dispose`

<a id="api-ae1f6b1f11d1b335"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.Dispose a1af93fc438e92056f20d02e9afb3ccd2e3ab529d4885891f3ae488f62f84a6c -->

```csharp
public void InnoEngine.Serialization.SerializationRegistry.Dispose()
```

Releases every converter generation owned by this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L45).

## `Encode`

<a id="api-dc04b5bafb999437"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.Encode(System.Action{InnoEngine.Serialization.SerializationWriter},InnoEngine.Serialization.SerializationContext) bdd82c27b30a4c7a2171ec5be2b99fdcc1df5316ef9efc501c54b20acd5f2792 -->

```csharp
public byte[] InnoEngine.Serialization.SerializationRegistry.Encode(System.Action<InnoEngine.Serialization.SerializationWriter> write, InnoEngine.Serialization.SerializationContext? context = null)
```

Encodes a manually defined structured schema into deterministic binary data.

**Parameter `write`:** The callback that writes the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Throws `System.ArgumentNullException`:** Thrown when `write` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L567).

## `GetProperties`

<a id="api-dc510e5c0ee17dab"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.GetProperties(InnoEngine.Serialization.ISerializable) d7fe7d9b6ad8d4e1a011d177cec5005705af2fb8d9dfafde3bd0650a45dab8c0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Serialization.SerializedProperty> InnoEngine.Serialization.SerializationRegistry.GetProperties(InnoEngine.Serialization.ISerializable value)
```

Gets the stable ordered runtime-visible properties for a serializable object.

**Parameter `value`:** The object whose property metadata should be created.

**Returns:** The properties that permit runtime reads.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L110).

## ```Restore``1```

<a id="api-dc3f60a98134661f"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.Restore``1(``0,System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext) 84f9634ab9fd7e52918eca55242a1390a4242398ac3122f7019ec29676098f30 -->

```csharp
public void InnoEngine.Serialization.SerializationRegistry.Restore<T>(T target, System.ReadOnlySpan<byte> bytes, InnoEngine.Serialization.SerializationContext? context = null) where T : class, InnoEngine.Serialization.ISerializable
```

Restores deterministic binary data into an existing serializable root object.

**Type parameter `T`:** The declared target contract.

**Parameter `target`:** The existing target object.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

**Throws `System.ArgumentNullException`:** Thrown when `target` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L525).

## ```Serialize``1```

<a id="api-df54315d523cb571"></a>
<!-- api: M:InnoEngine.Serialization.SerializationRegistry.Serialize``1(``0,InnoEngine.Serialization.SerializationContext) 22ace003393fa94d6aff6779cf04018413ad5e8cbfdc8cb99767922b5cd533d0 -->

```csharp
public byte[] InnoEngine.Serialization.SerializationRegistry.Serialize<T>(T value, InnoEngine.Serialization.SerializationContext? context = null) where T : class, InnoEngine.Serialization.ISerializable
```

Serializes a complete serializable root object into deterministic binary data.

**Type parameter `T`:** The declared concrete root type.

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.

**Throws `System.InvalidOperationException`:** Thrown when the manager is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/SerializationRegistry.cs#L363).
