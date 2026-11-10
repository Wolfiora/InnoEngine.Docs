---
title: "SDLContext.RawApi — Method: UnlockAudioStream"
description: "Exact Method: UnlockAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6668a41a7b66bbb5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockAudioStream`

<a id="api-f121294085a3beb8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockAudioStream(Inno.Native.Sdl3.SDLAudioStream*) 851c857066358ddcbfa6b1e3a507071fb53ab68c61bd58d9dc4bbd5be92f9701 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UnlockAudioStream(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Unlock an audio stream for serialized access.
This unlocks an audio stream after a call to SDL_LockAudioStream.

**Thread safety:** You should only call this from the same thread that
previously called SDL_LockAudioStream.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockAudioStream

**Parameter `stream`:** the audio stream to unlock.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48321).
