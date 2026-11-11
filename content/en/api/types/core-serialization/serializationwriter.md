---
title: "SerializationWriter"
description: "Reference for SerializationWriter in Inno.Core.Serialization."
uid: api.inno.core.serialization.9e8e30016feba2fd
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationWriter`

This reference describes `SerializationWriter` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Write`](#api-aed44d097eab215e) | Method |
| [```Write``1```](#api-6324d9176a45e173) | Method |
| [`WriteObject`](#api-5cde4545c5255e8d) | Method |
| [```WriteObjectArray``1```](#api-235ba4940b04409b) | Method |
| [`WriteProperties`](#api-7b8a863cc76b6a81) | Method |
| [`WritePropertiesData`](#api-50a81629de922ddd) | Method |
| [`context`](#api-300839d749d9405c) | Property |
| [`path`](#api-cc80ec5f8d58fc03) | Property |
| [`typeSnapshot`](#api-fd613717a762d4ca) | Property |
| [`valueType`](#api-afe33d543cdcbbc9) | Property |

## Type declaration

<a id="api-9e8e30016feba2fd"></a>
<!-- api: T:Inno.Core.Serialization.SerializationWriter 8ffe0a7db4d99f8cfbbcbc0c594613b6d5f82d9610e1c25339b7af1e9d97a76e -->

```csharp
public sealed class Inno.Core.Serialization.SerializationWriter
```

Writes a structured object during the active serialization operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L11).

## `Write`

<a id="api-aed44d097eab215e"></a>
<!-- api: M:Inno.Core.Serialization.SerializationWriter.Write(System.String,System.Object,System.Type) 681857d4266171ff3409d70aa6d221f5302ef8cad1cfcb9c2a93fa12bc08c989 -->

```csharp
public void Inno.Core.Serialization.SerializationWriter.Write(string name, object? value, System.Type declaredType)
```

Writes a value using its declared metadata type without constructing a generic method at runtime.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to encode, including null when permitted by the declared type.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

**Throws `System.ArgumentNullException`:** The declared type is null.

**Throws `System.ArgumentException`:** The member name is empty.

**Throws `System.InvalidOperationException`:** The operation has ended, the name is duplicated, or the value is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L131).

## ```Write``1```

<a id="api-6324d9176a45e173"></a>
<!-- api: M:Inno.Core.Serialization.SerializationWriter.Write``1(System.String,``0) 0c61a07bec280ab01e7bba3e6fabd27fa81dead420b2055538776d0113d89145 -->

```csharp
public void Inno.Core.Serialization.SerializationWriter.Write<TValue>(string name, TValue value)
```

Writes a named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to write.

**Throws `System.ArgumentException`:** Thrown when `name` is empty.

**Throws `System.InvalidOperationException`:** Thrown when the name is duplicated or the value is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L90).

## `WriteObject`

<a id="api-5cde4545c5255e8d"></a>
<!-- api: M:Inno.Core.Serialization.SerializationWriter.WriteObject(System.String,System.Action{Inno.Core.Serialization.SerializationWriter}) 32a7ca695c18e8760348ad49c94c92a4804f060caf485451bc8cd0931fe19201 -->

```csharp
public void Inno.Core.Serialization.SerializationWriter.WriteObject(string name, System.Action<Inno.Core.Serialization.SerializationWriter> write)
```

Writes a named structured object.

**Parameter `name`:** The unique non-empty member name.

**Parameter `write`:** The callback that fills the child object.

**Throws `System.ArgumentNullException`:** Thrown when `write` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L156).

## ```WriteObjectArray``1```

<a id="api-235ba4940b04409b"></a>
<!-- api: M:Inno.Core.Serialization.SerializationWriter.WriteObjectArray``1(System.String,System.Collections.Generic.IEnumerable{``0},System.Action{Inno.Core.Serialization.SerializationWriter,``0},System.Func{``0,Inno.Core.Serialization.SerializationCaptureKeyBuilder,System.Boolean}) 49e9c85ae52c7da5bbfd94c601792876a083d9ca46845d10614710c569c6c3a8 -->

```csharp
public void Inno.Core.Serialization.SerializationWriter.WriteObjectArray<TValue>(string name, System.Collections.Generic.IEnumerable<TValue> values, System.Action<Inno.Core.Serialization.SerializationWriter, TValue> writeElement, System.Func<TValue, Inno.Core.Serialization.SerializationCaptureKeyBuilder, bool>? captureKey = null)
```

Writes an ordered array of structured objects.

**Type parameter `TValue`:** The source element type.

**Parameter `name`:** The unique non-empty member name.

**Parameter `values`:** The elements to write.

**Parameter `writeElement`:** The callback that fills each element object.

**Parameter `captureKey`:** An optional pure callback covering every element output and contextual input. It must declare
a current Core identity owner and return true only for a complete proof. Snapshot capture alone
can reuse a matching element; ordinary serialization always executes writeElement.

**Constraints:** The key builder belongs only to its synchronous callback. Uncertified rows and rows that invoke
nested converters execute the ordinary element writer on every capture. Callback failures and
changed declared inputs abort publication without modifying a previous snapshot.

**Throws `System.ArgumentNullException`:** Values or writeElement is null.

**Throws `System.ArgumentException`:** The member name is null, empty or whitespace.

**Throws `System.InvalidOperationException`:** The writer has retired, a member is duplicated, or declared capture inputs change during writing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L204).

## `WriteProperties`

<a id="api-7b8a863cc76b6a81"></a>
<!-- api: M:Inno.Core.Serialization.SerializationWriter.WriteProperties(Inno.Core.Serialization.ISerializable) 72541ebb0931fbb270821e0b936892fd218b76546b82769419e664926f620da9 -->

```csharp
public void Inno.Core.Serialization.SerializationWriter.WriteProperties(Inno.Core.Serialization.ISerializable value)
```

Writes annotated properties from a serializable object into the current structured object.

**Parameter `value`:** The object whose annotated properties should be written.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L269).

## `WritePropertiesData`

<a id="api-50a81629de922ddd"></a>
<!-- api: M:Inno.Core.Serialization.SerializationWriter.WritePropertiesData(System.String,Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext) dad3986fa87b4a62b6d9b501d7bc0d862d92fd57064e401975dc13d54447eb0b -->

```csharp
public void Inno.Core.Serialization.SerializationWriter.WritePropertiesData(string name, Inno.Core.Serialization.ISerializable value, Inno.Core.Serialization.SerializationContext? context = null)
```

Writes independently restorable property bytes through the current converter generation.

**Parameter `name`:** The unique member receiving the binary property snapshot.

**Parameter `value`:** The object whose persistent properties are captured once.

**Parameter `context`:** The complete owner context, or null to use this writer's context.

**Throws `System.ArgumentNullException`:** The source object is null.

**Throws `System.InvalidOperationException`:** The writer has ended, a key is duplicated, or capture fails.

**Throws `System.ArgumentException`:** The member name is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L305).

## `context`

<a id="api-300839d749d9405c"></a>
<!-- api: P:Inno.Core.Serialization.SerializationWriter.context b8f1929507dc3f2139b9e9538fa66912413e66f7a7de20e77a33cf5a9c8b9ee3 -->

```csharp
public Inno.Core.Serialization.SerializationContext Inno.Core.Serialization.SerializationWriter.context { get; }
```

Gets the immutable context supplied to the current operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L40).

## `path`

<a id="api-cc80ec5f8d58fc03"></a>
<!-- api: P:Inno.Core.Serialization.SerializationWriter.path 32a51c93993f4afee3a9628898e7a194e5a887143bf4469463d34f7e7a5c1e29 -->

```csharp
public string Inno.Core.Serialization.SerializationWriter.path { get; }
```

Gets the current diagnostic path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L65).

## `typeSnapshot`

<a id="api-fd613717a762d4ca"></a>
<!-- api: P:Inno.Core.Serialization.SerializationWriter.typeSnapshot 8b26d9032ad76550871d85a3a7dddb640a332fcb743e4c974622c4f98b7a28c6 -->

```csharp
public Inno.Extensibility.Types.TypeCacheSnapshot Inno.Core.Serialization.SerializationWriter.typeSnapshot { get; }
```

Borrows the immutable type snapshot pinned by this operation's converter generation.

**Constraints:** Use this snapshot for consistent type identities during a complete capture. It must not be retained beyond
the writer's operation; keeping it would retain its collectible types after the converter lease is released.

**Throws `System.InvalidOperationException`:** The writer no longer belongs to an active capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L53).

## `valueType`

<a id="api-afe33d543cdcbbc9"></a>
<!-- api: P:Inno.Core.Serialization.SerializationWriter.valueType 92d8e93c948abd7cca91c2d37bdb83f8202d54459a6aa18720899e6afffb5cfb -->

```csharp
public System.Type Inno.Core.Serialization.SerializationWriter.valueType { get; }
```

Gets the declared value type represented by this writer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L70).
