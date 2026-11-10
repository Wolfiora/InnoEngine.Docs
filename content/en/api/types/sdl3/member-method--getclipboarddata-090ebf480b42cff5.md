---
title: "SDLContext.RawApi — Method: GetClipboardData"
description: "Exact Method: GetClipboardData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.090ebf480b42cff5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetClipboardData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetClipboardData`

<a id="api-9d501abcdf4d8ccb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetClipboardData(System.SByte*,System.UInt64*) 13473e2b5de987f06c33fefc5b3dd8c2f0c9ecc53bb254c2413a127d4be56bb8 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.GetClipboardData(sbyte* mime_type, ulong* size)
```

Get the data from the clipboard for a given mime type.
The size of text data does not include the terminator, but the text is
guaranteed to be null-terminated.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasClipboardData

**See also:** SDL_SetClipboardData

**Parameter `mime_type`:** the mime type to read from the clipboard.

**Parameter `size`:** a pointer filled in with the length of the returned data.

**Returns:** the retrieved data buffer or NULL on failure; call SDL_GetError()
for more information. This should be freed with SDL_free() when it
is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42297).
