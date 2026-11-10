---
title: "SDL — Method: IsAudioDevicePlayback"
description: "Exact Method: IsAudioDevicePlayback contracts in SDL."
uid: api.inno.native.sdl3.3ce05af59321949f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsAudioDevicePlayback

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAudioDevicePlayback`

<a id="api-cb219ec8be398d62"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsAudioDevicePlayback(System.UInt32) fe0353a0c459fc3cc6d85080763f99dbad76977680e56c171600f225536ecae2 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsAudioDevicePlayback(uint devid)
```

Determine if an audio device is a playback device (instead of recording).
This function may return either true or false for invalid device IDs.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `devid`:** the device ID to query.

**Returns:** true if devid is a playback device, false if it is recording.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L825).
