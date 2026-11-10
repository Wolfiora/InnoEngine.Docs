---
title: "SDLContext.RawApi — Method: GetAudioDeviceGain"
description: "Exact Method: GetAudioDeviceGain contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0aeff6f4d90d504d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioDeviceGain

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDeviceGain`

<a id="api-aa01ff675ab53453"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceGain(System.UInt32) 8dfacd94b15fae3ded98f80f388acd27010c75c7483020090dd829453c3086f5 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDeviceGain(uint devid)
```

Get the gain of an audio device.
The gain of a device is its volume; a larger gain means a louder output,
with a gain of zero being silence.
Audio devices default to a gain of 1.0f (no change in output).
Physical devices may not have their gain changed, only logical devices, and
this function will always return -1.0f when used on physical devices.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAudioDeviceGain

**Parameter `devid`:** the audio device to query.

**Returns:** the gain of the device or -1.0f on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20892).
