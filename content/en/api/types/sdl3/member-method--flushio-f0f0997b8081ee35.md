---
title: "SDLContext.RawApi — Method: FlushIo"
description: "Exact Method: FlushIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f0f0997b8081ee35
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FlushIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlushIo`

<a id="api-f81bb89d3e6c2ef2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FlushIo(Inno.Native.Sdl3.SDLIOStream*) 248f7f221631fdd6ad05ad84498d11b136f580f7f9c5a939a964c4bb81db11bf -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.FlushIo(Inno.Native.Sdl3.SDLIOStream* context)
```

Flush any buffered data in the stream.
This function makes sure that any buffered data is written to the stream.
Normally this isn't necessary but if the stream is a pipe or socket it
guarantees that any pending data is sent.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenIO

**See also:** SDL_WriteIO

**Parameter `context`:** SDL_IOStream structure to flush.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29890).
