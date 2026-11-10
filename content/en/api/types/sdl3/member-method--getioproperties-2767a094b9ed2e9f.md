---
title: "SDLContext.RawApi — Method: GetIoProperties"
description: "Exact Method: GetIoProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2767a094b9ed2e9f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetIoProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetIoProperties`

<a id="api-74032d6ac675c3cc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetIoProperties(Inno.Native.Sdl3.SDLIOStream*) 9d532426103ab49b93bd4c17aeba9480c8b1fa53bcc3657297b4455e00a97abe -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetIoProperties(Inno.Native.Sdl3.SDLIOStream* context)
```

Get the properties associated with an SDL_IOStream.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `context`:** a pointer to an SDL_IOStream structure.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24386).
