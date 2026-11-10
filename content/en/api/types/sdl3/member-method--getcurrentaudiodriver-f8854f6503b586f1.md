---
title: "SDLContext.RawApi — Method: GetCurrentAudioDriver"
description: "Exact Method: GetCurrentAudioDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f8854f6503b586f1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentAudioDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentAudioDriver`

<a id="api-aa4bf48a099ac6fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentAudioDriver dfaea310c3eae7b3b8a93c28c782fe5e66c5bd909e76b73c1e03b2848e264c47 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentAudioDriver()
```

Get the name of the current audio driver.
The names of drivers are all simple, low-ASCII identifiers, like "alsa",
"coreaudio" or "wasapi". These never have Unicode characters, and are not
meant to be proper names.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the name of the current audio driver or NULL if no driver has been
initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21870).
