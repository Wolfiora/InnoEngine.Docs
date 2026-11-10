---
title: "SDLContext.RawApi — Method: ClearAudioStream"
description: "Exact Method: ClearAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9add3b60c37baa8c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClearAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearAudioStream`

<a id="api-93a91b23f82b6a1d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClearAudioStream(Inno.Native.Sdl3.SDLAudioStream*) aa5cd3478fc1768636f681531357df5a928ab60c78ad675cbed2e23207f6cb71 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClearAudioStream(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Clear any pending data in the stream.
This drops any queued data, so there will be nothing to read from the
stream until more is added.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioStreamAvailable

**See also:** SDL_GetAudioStreamData

**See also:** SDL_GetAudioStreamQueued

**See also:** SDL_PutAudioStreamData

**Parameter `stream`:** the audio stream to clear.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25648).
