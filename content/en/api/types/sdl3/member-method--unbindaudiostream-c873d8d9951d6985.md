---
title: "SDLContext.RawApi — Method: UnbindAudioStream"
description: "Exact Method: UnbindAudioStream contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c873d8d9951d6985
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnbindAudioStream

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnbindAudioStream`

<a id="api-431a26fe0594a397"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnbindAudioStream(Inno.Native.Sdl3.SDLAudioStream*) 29a420c2390a1dfaa49265b6921646ae16605dfe2039aea8cc99cd63e70b54df -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnbindAudioStream(Inno.Native.Sdl3.SDLAudioStream* stream)
```

Unbind a single audio stream from its audio device.
This is a convenience function, equivalent to calling
`SDL_UnbindAudioStreams(
&stream
, 1)`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindAudioStream

**Parameter `stream`:** an audio stream to unbind from a device. Can be NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49918).
