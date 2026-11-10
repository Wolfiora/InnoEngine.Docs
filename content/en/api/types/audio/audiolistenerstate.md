---
title: "AudioListenerState"
description: "Reference for AudioListenerState in Inno.Audio."
uid: api.inno.audio.37b25b2581b875d3
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioListenerState`

This reference describes `AudioListenerState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioListenerState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-726590198d91bb79) | Method |
| [`Equals`](#api-c530d32a22a4af61) | Method |
| [`Equals`](#api-aab83a893e1b8f9c) | Method |
| [`GetHashCode`](#api-d4c8e47dde41066b) | Method |
| [`op_Equality`](#api-7a1ee8c101f6acbf) | Method |
| [`op_Inequality`](#api-2f92c22b3ef1fa69) | Method |
| [`ToString`](#api-6140dfb863a2d8f4) | Method |
| [`direction`](#api-ccc19d0774a16d56) | Property |
| [`position`](#api-ef04eab63a401cec) | Property |
| [`up`](#api-726a9bc97a8354ba) | Property |
| [`velocity`](#api-3a856ee30cb526f8) | Property |

## Type declaration

<a id="api-37b25b2581b875d3"></a>
<!-- api: T:Inno.Audio.AudioListenerState 1c42b3ef134343abb1ecf5ad49547366f3a0c8bc736a3a8168a852d5422cac39 -->

```csharp
public readonly record struct Inno.Audio.AudioListenerState : System.IEquatable<Inno.Audio.AudioListenerState>
```

Contains one listener transform used by backend spatialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `#ctor`

<a id="api-726590198d91bb79"></a>
<!-- api: M:Inno.Audio.AudioListenerState.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 45ac363e69b2a98bb44aa9117b64ab8e0ecf887eb3a52ef6bfd8269a7dcc8550 -->

```csharp
public Inno.Audio.AudioListenerState.AudioListenerState(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Vector3 direction, Inno.Core.Mathematics.Vector3 up, Inno.Core.Mathematics.Vector3 velocity)
```

Creates a listener transform snapshot.

**Parameter `position`:** World-space listener position.

**Parameter `direction`:** World-space listener forward direction.

**Parameter `up`:** World-space listener up direction.

**Parameter `velocity`:** World-space listener velocity.

**Throws `System.ArgumentOutOfRangeException`:** Any position, direction, up, or velocity component is non-finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L623).

## `Equals`

<a id="api-c530d32a22a4af61"></a>
<!-- api: M:Inno.Audio.AudioListenerState.Equals(Inno.Audio.AudioListenerState) 561b4e2fe3224c2c0dfb7bb354bbea497f420b452853c23bc25c0efc8128fa8b -->

```csharp
public bool Inno.Audio.AudioListenerState.Equals(Inno.Audio.AudioListenerState other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `Equals`

<a id="api-aab83a893e1b8f9c"></a>
<!-- api: M:Inno.Audio.AudioListenerState.Equals(System.Object) 20c2704b9eec3c445223300e49c04d60d5da86efd43b2f1b29a46f93fad15d8a -->

```csharp
public override bool Inno.Audio.AudioListenerState.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `GetHashCode`

<a id="api-d4c8e47dde41066b"></a>
<!-- api: M:Inno.Audio.AudioListenerState.GetHashCode c1c2ba65b080b6b1aba02f1c9b996be50c63e21f9b7adc8ba37e8446c99b5356 -->

```csharp
public override int Inno.Audio.AudioListenerState.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `op_Equality`

<a id="api-7a1ee8c101f6acbf"></a>
<!-- api: M:Inno.Audio.AudioListenerState.op_Equality(Inno.Audio.AudioListenerState,Inno.Audio.AudioListenerState) 376ca9452ffc05a72eefa922c17c5beb681c45b9cf7bfbdeb75ba280ab6be12f -->

```csharp
public static bool Inno.Audio.AudioListenerState.operator ==(Inno.Audio.AudioListenerState left, Inno.Audio.AudioListenerState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `op_Inequality`

<a id="api-2f92c22b3ef1fa69"></a>
<!-- api: M:Inno.Audio.AudioListenerState.op_Inequality(Inno.Audio.AudioListenerState,Inno.Audio.AudioListenerState) 03e847e9576a7e27871e3697f845c57834a215c963bdee0fb1b93865bd17fd4a -->

```csharp
public static bool Inno.Audio.AudioListenerState.operator !=(Inno.Audio.AudioListenerState left, Inno.Audio.AudioListenerState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `ToString`

<a id="api-6140dfb863a2d8f4"></a>
<!-- api: M:Inno.Audio.AudioListenerState.ToString a311957a8e892703483d7305343239635e05bf4b785df86a45410673465377f4 -->

```csharp
public override string Inno.Audio.AudioListenerState.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `direction`

<a id="api-ccc19d0774a16d56"></a>
<!-- api: P:Inno.Audio.AudioListenerState.direction 23c2f31b5f1a53666c87eafc24d80f7003f579c7eba1b5e03ba6ab14ec2371c8 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioListenerState.direction { get; }
```

Gets the world-space listener forward direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L647).

## `position`

<a id="api-ef04eab63a401cec"></a>
<!-- api: P:Inno.Audio.AudioListenerState.position c095a49ce410342a6d43259ce97e14a30260dd84b46d5a21e6ba1fb19861c267 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioListenerState.position { get; }
```

Gets the world-space listener position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L642).

## `up`

<a id="api-726a9bc97a8354ba"></a>
<!-- api: P:Inno.Audio.AudioListenerState.up 4625de391e1766ee8dd698d2eb2583deef8280c16e28aa09f4c81756c14300b7 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioListenerState.up { get; }
```

Gets the world-space listener up direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L652).

## `velocity`

<a id="api-3a856ee30cb526f8"></a>
<!-- api: P:Inno.Audio.AudioListenerState.velocity e8ea8fdebbc696748a8b3324949210bd488f633fbaabca1b9432308ed6e1ab95 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioListenerState.velocity { get; }
```

Gets the world-space listener velocity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L657).
