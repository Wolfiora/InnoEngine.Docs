---
title: "SDLContext.RawApi — Method: SetClipboardText"
description: "Exact Method: SetClipboardText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.816f4944d03233c6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetClipboardText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetClipboardText`

<a id="api-7fbab32face398f0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetClipboardText(System.SByte*) 8bb1b22a6a2dbf4f686432392f0ae9766d71fe74f78a19b9e8d872e2ab6dba24 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetClipboardText(sbyte* text)
```

Put UTF-8 text into the clipboard.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetClipboardText

**See also:** SDL_HasClipboardText

**Parameter `text`:** the text to store in the clipboard.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25979).
