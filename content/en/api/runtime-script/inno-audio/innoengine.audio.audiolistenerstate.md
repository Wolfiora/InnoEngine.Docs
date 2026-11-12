---
title: "AudioListenerState"
description: "Reference for AudioListenerState in Inno.Audio."
uid: api.inno.audio.runtime-script.9f6c80f623f27016
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioListenerState`

This reference describes `AudioListenerState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioListenerState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6c278da688716c58) | Method |
| [`Equals`](#api-d1e805797cb211ff) | Method |
| [`Equals`](#api-0efa8dded17379ec) | Method |
| [`GetHashCode`](#api-6404cd42916232a8) | Method |
| [`op_Equality`](#api-43c216768393a3f5) | Method |
| [`op_Inequality`](#api-e2d6f1b6f63da72b) | Method |
| [`ToString`](#api-fed2027a728679bb) | Method |
| [`direction`](#api-e2ce39bee16fd5d9) | Property |
| [`position`](#api-427043549a7355f4) | Property |
| [`up`](#api-92b4e923d251e534) | Property |
| [`velocity`](#api-c1229b48ebc1250b) | Property |

## Type declaration

<a id="api-9f6c80f623f27016"></a>
<!-- api: T:InnoEngine.Audio.AudioListenerState b4ebf75e9cf973251005e1df321845077f23f58385a1ec7c9215bb40910851ac -->

```csharp
public readonly struct InnoEngine.Audio.AudioListenerState : System.IEquatable<InnoEngine.Audio.AudioListenerState>
```

Contains one listener transform used by backend spatialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `#ctor`

<a id="api-6c278da688716c58"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.#ctor(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) ffcd425dd7b9bc111608d8c2271e297edd1b7ac2cd24d2f941097169debeed95 -->

```csharp
public InnoEngine.Audio.AudioListenerState.AudioListenerState(InnoEngine.Mathematics.Vector3 position, InnoEngine.Mathematics.Vector3 direction, InnoEngine.Mathematics.Vector3 up, InnoEngine.Mathematics.Vector3 velocity)
```

Creates a listener transform snapshot.

**Parameter `position`:** World-space listener position.

**Parameter `direction`:** World-space listener forward direction.

**Parameter `up`:** World-space listener up direction.

**Parameter `velocity`:** World-space listener velocity.

**Throws `System.ArgumentOutOfRangeException`:** Any position, direction, up, or velocity component is non-finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L623).

## `Equals`

<a id="api-d1e805797cb211ff"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.Equals(InnoEngine.Audio.AudioListenerState) 952dab72ddaabec3d9f974752c4278bf55d0cfcbf3913585f25e760c97483d91 -->

```csharp
public bool InnoEngine.Audio.AudioListenerState.Equals(InnoEngine.Audio.AudioListenerState other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `Equals`

<a id="api-0efa8dded17379ec"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.Equals(System.Object) a4e359a5fe475fc259661b051d936a4d31a106093a5fb072dd22040926a4e0ff -->

```csharp
public override bool InnoEngine.Audio.AudioListenerState.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `GetHashCode`

<a id="api-6404cd42916232a8"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.GetHashCode 2539d0408e11b948d831a937f08eea08ee2b7e3efcebd5d67ca7be41297beb0b -->

```csharp
public override int InnoEngine.Audio.AudioListenerState.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `op_Equality`

<a id="api-43c216768393a3f5"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.op_Equality(InnoEngine.Audio.AudioListenerState,InnoEngine.Audio.AudioListenerState) c8bd1d444c477c7d081acb3060b6d540abeb1da1f0ab0cf4a4e4436cbefafe22 -->

```csharp
public static bool InnoEngine.Audio.AudioListenerState.operator ==(InnoEngine.Audio.AudioListenerState left, InnoEngine.Audio.AudioListenerState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `op_Inequality`

<a id="api-e2d6f1b6f63da72b"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.op_Inequality(InnoEngine.Audio.AudioListenerState,InnoEngine.Audio.AudioListenerState) 532429daa554618b5c8426f3df10fa9a628a860b00d062a78baa30082d2bbf0b -->

```csharp
public static bool InnoEngine.Audio.AudioListenerState.operator !=(InnoEngine.Audio.AudioListenerState left, InnoEngine.Audio.AudioListenerState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `ToString`

<a id="api-fed2027a728679bb"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerState.ToString a0efd9f3965b1d585ac2bbd817091ab5953174c53efece993eeef02cc56b209d -->

```csharp
public override string InnoEngine.Audio.AudioListenerState.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L603).

## `direction`

<a id="api-e2ce39bee16fd5d9"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerState.direction b31946d2e429b57d339f079fd0202cefa45cdea0e523010af23abe3c2da4b3e8 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioListenerState.direction { get; }
```

Gets the world-space listener forward direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L647).

## `position`

<a id="api-427043549a7355f4"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerState.position 921372d36f98ff25e1415023925f3c64a97bcd78d5cdaac00f6b44fe63eb4d35 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioListenerState.position { get; }
```

Gets the world-space listener position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L642).

## `up`

<a id="api-92b4e923d251e534"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerState.up 3d2e5b8f9f1701a5b99a3194e32d559a8252407d39dc90c754ecd38971f5eb28 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioListenerState.up { get; }
```

Gets the world-space listener up direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L652).

## `velocity`

<a id="api-c1229b48ebc1250b"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerState.velocity b9db550c73b57b17271107910ac5a08aa51c0112a10ce6072df67121f41447af -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioListenerState.velocity { get; }
```

Gets the world-space listener velocity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L657).
