---
title: "SDLContext.RawApi — Method: CloseIo"
description: "Exact Method: CloseIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.406fa0264ff01f8e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseIo`

<a id="api-469c656d47bc19d1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseIo(Inno.Native.Sdl3.SDLIOStream*) 41fae056b357cf3c37a1f54373704713cec1b90f1a96e9f76980bc0b7ad5a01a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CloseIo(Inno.Native.Sdl3.SDLIOStream* context)
```

Close and free an allocated SDL_IOStream structure.
SDL_CloseIO() closes and cleans up the SDL_IOStream stream. It releases any
resources used by the stream and frees the SDL_IOStream itself. This
returns true on success, or false if the stream failed to flush to its
output (e.g. to disk).
Note that if this fails to flush the stream for any reason, this function
reports an error, but the SDL_IOStream is still invalid once this function
returns.
This call flushes any buffered writes to the operating system, but there
are no guarantees that those writes have gone to physical media; they might
be in the OS's file cache, waiting to go to disk later. If it's absolutely
crucial that writes go to disk immediately, so they are definitely stored
even if the power fails before the file cache would have caught up, one
should call SDL_FlushIO() before closing. Note that flushing takes time and
makes the system and your app operate less efficiently, so do so sparingly.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenIO

**Parameter `context`:** SDL_IOStream structure to close.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38766).
