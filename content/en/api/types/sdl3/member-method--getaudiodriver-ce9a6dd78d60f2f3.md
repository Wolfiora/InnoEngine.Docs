---
title: "SDLContext.RawApi — Method: GetAudioDriver"
description: "Exact Method: GetAudioDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ce9a6dd78d60f2f3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAudioDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAudioDriver`

<a id="api-26347e3d4bc283cd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDriver(System.Int32) e2a71629ee6f0fddc54b99c9b4fe0a0bbc50b84f9eeb85575688e8561bf17939 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetAudioDriver(int index)
```

Use this function to get the name of a built in audio driver.
The list of audio drivers is given in the order that they are normally
initialized by default; the drivers that seem more reasonable to choose
first (as far as the SDL developers believe) are earlier in the list.
The names of drivers are all simple, low-ASCII identifiers, like "alsa",
"coreaudio" or "wasapi". These never have Unicode characters, and are not
meant to be proper names.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumAudioDrivers

**Parameter `index`:** the index of the audio driver; the value ranges from 0 to
SDL_GetNumAudioDrivers() - 1.

**Returns:** the name of the audio driver at the requested index, or NULL if an
invalid index was specified.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48767).
