---
title: "SDLContext.RawApi — Method: FlushAudioStream"
description: "Exact Method: FlushAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a0886c29a97584ca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FlushAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlushAudioStream`

<a id="api-d5f22506e82de242"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FlushAudioStream(Inno.Native.Sdl3.SDLAudioStream*) a55a168fef19d563f0a5ee87d4bb27f093b78f46a14cd5594a87b446304221b6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.FlushAudioStream(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Tell the stream that you're done sending data, and anything being buffered
should be converted/resampled and made available immediately.
It is legal to add more data to a stream after flushing, but there may be
audio gaps in the output. Generally this is intended to signal the end of
input, so the complete output becomes available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PutAudioStreamData

**Parameter `stream`:** the audio stream to flush.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28705).
