---
title: "SDLContext.RawApi — Method: GetAudioStreamDevice"
description: "Exact Method: GetAudioStreamDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.94592a90d043d8a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamDevice`

<a id="api-8c8e617952bcf9da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamDevice(Inno.Native.Sdl3.SDLAudioStream*) 216140bb71557cbfc853dddbd332c496c3e127e7aed4c70686f215ace410f45d -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamDevice(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Query an audio stream for its currently-bound device.
This reports the logical audio device that an audio stream is currently
bound to.
If not bound, or invalid, this returns zero, which is not a valid device
ID.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindAudioStream

**See also:** SDL_BindAudioStreams

**Parameter `stream`:** the audio stream to query.

**Returns:** the bound audio device, or 0 if not bound or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29353).
