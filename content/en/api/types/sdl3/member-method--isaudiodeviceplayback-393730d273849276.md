---
title: "SDLContext — Method: IsAudioDevicePlayback"
description: "Exact Method: IsAudioDevicePlayback contracts in SDLContext."
uid: api.inno.native.sdl3.393730d273849276
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsAudioDevicePlayback

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAudioDevicePlayback`

<a id="api-9aa29c34601aab33"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsAudioDevicePlayback(System.UInt32) 9a7b631921f4795d398be218e4cc5226af570888a623c86c5d609da21eb6fc37 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsAudioDevicePlayback(uint devid)
```

Determine if an audio device is a playback device (instead of recording).
This function may return either true or false for invalid device IDs.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devid`:** the device ID to query.

**Returns:** true if devid is a playback device, false if it is recording.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12350).
