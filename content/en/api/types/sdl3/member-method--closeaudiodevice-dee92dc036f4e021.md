---
title: "SDLContext — Method: CloseAudioDevice"
description: "Exact Method: CloseAudioDevice contracts in SDLContext."
uid: api.inno.native.sdl3.dee92dc036f4e021
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CloseAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseAudioDevice`

<a id="api-467d7d98fae7bf4f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CloseAudioDevice(System.UInt32) 63242dd751253b62431815c8c43a8604ff5898c786c01f9d70598d837c8a1de2 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.CloseAudioDevice(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14068).
