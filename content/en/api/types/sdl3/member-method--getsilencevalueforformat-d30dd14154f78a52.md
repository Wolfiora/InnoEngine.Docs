---
title: "SDLContext — Method: GetSilenceValueForFormat"
description: "Exact Method: GetSilenceValueForFormat contracts in SDLContext."
uid: api.inno.native.sdl3.d30dd14154f78a52
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSilenceValueForFormat

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSilenceValueForFormat`

<a id="api-64090198a3461c9a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSilenceValueForFormat(Inno.Native.Sdl3.SDLAudioFormat) 8ea2762193ec4a5036d260eb0283923b3e4c0a9f100eea43cda8f1aadb79bd75 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetSilenceValueForFormat(Inno.Native.Sdl3.SDLAudioFormat format)
```

Get the appropriate memset value for silencing an audio format.
The value returned by this function can be used as the second argument to
memset (or SDL_memset) to set an audio buffer in a specific format to
silence.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** the audio data format to query.

**Returns:** a byte value that can be passed to memset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14885).
