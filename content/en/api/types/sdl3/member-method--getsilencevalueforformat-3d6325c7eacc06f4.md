---
title: "SDLContext.RawApi — Method: GetSilenceValueForFormat"
description: "Exact Method: GetSilenceValueForFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3d6325c7eacc06f4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSilenceValueForFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSilenceValueForFormat`

<a id="api-8fad1b6475e1fd9a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSilenceValueForFormat(Inno.Native.Sdl3.SDLAudioFormat) 371cbaaf89dd4becd3f2f71eb17e42320d8d8712ca27275b71b92a21db47a904 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetSilenceValueForFormat(Inno.Native.Sdl3.SDLAudioFormat format)
```

Get the appropriate memset value for silencing an audio format.
The value returned by this function can be used as the second argument to
memset (or SDL_memset) to set an audio buffer in a specific format to
silence.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** the audio data format to query.

**Returns:** a byte value that can be passed to memset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39509).
