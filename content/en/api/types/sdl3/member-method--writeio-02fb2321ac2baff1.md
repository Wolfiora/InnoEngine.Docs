---
title: "SDLContext.RawApi — Method: WriteIo"
description: "Exact Method: WriteIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.02fb2321ac2baff1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteIo`

<a id="api-0d191f12b30caf7f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteIo(Inno.Native.Sdl3.SDLIOStream*,System.Void*,System.UInt64) 7910676e5ba729fe873d5604b085cbd7829e32df9593feb6335801daddb78170 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.WriteIo(Inno.Native.Sdl3.SDLIOStream* context, void* ptr, ulong size)
```

Write to an SDL_IOStream data stream.
This function writes exactly `size` bytes from the area pointed at by `ptr`
to the stream. If this fails for any reason, it'll return less than `size`
to demonstrate how far the write progressed. On success, it returns `size`.
On error, this function still attempts to write as much as possible, so it
might return a positive value less than the requested write size.
The caller can use SDL_GetIOStatus() to determine if the problem is
recoverable, such as a non-blocking write that can simply be retried later,
or a fatal error.
A request for zero bytes on a valid stream will return zero immediately
without accessing the stream, so the stream status (EOF, err, etc) will not
change.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_IOprintf

**See also:** SDL_ReadIO

**See also:** SDL_SeekIO

**See also:** SDL_FlushIO

**See also:** SDL_GetIOStatus

**Parameter `context`:** a pointer to an SDL_IOStream structure.

**Parameter `ptr`:** a pointer to a buffer containing data to write.

**Parameter `size`:** the number of bytes to write.

**Returns:** the number of bytes written, which will be less than `size` on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51944).
