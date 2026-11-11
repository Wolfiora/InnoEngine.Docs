---
title: "MiniAudioDeviceOptions"
description: "Reference for MiniAudioDeviceOptions in Inno.Adapter.Audio.MiniAudio."
uid: api.inno.adapter.audio.miniaudio.5be0106127f0ba10
kind: api
owners:
  - Inno.Adapter.Audio.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio-miniaudio#preparation-and-ownership-contract
---
# `MiniAudioDeviceOptions`

This reference describes `MiniAudioDeviceOptions` in `Inno.Adapter.Audio.MiniAudio`. Read the [shared contract](../../projects/inno-adapter-audio-miniaudio.md#preparation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-392a35d30df49c7f) | Method |
| [`Equals`](#api-61df1fe492e64757) | Method |
| [`Equals`](#api-4d77ab4b206268f0) | Method |
| [`GetHashCode`](#api-7ce17a1bc4f9132f) | Method |
| [`op_Equality`](#api-f7d5ca2c9cb61251) | Method |
| [`op_Inequality`](#api-7a01e74136dd09cd) | Method |
| [`ToString`](#api-a1d7b0b31eab4976) | Method |
| [`channels`](#api-ffda082718624524) | Property |
| [`limits`](#api-d9d8bdf4d421e47f) | Property |
| [`listenerCount`](#api-d0f79c8f33ac5c69) | Property |
| [`noDevice`](#api-6e937add8021fa52) | Property |
| [`sampleRate`](#api-ed8a7524f524527b) | Property |

## Type declaration

<a id="api-5be0106127f0ba10"></a>
<!-- api: T:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions 5e18b8595d06597b37a9a6d9abbcb22e9f2c51cc04e4b7790ac83357c66a0ac5 -->

```csharp
public sealed record Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions : System.IEquatable<Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions>
```

Configures creation of one MiniAudio backend generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `#ctor`

<a id="api-392a35d30df49c7f"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.#ctor 322c44801164fd20623165f29a00a940611047c12554a731afd8d7e194c367a1 -->

```csharp
public Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.MiniAudioDeviceOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `Equals`

<a id="api-61df1fe492e64757"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.Equals(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions) ab5d69031670f94c17dac7c8000e37cd03ddf55f42dc290f29f22d3a23b1b402 -->

```csharp
public bool Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.Equals(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `Equals`

<a id="api-4d77ab4b206268f0"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.Equals(System.Object) e116384341406f4cbe556677b69d208043c5168f67342c0809a625293a3fc5fd -->

```csharp
public override bool Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `GetHashCode`

<a id="api-7ce17a1bc4f9132f"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.GetHashCode 07e9b961238a4978a5692bb7cdc96ddd3325239e51500a5c594f9288d6a1b9fc -->

```csharp
public override int Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `op_Equality`

<a id="api-f7d5ca2c9cb61251"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.op_Equality(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions,Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions) d23b6652d40998eada39216a9b2af6ac4bd0bec61c3babe219b717e66a274602 -->

```csharp
public static bool Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.operator ==(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions? left, Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `op_Inequality`

<a id="api-7a01e74136dd09cd"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.op_Inequality(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions,Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions) 7a6c9786bd5d3df27053db2fbeeb32963ca59c0c2a60e365c3ab9db9d1ce0230 -->

```csharp
public static bool Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.operator !=(Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions? left, Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `ToString`

<a id="api-a1d7b0b31eab4976"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.ToString e8a3546d59d490653537a43f96a0ea22254cfe747c6dc244a673b6dbd8171750 -->

```csharp
public override string Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L9).

## `channels`

<a id="api-ffda082718624524"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.channels 7b088cbfe023d54274d3b2cdee91bda50ba0b1fcd718aded397c01dbdf6f37fd -->

```csharp
public int Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.channels { get; init; }
```

Gets or initializes the output channel count used by the engine graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L19).

## `limits`

<a id="api-d9d8bdf4d421e47f"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.limits 78960162164e0fff221cc31dc63e967234daf6b04e73703445093fd42b6d2085 -->

```csharp
public Inno.Audio.AudioDeviceLimits Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.limits { get; init; }
```

Gets finite device resource capacities, including pending completion admission.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L34).

## `listenerCount`

<a id="api-d0f79c8f33ac5c69"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.listenerCount 84c73b72bbd80296a39c2486002ed0c89c4568683a4926dee53c2909bdfb35fa -->

```csharp
public int Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.listenerCount { get; init; }
```

Gets or initializes the maximum listener count exposed by this backend generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L29).

## `noDevice`

<a id="api-6e937add8021fa52"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.noDevice d9f1ecc895c10867c6903cb64b2b4462dbdda0d86e500cb8902b4ddaa3b493db -->

```csharp
public bool Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.noDevice { get; init; }
```

Gets or initializes whether the engine advances without opening an operating-system output device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L14).

## `sampleRate`

<a id="api-ed8a7524f524527b"></a>
<!-- api: P:Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.sampleRate c02426ae551a6c0b45f051ba14a785603cd8e474f59828295be3aed7e22894fb -->

```csharp
public int Inno.Adapter.Audio.MiniAudio.MiniAudioDeviceOptions.sampleRate { get; init; }
```

Gets or initializes the output sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioDeviceOptions.cs#L24).
