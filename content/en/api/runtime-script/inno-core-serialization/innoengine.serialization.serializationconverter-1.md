---
title: "SerializationConverter`1"
description: "Reference for SerializationConverter`1 in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.fdb89d675aebb3d9
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# ``SerializationConverter`1``

This reference describes ``SerializationConverter`1`` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55210cd9e21809fd) | Method |
| [`Read`](#api-05f27859eacad169) | Method |
| [`Restore`](#api-bc6f8cec3a92faa1) | Method |
| [`TryCaptureKey`](#api-5e05bedf205bc36d) | Method |
| [`Write`](#api-b14f3e6b128c8a74) | Method |

## Type declaration

<a id="api-fdb89d675aebb3d9"></a>
<!-- api: T:InnoEngine.Serialization.SerializationConverter`1 0a5ee486b75d7fee51777a926090d5fe89864e3699f13c452e9069581b3b2bfc -->

```csharp
public abstract class InnoEngine.Serialization.SerializationConverter<T>
```

Defines the single advanced extension contract for serializing a specific value type.

**Type parameter `T`:** The value contract handled by the converter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L19).

## `#ctor`

<a id="api-55210cd9e21809fd"></a>
<!-- api: M:InnoEngine.Serialization.SerializationConverter`1.#ctor ab07d8eecbc06db2413311b1d50404a846492110a5d5ab28317dfdf6ba6874f1 -->

```csharp
protected InnoEngine.Serialization.SerializationConverter<T>.SerializationConverter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L19).

## `Read`

<a id="api-05f27859eacad169"></a>
<!-- api: M:InnoEngine.Serialization.SerializationConverter`1.Read(InnoEngine.Serialization.SerializationReader) 96f905da0d08de5c47929aa54ebe2ba86c0fb230fa1b8026f9c25f3a7bfe323e -->

```csharp
public abstract T InnoEngine.Serialization.SerializationConverter<T>.Read(InnoEngine.Serialization.SerializationReader reader)
```

Reads and creates a value from the current structured object.

**Parameter `reader`:** The operation-scoped reader.

**Returns:** The restored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L44).

## `Restore`

<a id="api-bc6f8cec3a92faa1"></a>
<!-- api: M:InnoEngine.Serialization.SerializationConverter`1.Restore(InnoEngine.Serialization.SerializationReader,`0) 0853ec9b7060c4184086ec35361513406f1bcb49f62a8a143a0f241d0145c40f -->

```csharp
public virtual void InnoEngine.Serialization.SerializationConverter<T>.Restore(InnoEngine.Serialization.SerializationReader reader, T target)
```

Restores data into an existing value.

**Parameter `reader`:** The operation-scoped reader.

**Parameter `target`:** The existing target value.

**Throws `System.NotSupportedException`:** Thrown when the converter does not support restoring existing values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L58).

## `TryCaptureKey`

<a id="api-5e05bedf205bc36d"></a>
<!-- api: M:InnoEngine.Serialization.SerializationConverter`1.TryCaptureKey(`0,InnoEngine.Serialization.SerializationCaptureKeyBuilder) c0b8411b28c37ad2bb4b5858e01d03014229f16ee44127c3deed57ce82844208 -->

```csharp
protected virtual bool InnoEngine.Serialization.SerializationConverter<T>.TryCaptureKey(T value, InnoEngine.Serialization.SerializationCaptureKeyBuilder key)
```

Optionally declares every input to a snapshot capture without writing data.

**Parameter `value`:** The current registered identity source.

**Parameter `key`:** The borrowed Core key builder, valid only during this synchronous callback.

**Returns:** True only when the complete output is covered; false retains ordinary authoritative capture.

**Constraints:** This callback must be pure and complete. It runs only for CaptureSnapshot; ordinary Serialize never uses it.
After a changed key, Core verifies the key again before publishing. Default converters do not opt in.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L81).

## `Write`

<a id="api-b14f3e6b128c8a74"></a>
<!-- api: M:InnoEngine.Serialization.SerializationConverter`1.Write(InnoEngine.Serialization.SerializationWriter,`0) e231f29d204a41631a793b58a3b4fd69171700e5dee5004dc2dd3647cb2a9c26 -->

```csharp
public abstract void InnoEngine.Serialization.SerializationConverter<T>.Write(InnoEngine.Serialization.SerializationWriter writer, T value)
```

Writes a value into the current structured object.

**Parameter `writer`:** The operation-scoped writer.

**Parameter `value`:** The value to write.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L30).
