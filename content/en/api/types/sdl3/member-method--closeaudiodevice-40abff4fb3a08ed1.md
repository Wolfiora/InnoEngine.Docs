---
title: "SDL — Method: CloseAudioDevice"
description: "Exact Method: CloseAudioDevice contracts in SDL."
uid: api.inno.native.sdl3.40abff4fb3a08ed1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: CloseAudioDevice

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseAudioDevice`

<a id="api-3bf0f09ca662fd47"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.CloseAudioDevice(System.UInt32) 21db5884f4e728326968a8cd78a87e244741ba8add1f0a4c473a98812926685a -->

```csharp
public static void Inno.Native.Sdl3.SDL.CloseAudioDevice(uint devid)
```

Close a previously-opened audio device.
The application should close open audio devices once they are no longer
needed.
This function may block briefly while pending audio data is played by the
hardware, so that applications don't drop the last buffer of data they
supplied if terminating immediately afterwards.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenAudioDevice

**Parameter `devid`:** an audio device id previously returned by
SDL_OpenAudioDevice().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2238).
