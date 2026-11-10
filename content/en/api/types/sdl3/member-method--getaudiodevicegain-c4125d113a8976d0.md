---
title: "SDLContext — Method: GetAudioDeviceGain"
description: "Exact Method: GetAudioDeviceGain contracts in SDLContext."
uid: api.inno.native.sdl3.c4125d113a8976d0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetAudioDeviceGain

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDeviceGain`

<a id="api-266ab7c602f2a63a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetAudioDeviceGain(System.UInt32) 4c85b17b8e6a535b0466ce85f5d642ed1dce80e6f8fc5388d1d2220b365ef929 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.GetAudioDeviceGain(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12154).
