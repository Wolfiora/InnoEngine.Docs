---
title: "SDLContext.RawApi — Method: GetIoStatus"
description: "Exact Method: GetIoStatus contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.47c5bce6ed6e152d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetIoStatus

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetIoStatus`

<a id="api-ea1c3e46c0dba474"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetIoStatus(Inno.Native.Sdl3.SDLIOStream*) 2e77146464a0b38e375d1f01d9640fcaebc2c843c8728d5da3d3bd4718824a57 -->

```csharp
public Inno.Native.Sdl3.SDLIOStatus Inno.Native.Sdl3.SDLContext.RawApi.GetIoStatus(Inno.Native.Sdl3.SDLIOStream* context)
```

Query the stream status of an SDL_IOStream.
This information can be useful to decide if a short read or write was due
to an error, an EOF, or a non-blocking operation that isn't yet ready to
complete.
An SDL_IOStream's status is only expected to change after a SDL_ReadIO or
SDL_WriteIO call; don't expect it to change if you just call this query
function in a tight loop.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `context`:** the SDL_IOStream to query.

**Returns:** an SDL_IOStatus enum with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48203).
