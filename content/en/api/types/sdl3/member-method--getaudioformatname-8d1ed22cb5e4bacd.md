---
title: "SDLContext.RawApi — Method: GetAudioFormatName"
description: "Exact Method: GetAudioFormatName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8d1ed22cb5e4bacd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioFormatName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioFormatName`

<a id="api-32bb694edb874412"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioFormatName(Inno.Native.Sdl3.SDLAudioFormat) 283b9f90eec01cb728b2aaa448920498959e07071285059f97d7f238128cae2c -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioFormatName(Inno.Native.Sdl3.SDLAudioFormat format)
```

Get the human readable name of an audio format.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** the audio format to query.

**Returns:** the human readable name of the specified audio format or
"SDL_AUDIO_UNKNOWN" if the format isn't recognized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18291).
