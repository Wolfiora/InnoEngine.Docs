---
title: "SDL — Method: GetAudioDeviceGain"
description: "Exact Method: GetAudioDeviceGain contracts in SDL."
uid: api.inno.native.sdl3.911fdc160273104d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetAudioDeviceGain

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDeviceGain`

<a id="api-0276de1d14750fb2"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetAudioDeviceGain(System.UInt32) 7070a8258595f9c3e16f74cc1de4d39149ba15ab2a5fa1118995ca1b6102e795 -->

```csharp
public static float Inno.Native.Sdl3.SDL.GetAudioDeviceGain(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L673).
