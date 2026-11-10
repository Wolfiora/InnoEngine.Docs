---
title: "AudioDevice"
description: "Reference for AudioDevice in Inno.Audio."
uid: api.inno.audio.679c55a8ac6b4d6a
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDevice`

This reference describes `AudioDevice` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Nested types

- [`AudioDevice.DeviceHandleIdentity`](audiodevice.devicehandleidentity.md)

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-46b7974822198edf) | Method |
| [`CreateBusHandle`](#api-49ceb10e7cd6c61c) | Method |
| [`CreateClipHandle`](#api-689cb5e8bda99693) | Method |
| [`CreateListenerHandle`](#api-f1e389e1c772adf7) | Method |
| [`CreateVoiceHandle`](#api-d63be15f8662c87d) | Method |
| [`GetHandleIdentity`](#api-6b328fd9a696252e) | Method |
| [`GetHandleIdentity`](#api-20777736c1c6df0e) | Method |
| [`GetHandleIdentity`](#api-0347afdb5dce0fd0) | Method |
| [`GetHandleIdentity`](#api-90025701ae7e220b) | Method |

## Type declaration

<a id="api-679c55a8ac6b4d6a"></a>
<!-- api: T:Inno.Audio.AudioDevice fe64959175beb0046223fb38cb0588118a44e1ec0462cd8a64899216904f951f -->

```csharp
public abstract class Inno.Audio.AudioDevice
```

Provides protected opaque-handle encoding and validation helpers for audio backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L6).

## `#ctor`

<a id="api-46b7974822198edf"></a>
<!-- api: M:Inno.Audio.AudioDevice.#ctor 931256302d2801e405a505ee633bbc6375eabc196e6a1e730f1a83dccecfcad8 -->

```csharp
protected Inno.Audio.AudioDevice.AudioDevice()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L6).

## `CreateBusHandle`

<a id="api-49ceb10e7cd6c61c"></a>
<!-- api: M:Inno.Audio.AudioDevice.CreateBusHandle(System.UInt64,System.UInt32) fcb595c138d3001d415564a1977af62afe75637c4c12db5f22d9f2c66cb9610e -->

```csharp
protected static Inno.Audio.AudioBusHandle Inno.Audio.AudioDevice.CreateBusHandle(ulong value, uint generation)
```

Encodes a bus identity into a backend-neutral handle.

**Parameter `value`:** Non-zero backend bus identity.

**Parameter `generation`:** Owning device generation.

**Returns:** An opaque bus handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L68).

## `CreateClipHandle`

<a id="api-689cb5e8bda99693"></a>
<!-- api: M:Inno.Audio.AudioDevice.CreateClipHandle(System.UInt64,System.UInt32) 0f975e15ef5083e37b12163603c80e20320b89090040eb1b842e4d86d0499785 -->

```csharp
protected static Inno.Audio.AudioClipHandle Inno.Audio.AudioDevice.CreateClipHandle(ulong value, uint generation)
```

Encodes a clip identity into a backend-neutral handle.

**Parameter `value`:** Non-zero backend clip identity.

**Parameter `generation`:** Owning device generation.

**Returns:** An opaque clip handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L34).

## `CreateListenerHandle`

<a id="api-f1e389e1c772adf7"></a>
<!-- api: M:Inno.Audio.AudioDevice.CreateListenerHandle(System.UInt64,System.UInt32) 9061aff4b7564b12fb181177577258f74e20472a1cab775a1c821b5a125ff574 -->

```csharp
protected static Inno.Audio.AudioListenerHandle Inno.Audio.AudioDevice.CreateListenerHandle(ulong value, uint generation)
```

Encodes a listener identity into a backend-neutral handle.

**Parameter `value`:** Non-zero backend listener identity.

**Parameter `generation`:** Owning device generation.

**Returns:** An opaque listener handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L85).

## `CreateVoiceHandle`

<a id="api-d63be15f8662c87d"></a>
<!-- api: M:Inno.Audio.AudioDevice.CreateVoiceHandle(System.UInt64,System.UInt32) 5abc85936018753e87ab6982df73981336c51979833d7a97ca86d02e8c673d45 -->

```csharp
protected static Inno.Audio.AudioDeviceVoiceHandle Inno.Audio.AudioDevice.CreateVoiceHandle(ulong value, uint generation)
```

Encodes a voice identity into a backend-neutral handle.

**Parameter `value`:** Non-zero backend voice identity.

**Parameter `generation`:** Owning device generation.

**Returns:** An opaque voice handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L51).

## `GetHandleIdentity`

<a id="api-6b328fd9a696252e"></a>
<!-- api: M:Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioBusHandle) d5c7717da561498e0d3a6ba5885e7b80d17ef5b75d46132e6825d309c1456419 -->

```csharp
protected static Inno.Audio.AudioDevice.DeviceHandleIdentity Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioBusHandle handle)
```

Decodes a bus handle for backend lookup and generation validation.

**Parameter `handle`:** Backend-neutral bus handle.

**Returns:** Backend identity and owning generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L121).

## `GetHandleIdentity`

<a id="api-20777736c1c6df0e"></a>
<!-- api: M:Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioClipHandle) fa0279961d6027b624efab385fef2de92e82718b944fd3387d0e9b8f259f15ee -->

```csharp
protected static Inno.Audio.AudioDevice.DeviceHandleIdentity Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioClipHandle handle)
```

Decodes a clip handle for backend lookup and generation validation.

**Parameter `handle`:** Backend-neutral clip handle.

**Returns:** Backend identity and owning generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L99).

## `GetHandleIdentity`

<a id="api-0347afdb5dce0fd0"></a>
<!-- api: M:Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioDeviceVoiceHandle) 064ab809361e6592d90da6960a7cae11ca63b845137a82da4b8223ec0e4065df -->

```csharp
protected static Inno.Audio.AudioDevice.DeviceHandleIdentity Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioDeviceVoiceHandle handle)
```

Decodes a voice handle for backend lookup and generation validation.

**Parameter `handle`:** Backend-neutral voice handle.

**Returns:** Backend identity and owning generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L110).

## `GetHandleIdentity`

<a id="api-90025701ae7e220b"></a>
<!-- api: M:Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioListenerHandle) 3394ac72b2f25e2017a40ecc91b974d10c1ecd10aeea7133e69511e96236fc57 -->

```csharp
protected static Inno.Audio.AudioDevice.DeviceHandleIdentity Inno.Audio.AudioDevice.GetHandleIdentity(Inno.Audio.AudioListenerHandle handle)
```

Decodes a listener handle for backend lookup and generation validation.

**Parameter `handle`:** Backend-neutral listener handle.

**Returns:** Backend identity and owning generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDevice.cs#L132).
