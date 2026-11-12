---
title: "SerializationWriter"
description: "Reference for SerializationWriter in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.8377c447d4c3a633
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializationWriter`

This reference describes `SerializationWriter` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8d566337b9d93fae) | Method |
| [`Write`](#api-14aa22320618f69f) | Method |
| [```Write``1```](#api-1862eac504f51631) | Method |
| [`WriteObject`](#api-4084d466dda85c63) | Method |
| [```WriteObjectArray``1```](#api-88a5bfde442c31df) | Method |
| [`WriteProperties`](#api-e0ff44ffdff953cd) | Method |
| [`WritePropertiesData`](#api-8e10b547baaa2c86) | Method |
| [`context`](#api-79f5dd39a20ba6eb) | Property |
| [`path`](#api-c596cf90052b9616) | Property |
| [`valueType`](#api-3e38e3e2fa76c92e) | Property |

## Type declaration

<a id="api-8377c447d4c3a633"></a>
<!-- api: T:InnoEngine.Serialization.SerializationWriter 1629e58eaba1a06d01d4ba0855511f9aacb1ae1dbea07a59d7b493c3357b9228 -->

```csharp
public sealed class InnoEngine.Serialization.SerializationWriter
```

Writes a structured object during the active serialization operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L11).

## `#ctor`

<a id="api-8d566337b9d93fae"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.#ctor 4ed31fd7e93fa87803b2197279f93e75893c59b7472631a184dc6222f9c1345c -->

```csharp
public InnoEngine.Serialization.SerializationWriter.SerializationWriter()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L11).

## `Write`

<a id="api-14aa22320618f69f"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.Write(System.String,System.Object,System.Type) 0e28f5eefc4a09eea820a879e251b7facdc54ab7161b29322dc56676f4c56fad -->

```csharp
public void InnoEngine.Serialization.SerializationWriter.Write(string name, object? value, System.Type declaredType)
```

Writes a value using its declared metadata type without constructing a generic method at runtime.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to encode, including null when permitted by the declared type.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

**Throws `System.ArgumentNullException`:** The declared type is null.

**Throws `System.ArgumentException`:** The member name is empty.

**Throws `System.InvalidOperationException`:** The operation has ended, the name is duplicated, or the value is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L131).

## ```Write``1```

<a id="api-1862eac504f51631"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.Write``1(System.String,``0) 7b7f8b60d1d9514a7d1453b656803a045d2ca125108e2c1ea34ff19c4e349551 -->

```csharp
public void InnoEngine.Serialization.SerializationWriter.Write<TValue>(string name, TValue value)
```

Writes a named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to write.

**Throws `System.ArgumentException`:** Thrown when `name` is empty.

**Throws `System.InvalidOperationException`:** Thrown when the name is duplicated or the value is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L90).

## `WriteObject`

<a id="api-4084d466dda85c63"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.WriteObject(System.String,System.Action{InnoEngine.Serialization.SerializationWriter}) 3f77df22bbcc7ed622e8efb43c7ffe677e92880a99dbb5358d88b0946a518350 -->

```csharp
public void InnoEngine.Serialization.SerializationWriter.WriteObject(string name, System.Action<InnoEngine.Serialization.SerializationWriter> write)
```

Writes a named structured object.

**Parameter `name`:** The unique non-empty member name.

**Parameter `write`:** The callback that fills the child object.

**Throws `System.ArgumentNullException`:** Thrown when `write` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L156).

## ```WriteObjectArray``1```

<a id="api-88a5bfde442c31df"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.WriteObjectArray``1(System.String,System.Collections.Generic.IEnumerable{``0},System.Action{InnoEngine.Serialization.SerializationWriter,``0},System.Func{``0,InnoEngine.Serialization.SerializationCaptureKeyBuilder,System.Boolean}) b3706bf256e1383f08de43a0745715f359c12ead6636bfd6501b40ff44d9f70b -->

```csharp
public void InnoEngine.Serialization.SerializationWriter.WriteObjectArray<TValue>(string name, System.Collections.Generic.IEnumerable<TValue> values, System.Action<InnoEngine.Serialization.SerializationWriter, TValue> writeElement, System.Func<TValue, InnoEngine.Serialization.SerializationCaptureKeyBuilder, bool>? captureKey = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L204).

## `WriteProperties`

<a id="api-e0ff44ffdff953cd"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.WriteProperties(InnoEngine.Serialization.ISerializable) 2132ef07176297a67c226f39267c558ab8998be361813148abfdc73434bb2cc1 -->

```csharp
public void InnoEngine.Serialization.SerializationWriter.WriteProperties(InnoEngine.Serialization.ISerializable value)
```

Writes annotated properties from a serializable object into the current structured object.

**Parameter `value`:** The object whose annotated properties should be written.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L269).

## `WritePropertiesData`

<a id="api-8e10b547baaa2c86"></a>
<!-- api: M:InnoEngine.Serialization.SerializationWriter.WritePropertiesData(System.String,InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext) 996ccb7f3fa010efda4da5cbc423340eb3b86857fac9e4a08cd1514fd488d90d -->

```csharp
public void InnoEngine.Serialization.SerializationWriter.WritePropertiesData(string name, InnoEngine.Serialization.ISerializable value, InnoEngine.Serialization.SerializationContext? context = null)
```

Writes independently restorable property bytes through the current converter generation.

**Parameter `name`:** The unique member receiving the binary property snapshot.

**Parameter `value`:** The object whose persistent properties are captured once.

**Parameter `context`:** The complete owner context, or null to use this writer's context.

**Throws `System.ArgumentNullException`:** The source object is null.

**Throws `System.InvalidOperationException`:** The writer has ended, a key is duplicated, or capture fails.

**Throws `System.ArgumentException`:** The member name is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L305).

## `context`

<a id="api-79f5dd39a20ba6eb"></a>
<!-- api: P:InnoEngine.Serialization.SerializationWriter.context 4ba0b57ead0d6e83e11084c8e41218f7dede96dd692f148819bc4384f48d3c1e -->

```csharp
public InnoEngine.Serialization.SerializationContext InnoEngine.Serialization.SerializationWriter.context { get; }
```

Gets the immutable context supplied to the current operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L40).

## `path`

<a id="api-c596cf90052b9616"></a>
<!-- api: P:InnoEngine.Serialization.SerializationWriter.path 22eabd09000944f09196176066ebd705afc83041f8a733e9a78c5da3b5356a1c -->

```csharp
public string InnoEngine.Serialization.SerializationWriter.path { get; }
```

Gets the current diagnostic path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L65).

## `valueType`

<a id="api-3e38e3e2fa76c92e"></a>
<!-- api: P:InnoEngine.Serialization.SerializationWriter.valueType 4b34b5a15299e57419df89f3cfa348196a4bea874f839f1d1bd83c443b7a65ec -->

```csharp
public System.Type InnoEngine.Serialization.SerializationWriter.valueType { get; }
```

Gets the declared value type represented by this writer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationWriter.cs#L70).
