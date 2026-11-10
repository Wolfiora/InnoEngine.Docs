---
title: "SDLContext.RawApi — Method: BindAudioStream"
description: "Exact Method: BindAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7503485ee16707ba
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BindAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BindAudioStream`

<a id="api-4d2f59652256b3a9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BindAudioStream(System.UInt32,Inno.Native.Sdl3.SDLAudioStream*) 3af70c67f8a58e0d5a61ce6a42af4cfdcedea3bcfd2a09331793e1554f836135 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.BindAudioStream(uint devid, Inno.Native.Sdl3.SDLAudioStream* stream)
```

Bind a single audio stream to an audio device.
This is a convenience function, equivalent to calling
`SDL_BindAudioStreams(devid,
&stream
, 1)`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindAudioStreams

**See also:** SDL_UnbindAudioStream

**See also:** SDL_GetAudioStreamDevice

**Parameter `devid`:** an audio device to bind a stream to.

**Parameter `stream`:** an audio stream to bind to a device.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18136).
