---
title: "SDLContext.RawApi — Method: ReadS64Be"
description: "Exact Method: ReadS64Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ee7804a9d5342e3f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadS64Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadS64Be`

<a id="api-dbbd05e89d29d402"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadS64Be(Inno.Native.Sdl3.SDLIOStream*,System.Int64*) 456da3e7bee60871bb690664c7c3f5c08cf1464a2f14bc7323c0a0617b0b0b91 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadS64Be(Inno.Native.Sdl3.SDLIOStream* src, long* value)
```

Use this function to read 64 bits of big-endian data from an SDL_IOStream
and return in native format.
SDL byteswaps the data only if necessary, so the data returned will be in
the native byte order.
This function will return false when the data stream is completely read,
and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
and the stream is not at EOF, SDL_GetIOStatus() will return a different
error value and SDL_GetError() will offer a human-readable message.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `src`:** the stream from which to read data.

**Parameter `value`:** a pointer filled in with the data read.

**Returns:** true on successful read or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26577).
