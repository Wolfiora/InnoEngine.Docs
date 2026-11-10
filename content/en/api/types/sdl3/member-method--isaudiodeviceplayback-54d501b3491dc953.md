---
title: "SDLContext.RawApi — Method: IsAudioDevicePlayback"
description: "Exact Method: IsAudioDevicePlayback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.54d501b3491dc953
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsAudioDevicePlayback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAudioDevicePlayback`

<a id="api-630c39584b1c547a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsAudioDevicePlayback(System.UInt32) 5d0320c2b6c035a86aae2375b2f4598585f487adb2ca649d0ce47f1a1a581ec0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsAudioDevicePlayback(uint devid)
```

Determine if an audio device is a playback device (instead of recording).
This function may return either true or false for invalid device IDs.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devid`:** the device ID to query.

**Returns:** true if devid is a playback device, false if it is recording.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22681).
