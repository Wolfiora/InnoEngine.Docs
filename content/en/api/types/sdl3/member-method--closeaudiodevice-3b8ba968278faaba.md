---
title: "SDLContext.RawApi — Method: CloseAudioDevice"
description: "Exact Method: CloseAudioDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3b8ba968278faaba
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseAudioDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseAudioDevice`

<a id="api-dc7c7ea79236ba98"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseAudioDevice(System.UInt32) 5d3eb5e18aff42b4edb5262c64cd05300ca173fb27da2280e36f0e1acb0f5ebb -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CloseAudioDevice(uint devid)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35171).
