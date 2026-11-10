---
title: "SDLContext.RawApi — Method: GetPrimarySelectionText"
description: "Exact Method: GetPrimarySelectionText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1d9279936a46c0f8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPrimarySelectionText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPrimarySelectionText`

<a id="api-373a7afde5e9f0f3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPrimarySelectionText 6a4900d9b04c7bf95fbe4ab776690d3ed96a58a550b7795155e0402d078e7dc5 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetPrimarySelectionText()
```

Get UTF-8 text from the primary selection.
This function returns an empty string if there is not enough memory left
for a copy of the primary selection's content.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasPrimarySelectionText

**See also:** SDL_SetPrimarySelectionText

**Returns:** the primary selection text on success or an empty string on
failure; call SDL_GetError() for more information. This should be
freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33074).
