---
title: "SDLContext.RawApi — Method: GetAsyncIoSize"
description: "Exact Method: GetAsyncIoSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c729c170ce169cfb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAsyncIoSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAsyncIoSize`

<a id="api-04878190dd08c678"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAsyncIoSize(Inno.Native.Sdl3.SDLAsyncIO*) b943010fef92772390a50c58953d9129a339f3c15c513017470f5221153fec1f -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.GetAsyncIoSize(Inno.Native.Sdl3.SDLAsyncIO* asyncio)
```

Use this function to get the size of the data stream in an SDL_AsyncIO.
This call is _not_ asynchronous; it assumes that obtaining this info is a
non-blocking operation in most reasonable cases.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `asyncio`:** the SDL_AsyncIO to get the size of the data stream from.

**Returns:** the size of the data stream in the SDL_IOStream on success or a
negative error code on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24851).
