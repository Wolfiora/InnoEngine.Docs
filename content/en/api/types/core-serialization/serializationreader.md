---
title: "SerializationReader"
description: "Reference for SerializationReader in Inno.Core.Serialization."
uid: api.inno.core.serialization.71ec1b20deb103ef
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationReader`

This reference describes `SerializationReader` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Contains`](#api-44f5673d73b4a7c0) | Method |
| [`OnCompleted`](#api-cae79f2fe1378289) | Method |
| [`Read`](#api-a4ed28034f0a50b4) | Method |
| [```Read``1```](#api-ae40a53d619aacc0) | Method |
| [`ReadObject`](#api-953de61426352dbb) | Method |
| [`ReadObjectArray`](#api-8db22c5bd8977821) | Method |
| [`RestoreProperties`](#api-049a7b82eaa7e923) | Method |
| [```TryRead``1```](#api-c2c450749c4a4d17) | Method |
| [`context`](#api-5f46152c48d0d1c0) | Property |
| [`path`](#api-8d9cc0f084a61c27) | Property |
| [`valueType`](#api-0896435346b6f9ff) | Property |

## Type declaration

<a id="api-71ec1b20deb103ef"></a>
<!-- api: T:Inno.Core.Serialization.SerializationReader 361bc5302de36298fb93292040e719890473a0301cf6ee7db3684d9ef8e91317 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationReader
```

Reads a structured object during the active deserialization operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L9).

## `Contains`

<a id="api-44f5673d73b4a7c0"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.Contains(System.String) 67143f1b1f67f6d7893434f90ad7ecd4edf301df3595ed2d859c5ab7e776f0d4 -->

```csharp
public bool Inno.Core.Serialization.SerializationReader.Contains(string name)
```

Determines whether the current object contains a named member.

**Parameter `name`:** The member name.

**Returns:** `true` when the member exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L50).

## `OnCompleted`

<a id="api-cae79f2fe1378289"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.OnCompleted(System.Action) ffc89cfbd89afe704f261fc6d117638109c238ea21ec410372f4f7a1543da15c -->

```csharp
public void Inno.Core.Serialization.SerializationReader.OnCompleted(System.Action callback)
```

Schedules a callback to run after the complete decode operation succeeds.

**Parameter `callback`:** The callback to schedule.

**Throws `System.ArgumentNullException`:** Thrown when `callback` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L211).

## `Read`

<a id="api-a4ed28034f0a50b4"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.Read(System.String,System.Type) a1578d6b0bab32f4655490af5c328db46c2dd572942d2dfe11e13832a3b5d4ed -->

```csharp
public object? Inno.Core.Serialization.SerializationReader.Read(string name, System.Type declaredType)
```

Reads a value using its declared metadata type without constructing a generic method at runtime.

**Parameter `name`:** The required non-empty member name.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

**Returns:** The restored value, including null when the declaration permits it; invalid or missing data throws.

**Throws `System.ArgumentNullException`:** The declared type is null.

**Throws `System.ArgumentException`:** The member name is empty.

**Throws `System.InvalidOperationException`:** The operation has ended or the member is missing, incompatible or unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L94).

## ```Read``1```

<a id="api-ae40a53d619aacc0"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.Read``1(System.String) 575a584fa4221bad178513877cbac17a0c60ce00c56135e84a739b51e10a4630 -->

```csharp
public TValue Inno.Core.Serialization.SerializationReader.Read<TValue>(string name)
```

Reads a required named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The required member name.

**Returns:** The restored value.

**Throws `System.InvalidOperationException`:** Thrown when the member is missing or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L71).

## `ReadObject`

<a id="api-953de61426352dbb"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.ReadObject(System.String) 3241b791999c5503dd52d63d8af205ae140af706dc135489d4e32621d11ad99d -->

```csharp
public Inno.Core.Serialization.SerializationReader Inno.Core.Serialization.SerializationReader.ReadObject(string name)
```

Reads a required named structured object.

**Parameter `name`:** The required member name.

**Returns:** A reader for the child object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L152).

## `ReadObjectArray`

<a id="api-8db22c5bd8977821"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.ReadObjectArray(System.String) 1a927d2c6ea4579e42620077498855ce43bdeb3038083fbf8e307b0d77e7f775 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationReader> Inno.Core.Serialization.SerializationReader.ReadObjectArray(string name)
```

Reads a required ordered array of structured objects.

**Parameter `name`:** The required member name.

**Returns:** Operation-scoped readers for the array elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L169).

## `RestoreProperties`

<a id="api-049a7b82eaa7e923"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.RestoreProperties(Inno.Core.Serialization.ISerializable) f56a599810a50bba26c9d6f8d0e237ffd0fc7b913cbc3df964b0eb4e684733c2 -->

```csharp
public void Inno.Core.Serialization.SerializationReader.RestoreProperties(Inno.Core.Serialization.ISerializable target)
```

Restores annotated properties from the current structured object into an existing object.

**Parameter `target`:** The target whose annotated properties should be restored.

**Throws `System.ArgumentNullException`:** Thrown when `target` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L195).

## ```TryRead``1```

<a id="api-c2c450749c4a4d17"></a>
<!-- api: M:Inno.Core.Serialization.SerializationReader.TryRead``1(System.String,``0@) 9770746d31a0576714f8ec4bb208a7b9a2c05fccb6a85e8e3d0975c734cac62f -->

```csharp
public bool Inno.Core.Serialization.SerializationReader.TryRead<TValue>(string name, out TValue value)
```

Attempts to read a named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The optional member name.

**Parameter `value`:** The restored value when the member exists.

**Returns:** `true` when the member exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L123).

## `context`

<a id="api-5f46152c48d0d1c0"></a>
<!-- api: P:Inno.Core.Serialization.SerializationReader.context 1812af27543bc7f8b74a8616ca16ccc960dec60038b1a678f3f4d6227ba3e521 -->

```csharp
public Inno.Core.Serialization.SerializationContext Inno.Core.Serialization.SerializationReader.context { get; }
```

Gets the immutable context supplied to the current operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L29).

## `path`

<a id="api-8d9cc0f084a61c27"></a>
<!-- api: P:Inno.Core.Serialization.SerializationReader.path 0511ba6d9d35e69be1f49b61fcd2c554872fe40c416de4e04948ff93d757901b -->

```csharp
public string Inno.Core.Serialization.SerializationReader.path { get; }
```

Gets the current diagnostic path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L34).

## `valueType`

<a id="api-0896435346b6f9ff"></a>
<!-- api: P:Inno.Core.Serialization.SerializationReader.valueType 59d91737c47c8128dabdcce67714229d7c14ff615abef053b0ea486ece21d5b7 -->

```csharp
public System.Type Inno.Core.Serialization.SerializationReader.valueType { get; }
```

Gets the declared value type represented by this reader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L39).
