---
title: "AudioDevice.DeviceHandleIdentity"
description: "Reference for AudioDevice.DeviceHandleIdentity in Inno.Audio."
uid: api.inno.audio.f90ed3527b4ebc22
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDevice.DeviceHandleIdentity`

This reference describes `AudioDevice.DeviceHandleIdentity` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioDevice.DeviceHandleIdentity>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9d405fa8f35cf00c) | Method |
| [`Deconstruct`](#api-a563ebfbf0e8ce63) | Method |
| [`Equals`](#api-97dcf809a2ce23c8) | Method |
| [`Equals`](#api-474f34b4f6667c65) | Method |
| [`GetHashCode`](#api-eb8d08c5a4e36cf4) | Method |
| [`op_Equality`](#api-632db581442a38de) | Method |
| [`op_Inequality`](#api-f620bfc657184378) | Method |
| [`ToString`](#api-624f0b1dfd07aaa5) | Method |
| [`generation`](#api-912ffafb7dfd3c10) | Property |
| [`value`](#api-85ff85d110eabcb3) | Property |

## Type declaration

<a id="api-f90ed3527b4ebc22"></a>
<!-- api: T:Inno.Audio.AudioDevice.DeviceHandleIdentity 8a8c2d2d7acb0618a8206dc577acc17ffd156f555a54311d84f69bdfbec41797 -->

```csharp
protected readonly record struct Inno.Audio.AudioDevice.DeviceHandleIdentity : System.IEquatable<Inno.Audio.AudioDevice.DeviceHandleIdentity>
```

Stores one decoded device-owned identity.

**Parameter `value`:** Non-zero backend resource identity.

**Parameter `generation`:** Device generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `#ctor`

<a id="api-9d405fa8f35cf00c"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.#ctor(System.UInt64,System.UInt32) d3e0507916bd6c4078cec18efe705092979c29b471c2d511f780b76706601e5c -->

```csharp
public Inno.Audio.AudioDevice.DeviceHandleIdentity.DeviceHandleIdentity(ulong value, uint generation)
```

Stores one decoded device-owned identity.

**Parameter `value`:** Non-zero backend resource identity.

**Parameter `generation`:** Device generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `Deconstruct`

<a id="api-a563ebfbf0e8ce63"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.Deconstruct(System.UInt64@,System.UInt32@) 1778fdabf87687b70cac6f0eb106c4b4e94b9044d12a61dd98e71ab5922c5b3e -->

```csharp
public void Inno.Audio.AudioDevice.DeviceHandleIdentity.Deconstruct(out ulong value, out uint generation)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `Equals`

<a id="api-97dcf809a2ce23c8"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.Equals(Inno.Audio.AudioDevice.DeviceHandleIdentity) b42380311ee954ecac7657da1f3c7b362bd3303587eeffc3c6820a8abeb715ce -->

```csharp
public bool Inno.Audio.AudioDevice.DeviceHandleIdentity.Equals(Inno.Audio.AudioDevice.DeviceHandleIdentity other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `Equals`

<a id="api-474f34b4f6667c65"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.Equals(System.Object) c3485a08afa12d9538ea18ed76a920bdd38f2d65010628424b7989f7a3234533 -->

```csharp
public override bool Inno.Audio.AudioDevice.DeviceHandleIdentity.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `GetHashCode`

<a id="api-eb8d08c5a4e36cf4"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.GetHashCode 777a3ce9aabcc83eab9827be5d29741fd28d326145ef9824d63c3f4ce63b2d28 -->

```csharp
public override int Inno.Audio.AudioDevice.DeviceHandleIdentity.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `op_Equality`

<a id="api-632db581442a38de"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.op_Equality(Inno.Audio.AudioDevice.DeviceHandleIdentity,Inno.Audio.AudioDevice.DeviceHandleIdentity) ab17b44144380f6ac38c524f6210a71d9ab29af2e8c36badbe9b69ae51335adc -->

```csharp
public static bool Inno.Audio.AudioDevice.DeviceHandleIdentity.operator ==(Inno.Audio.AudioDevice.DeviceHandleIdentity left, Inno.Audio.AudioDevice.DeviceHandleIdentity right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `op_Inequality`

<a id="api-f620bfc657184378"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.op_Inequality(Inno.Audio.AudioDevice.DeviceHandleIdentity,Inno.Audio.AudioDevice.DeviceHandleIdentity) 9744923f6746ea6fc0e33d203debb82d345c8f6c3e8bd3708c391e1a0c2ce1d9 -->

```csharp
public static bool Inno.Audio.AudioDevice.DeviceHandleIdentity.operator !=(Inno.Audio.AudioDevice.DeviceHandleIdentity left, Inno.Audio.AudioDevice.DeviceHandleIdentity right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `ToString`

<a id="api-624f0b1dfd07aaa5"></a>
<!-- api: M:Inno.Audio.AudioDevice.DeviceHandleIdentity.ToString 9752743db83272dbe0277f287768ce9e07b21323f013c4aab0285ad3c772b6b6 -->

```csharp
public override string Inno.Audio.AudioDevice.DeviceHandleIdentity.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L17).

## `generation`

<a id="api-912ffafb7dfd3c10"></a>
<!-- api: P:Inno.Audio.AudioDevice.DeviceHandleIdentity.generation 5c1ff52895e99886c2321f523bf23a80fd92388b3888260da779c54bc40f3887 -->

```csharp
public uint Inno.Audio.AudioDevice.DeviceHandleIdentity.generation { get; init; }
```

Device generation that owns the resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L19).

## `value`

<a id="api-85ff85d110eabcb3"></a>
<!-- api: P:Inno.Audio.AudioDevice.DeviceHandleIdentity.value 009d1416e9ff663dc961a3f4e0d676db3c9eb4608839a9d0b387e0e3ab3591dd -->

```csharp
public ulong Inno.Audio.AudioDevice.DeviceHandleIdentity.value { get; init; }
```

Non-zero backend resource identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L18).
