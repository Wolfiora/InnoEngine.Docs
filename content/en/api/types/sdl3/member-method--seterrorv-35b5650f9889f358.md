---
title: "SDLContext.RawApi — Method: SetErrorV"
description: "Exact Method: SetErrorV contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.35b5650f9889f358
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetErrorV

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetErrorV`

<a id="api-0884c23eb09a65d9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetErrorV(System.SByte*,System.SByte*) 40ce13b7f49b90c544ef085b69d2134f0e1572c8f4739c87e4c8e80be5080b55 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetErrorV(sbyte* fmt, sbyte* ap)
```

Set the SDL error message for the current thread.
Calling this function will replace any previous error message that was set.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClearError

**See also:** SDL_GetError

**See also:** SDL_SetError

**Parameter `fmt`:** a printf()-style message format string.

**Parameter `ap`:** a variable argument list.

**Returns:** false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42780).
