---
title: "SDLContext.RawApi — Method: IOvprintf"
description: "Exact Method: IOvprintf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ad7ccfbb9dca58e3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IOvprintf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IOvprintf`

<a id="api-293ae7a8886bd447"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IOvprintf(Inno.Native.Sdl3.SDLIOStream*,System.SByte*,System.SByte*) 3a707683066d34f317f94e1c752f6024903f6f698d92c8f2a6dc96c5f27807f7 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.IOvprintf(Inno.Native.Sdl3.SDLIOStream* context, sbyte* fmt, sbyte* ap)
```

Print to an SDL_IOStream data stream.
This function does formatted printing to the stream.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_IOprintf

**See also:** SDL_WriteIO

**Parameter `context`:** a pointer to an SDL_IOStream structure.

**Parameter `fmt`:** a printf() style format string.

**Parameter `ap`:** a variable argument list.

**Returns:** the number of bytes written or 0 on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19952).
