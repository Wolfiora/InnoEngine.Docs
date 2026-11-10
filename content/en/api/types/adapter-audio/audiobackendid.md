---
title: "AudioBackendId"
description: "Reference for AudioBackendId in Inno.Adapter.Audio."
uid: api.inno.adapter.audio.6537abbdfdfd4d0c
kind: api
owners:
  - Inno.Adapter.Audio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio#provider-ownership-contract
---
# `AudioBackendId`

This reference describes `AudioBackendId` in `Inno.Adapter.Audio`. Read the [shared contract](../../projects/inno-adapter-audio.md#provider-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Audio.AudioBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3da8d215e7abab34) | Method |
| [`Equals`](#api-7b8c2d9e8a336cb3) | Method |
| [`Equals`](#api-5fbe77a8a4c2190e) | Method |
| [`GetHashCode`](#api-0d7a324289c9f854) | Method |
| [`op_Equality`](#api-1b10b83326f4a578) | Method |
| [`op_Inequality`](#api-e348feadac154bb8) | Method |
| [`ToString`](#api-e17b508006d7ad74) | Method |
| [`isValid`](#api-aff1371cd126ad77) | Property |
| [`miniAudio`](#api-e05b0259e28438c9) | Property |
| [`value`](#api-7dd8bfcf11e78707) | Property |

## Type declaration

<a id="api-6537abbdfdfd4d0c"></a>
<!-- api: T:Inno.Adapter.Audio.AudioBackendId 4e12fd4df8d44c391ba9d763e91ffdffbceeedddf00f1b4d082ac7365f68d46e -->

```csharp
public readonly record struct Inno.Adapter.Audio.AudioBackendId : System.IEquatable<Inno.Adapter.Audio.AudioBackendId>
```

Identifies a audio implementation without closing the set of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L8).

## `#ctor`

<a id="api-3da8d215e7abab34"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.#ctor(System.String) 1b7d04803907ff14de316da0a08340684a324e58fef813344d340e1f6b57ef55 -->

```csharp
public Inno.Adapter.Audio.AudioBackendId.AudioBackendId(string value)
```

Creates an ordinal, case-sensitive implementation identifier.

**Parameter `value`:** A stable nonempty identifier containing no whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L19).

## `Equals`

<a id="api-7b8c2d9e8a336cb3"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.Equals(Inno.Adapter.Audio.AudioBackendId) 650161d0b30af8c5a2ba1a4e9c77cf707e55ee93417923c99d89ff6c3bf908a6 -->

```csharp
public bool Inno.Adapter.Audio.AudioBackendId.Equals(Inno.Adapter.Audio.AudioBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L8).

## `Equals`

<a id="api-5fbe77a8a4c2190e"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.Equals(System.Object) 56ef4ad3e13b2e080c08dd216b665d813e27c9c7d8de1ed3923352ffe7cda37e -->

```csharp
public override bool Inno.Adapter.Audio.AudioBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L8).

## `GetHashCode`

<a id="api-0d7a324289c9f854"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.GetHashCode e5a68896ce033d5fcba079c23fce739072994274ecf466c4d78f539d04b3be0e -->

```csharp
public override int Inno.Adapter.Audio.AudioBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L8).

## `op_Equality`

<a id="api-1b10b83326f4a578"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.op_Equality(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendId) 5630f0ba187eec3011fac7fa3a919111fdf7a4ac111b348479ae52cf22d069e2 -->

```csharp
public static bool Inno.Adapter.Audio.AudioBackendId.operator ==(Inno.Adapter.Audio.AudioBackendId left, Inno.Adapter.Audio.AudioBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L8).

## `op_Inequality`

<a id="api-e348feadac154bb8"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.op_Inequality(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendId) 2c0592e30053f61fb7ae5d90f062e705f2181fb44a0d9e4c2133707f1cee7dc2 -->

```csharp
public static bool Inno.Adapter.Audio.AudioBackendId.operator !=(Inno.Adapter.Audio.AudioBackendId left, Inno.Adapter.Audio.AudioBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L8).

## `ToString`

<a id="api-e17b508006d7ad74"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendId.ToString 8ecf668309c2c317a40b8aa10f17eacf893da2a0a0de08e266be96c84a7d5ab0 -->

```csharp
public override string Inno.Adapter.Audio.AudioBackendId.ToString()
```

Returns the identifier without resolving a provider.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L49).

## `isValid`

<a id="api-aff1371cd126ad77"></a>
<!-- api: P:Inno.Adapter.Audio.AudioBackendId.isValid 938d641964d5f3c9bf0d2b06240b4cef49ddbe7c9cd8806f5d059e758563cf0f -->

```csharp
public bool Inno.Adapter.Audio.AudioBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L41).

## `miniAudio`

<a id="api-e05b0259e28438c9"></a>
<!-- api: P:Inno.Adapter.Audio.AudioBackendId.miniAudio c86c86a14a19b7766d94e8ecca31777ca6ad61f64f92e58e91619cb2eea7c106 -->

```csharp
public static Inno.Adapter.Audio.AudioBackendId Inno.Adapter.Audio.AudioBackendId.miniAudio { get; }
```

Gets the identifier of the bundled miniAudio implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L31).

## `value`

<a id="api-7dd8bfcf11e78707"></a>
<!-- api: P:Inno.Adapter.Audio.AudioBackendId.value e812f1aa6988efa7298a1cb6bdb53765f5ce889a10bee3746fdce52f24a1e910 -->

```csharp
public string Inno.Adapter.Audio.AudioBackendId.value { get; }
```

Gets the stable identifier; a default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendId.cs#L36).
