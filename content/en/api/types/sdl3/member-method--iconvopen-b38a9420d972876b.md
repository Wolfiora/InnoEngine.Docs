---
title: "SDLContext.RawApi — Method: IconvOpen"
description: "Exact Method: IconvOpen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b38a9420d972876b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IconvOpen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IconvOpen`

<a id="api-307ed116be2152c1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IconvOpen(System.SByte*,System.SByte*) c8f1614d9344f523e0f734d5037dc5c9829e7162aa015ab3f1eb11f942947ecf -->

```csharp
public Inno.Native.Sdl3.SDLIconvDataT* Inno.Native.Sdl3.SDLContext.RawApi.IconvOpen(sbyte* tocode, sbyte* fromcode)
```

This function allocates a context for the specified character set
conversion.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_iconv

**See also:** SDL_iconv_close

**See also:** SDL_iconv_string

**Parameter `tocode`:** The target character encoding, must not be NULL.

**Parameter `fromcode`:** The source character encoding, must not be NULL.

**Returns:** a handle that must be freed with SDL_iconv_close, or
SDL_ICONV_ERROR on failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40913).
