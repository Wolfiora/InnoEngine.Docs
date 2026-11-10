---
title: "SDLContext.RawApi — Method: HasClipboardText"
description: "Exact Method: HasClipboardText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f82bc0a6525e6641
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasClipboardText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasClipboardText`

<a id="api-a8903f8b95f9255c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasClipboardText 1823d205421856d6379342f5fd2f3a266260eec9942db6340058ca5aa5c7743f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasClipboardText()
```

Query whether the clipboard exists and contains a non-empty text string.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetClipboardText

**See also:** SDL_SetClipboardText

**Returns:** true if the clipboard has text, or false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46479).
