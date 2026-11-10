---
title: "SDLContext.RawApi — Method: GetAudioStreamProperties"
description: "Exact Method: GetAudioStreamProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.750b993284d45977
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioStreamProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioStreamProperties`

<a id="api-eaf03a043d63c562"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamProperties(Inno.Native.Sdl3.SDLAudioStream*) d4869de088394ef7182b521ab8b23a6e1b8915d323404727ca858daa54441218 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetAudioStreamProperties(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Get the properties associated with an audio stream.
The application can hang any data it wants here, but the following
properties are understood by SDL:
- `SDL_PROP_AUDIOSTREAM_AUTO_CLEANUP_BOOLEAN`: if true (the default), the
stream be automatically cleaned up when the audio subsystem quits. If set
to false, the streams will persist beyond that. This property is ignored
for streams created through SDL_OpenAudioDeviceStream(), and will always
be cleaned up. Streams that are not cleaned up will still be unbound from
devices when the audio subsystem quits. This property was added in SDL
3.4.0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `stream`:** the SDL_AudioStream to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52113).
