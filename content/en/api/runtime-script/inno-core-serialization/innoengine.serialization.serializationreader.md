---
title: "SerializationReader"
description: "Reference for SerializationReader in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.a6a22ab40dc2ffe2
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializationReader`

This reference describes `SerializationReader` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e99415c21b24fe4a) | Method |
| [`Contains`](#api-7fc129a083a608b2) | Method |
| [`OnCompleted`](#api-94e921cdde610990) | Method |
| [`Read`](#api-7e6ca6f673ca6123) | Method |
| [```Read``1```](#api-1a0a3e27dcc319d3) | Method |
| [`ReadObject`](#api-714b9267294f95e7) | Method |
| [`ReadObjectArray`](#api-3f5fbaec54566c4e) | Method |
| [`RestoreProperties`](#api-fe2b2ddf18a0876c) | Method |
| [```TryRead``1```](#api-7d5161a6eed20a77) | Method |
| [`context`](#api-9a3632c36e6c5bff) | Property |
| [`path`](#api-dfc30f430d0f41f1) | Property |
| [`valueType`](#api-410376963941f59a) | Property |

## Type declaration

<a id="api-a6a22ab40dc2ffe2"></a>
<!-- api: T:InnoEngine.Serialization.SerializationReader e27b88bad435bad351e81d4ec72c667a2171d1002dbbacc1eb7ac583d33882f7 -->

```csharp
public sealed class InnoEngine.Serialization.SerializationReader
```

Reads a structured object during the active deserialization operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L9).

## `#ctor`

<a id="api-e99415c21b24fe4a"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.#ctor 8dcf98b376c5c0867618a0b056d73e9da48c556d8efa62849bc4bbae892902de -->

```csharp
public InnoEngine.Serialization.SerializationReader.SerializationReader()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L9).

## `Contains`

<a id="api-7fc129a083a608b2"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.Contains(System.String) 38c322bcf76cad9c0345192694ada0fd52c256601153d987f3f124bb31cdcc67 -->

```csharp
public bool InnoEngine.Serialization.SerializationReader.Contains(string name)
```

Determines whether the current object contains a named member.

**Parameter `name`:** The member name.

**Returns:** `true` when the member exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L50).

## `OnCompleted`

<a id="api-94e921cdde610990"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.OnCompleted(System.Action) dd138941a1732effa4228a1246456ae8fffd1a45801eba8b40c15dc459fab257 -->

```csharp
public void InnoEngine.Serialization.SerializationReader.OnCompleted(System.Action callback)
```

Schedules a callback to run after the complete decode operation succeeds.

**Parameter `callback`:** The callback to schedule.

**Throws `System.ArgumentNullException`:** Thrown when `callback` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L211).

## `Read`

<a id="api-7e6ca6f673ca6123"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.Read(System.String,System.Type) 875659f937134b5826d9361d6b9ad438fa53ba878f443a3ea95ae6b85dce7478 -->

```csharp
public object? InnoEngine.Serialization.SerializationReader.Read(string name, System.Type declaredType)
```

Reads a value using its declared metadata type without constructing a generic method at runtime.

**Parameter `name`:** The required non-empty member name.

**Parameter `declaredType`:** The exact declaration whose converter and value semantics apply.

**Returns:** The restored value, including null when the declaration permits it; invalid or missing data throws.

**Throws `System.ArgumentNullException`:** The declared type is null.

**Throws `System.ArgumentException`:** The member name is empty.

**Throws `System.InvalidOperationException`:** The operation has ended or the member is missing, incompatible or unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L94).

## ```Read``1```

<a id="api-1a0a3e27dcc319d3"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.Read``1(System.String) de8a6a9faec9e446a9a27385efebb3e05aac7bef248c4202c5ea02fb05de8d23 -->

```csharp
public TValue InnoEngine.Serialization.SerializationReader.Read<TValue>(string name)
```

Reads a required named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The required member name.

**Returns:** The restored value.

**Throws `System.InvalidOperationException`:** Thrown when the member is missing or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L71).

## `ReadObject`

<a id="api-714b9267294f95e7"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.ReadObject(System.String) d484a167a486208a6261eb2daeb176b056c8cf86290add075bee61f216babca4 -->

```csharp
public InnoEngine.Serialization.SerializationReader InnoEngine.Serialization.SerializationReader.ReadObject(string name)
```

Reads a required named structured object.

**Parameter `name`:** The required member name.

**Returns:** A reader for the child object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L152).

## `ReadObjectArray`

<a id="api-3f5fbaec54566c4e"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.ReadObjectArray(System.String) 6216416dd1772fa44c3842208c6a20ab879ed14e57e1b9babdfe4aef8ef985dd -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Serialization.SerializationReader> InnoEngine.Serialization.SerializationReader.ReadObjectArray(string name)
```

Reads a required ordered array of structured objects.

**Parameter `name`:** The required member name.

**Returns:** Operation-scoped readers for the array elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L169).

## `RestoreProperties`

<a id="api-fe2b2ddf18a0876c"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.RestoreProperties(InnoEngine.Serialization.ISerializable) a99f1c432bb0472e9b051993b3d631be626acb3a795fab98634c7f69227c8c49 -->

```csharp
public void InnoEngine.Serialization.SerializationReader.RestoreProperties(InnoEngine.Serialization.ISerializable target)
```

Restores annotated properties from the current structured object into an existing object.

**Parameter `target`:** The target whose annotated properties should be restored.

**Throws `System.ArgumentNullException`:** Thrown when `target` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L195).

## ```TryRead``1```

<a id="api-7d5161a6eed20a77"></a>
<!-- api: M:InnoEngine.Serialization.SerializationReader.TryRead``1(System.String,``0@) 11f5bb84aeabb01f7ec2339175c47fac83ac06796dd2629e0afa40ba01ae5492 -->

```csharp
public bool InnoEngine.Serialization.SerializationReader.TryRead<TValue>(string name, out TValue value)
```

Attempts to read a named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The optional member name.

**Parameter `value`:** The restored value when the member exists.

**Returns:** `true` when the member exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L123).

## `context`

<a id="api-9a3632c36e6c5bff"></a>
<!-- api: P:InnoEngine.Serialization.SerializationReader.context be165bedbc399433def27c93fa3131796d95de50fa45730fe45d9285921b9f9f -->

```csharp
public InnoEngine.Serialization.SerializationContext InnoEngine.Serialization.SerializationReader.context { get; }
```

Gets the immutable context supplied to the current operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L29).

## `path`

<a id="api-dfc30f430d0f41f1"></a>
<!-- api: P:InnoEngine.Serialization.SerializationReader.path 738afabb5a1bc6bb3f670cf876c8c735b0e215286ddaa78b0a173c9ed88b9230 -->

```csharp
public string InnoEngine.Serialization.SerializationReader.path { get; }
```

Gets the current diagnostic path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L34).

## `valueType`

<a id="api-410376963941f59a"></a>
<!-- api: P:InnoEngine.Serialization.SerializationReader.valueType a74a1592977c6ead09961493394956750b7e70bf9273bdcf9a63ebcbbe30a4c3 -->

```csharp
public System.Type InnoEngine.Serialization.SerializationReader.valueType { get; }
```

Gets the declared value type represented by this reader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/IO/SerializationReader.cs#L39).
