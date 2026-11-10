---
title: "SDLContext.RawApi — Method: Vsscanf"
description: "Exact Method: Vsscanf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e5ce89ff784e5840
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Vsscanf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Vsscanf`

<a id="api-6aa4403117382274"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Vsscanf(System.SByte*,System.SByte*,System.SByte*) 171ce89f37bb1cf0810dba7602b70b3a774f0eb41f3e10abfe8a2ae00d23ece0 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Vsscanf(sbyte* text, sbyte* fmt, sbyte* ap)
```

This works exactly like vsscanf() but doesn't require access to a C
runtime.
Functions identically to SDL_sscanf(), except it takes a `va_list` instead
of using `...` variable arguments.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `text`:** the string to scan. Must not be NULL.

**Parameter `fmt`:** a printf-style format string. Must not be NULL.

**Parameter `ap`:** a `va_list` of pointers to values to be filled in with scanned
items.

**Returns:** the number of items that matched the format string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35304).
