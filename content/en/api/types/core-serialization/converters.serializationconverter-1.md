---
title: "Converters.SerializationConverter`1"
description: "Reference for Converters.SerializationConverter`1 in Inno.Core.Serialization."
uid: api.inno.core.serialization.a77a03185f231f88
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# ``Converters.SerializationConverter`1``

This reference describes ``Converters.SerializationConverter`1`` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Serialization.Converters.SerializationConverter`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-949b7721dbc9ff96) | Method |
| [`Read`](#api-7f150363e1234329) | Method |
| [`Restore`](#api-33ca386c4b08e5fd) | Method |
| [`TryCaptureKey`](#api-3d9690701b7c27b4) | Method |
| [`Write`](#api-ec99400cd4570887) | Method |

## Type declaration

<a id="api-a77a03185f231f88"></a>
<!-- api: T:Inno.Core.Serialization.Converters.SerializationConverter`1 1e82987af3daf6297ffc6e4111cadadc128846f946a7378e031689a350391016 -->

```csharp
public abstract class Inno.Core.Serialization.Converters.SerializationConverter<T> : Inno.Core.Serialization.Converters.SerializationConverter
```

Defines the single advanced extension contract for serializing a specific value type.

**Type parameter `T`:** The value contract handled by the converter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L19).

## `#ctor`

<a id="api-949b7721dbc9ff96"></a>
<!-- api: M:Inno.Core.Serialization.Converters.SerializationConverter`1.#ctor 654b06431a2fac0fa38fe554ad8094f0270b7793c80a135af8cecb64757e725b -->

```csharp
protected Inno.Core.Serialization.Converters.SerializationConverter<T>.SerializationConverter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L19).

## `Read`

<a id="api-7f150363e1234329"></a>
<!-- api: M:Inno.Core.Serialization.Converters.SerializationConverter`1.Read(Inno.Core.Serialization.SerializationReader) 48607f9850741206e4e0f19d1c8955f72364f3bd34a5e3856f6bfd65bac707a0 -->

```csharp
public abstract T Inno.Core.Serialization.Converters.SerializationConverter<T>.Read(Inno.Core.Serialization.SerializationReader reader)
```

Reads and creates a value from the current structured object.

**Parameter `reader`:** The operation-scoped reader.

**Returns:** The restored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L44).

## `Restore`

<a id="api-33ca386c4b08e5fd"></a>
<!-- api: M:Inno.Core.Serialization.Converters.SerializationConverter`1.Restore(Inno.Core.Serialization.SerializationReader,`0) cba1bf0836cf98f2a62e08614137940a37a78f8040156f8ff6943226794b77fe -->

```csharp
public virtual void Inno.Core.Serialization.Converters.SerializationConverter<T>.Restore(Inno.Core.Serialization.SerializationReader reader, T target)
```

Restores data into an existing value.

**Parameter `reader`:** The operation-scoped reader.

**Parameter `target`:** The existing target value.

**Throws `System.NotSupportedException`:** Thrown when the converter does not support restoring existing values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L58).

## `TryCaptureKey`

<a id="api-3d9690701b7c27b4"></a>
<!-- api: M:Inno.Core.Serialization.Converters.SerializationConverter`1.TryCaptureKey(`0,Inno.Core.Serialization.SerializationCaptureKeyBuilder) 242ab82d7388793f935010754f931138b8f1aed9eb9217dafffcfc85ab47121d -->

```csharp
protected virtual bool Inno.Core.Serialization.Converters.SerializationConverter<T>.TryCaptureKey(T value, Inno.Core.Serialization.SerializationCaptureKeyBuilder key)
```

Optionally declares every input to a snapshot capture without writing data.

**Parameter `value`:** The current registered identity source.

**Parameter `key`:** The borrowed Core key builder, valid only during this synchronous callback.

**Returns:** True only when the complete output is covered; false retains ordinary authoritative capture.

**Constraints:** This callback must be pure and complete. It runs only for CaptureSnapshot; ordinary Serialize never uses it.
After a changed key, Core verifies the key again before publishing. Default converters do not opt in.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L81).

## `Write`

<a id="api-ec99400cd4570887"></a>
<!-- api: M:Inno.Core.Serialization.Converters.SerializationConverter`1.Write(Inno.Core.Serialization.SerializationWriter,`0) 55f7426415e872ee1322ecb26d05a6cc4e3ad25fcfd01ca8abd6fb1da1d94fc6 -->

```csharp
public abstract void Inno.Core.Serialization.Converters.SerializationConverter<T>.Write(Inno.Core.Serialization.SerializationWriter writer, T value)
```

Writes a value into the current structured object.

**Parameter `writer`:** The operation-scoped writer.

**Parameter `value`:** The value to write.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Converters/SerializationConverter.cs#L30).
