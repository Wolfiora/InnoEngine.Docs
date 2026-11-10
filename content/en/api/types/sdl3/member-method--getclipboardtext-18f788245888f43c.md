---
title: "SDLContext.RawApi — Method: GetClipboardText"
description: "Exact Method: GetClipboardText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.18f788245888f43c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetClipboardText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetClipboardText`

<a id="api-4b98d01f747ad5ef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetClipboardText fd0f14d2f1adb20e81418adc693666b56be299fd0bc7101c8d30043a04e8e03a -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetClipboardText()
```

Get UTF-8 text from the clipboard.
This function returns an empty string if there is not enough memory left
for a copy of the clipboard's content.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasClipboardText

**See also:** SDL_SetClipboardText

**Returns:** the clipboard text on success or an empty string on failure; call
SDL_GetError() for more information. This should be freed with
SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40416).
