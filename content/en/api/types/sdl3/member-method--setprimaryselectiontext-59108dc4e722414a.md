---
title: "SDLContext.RawApi — Method: SetPrimarySelectionText"
description: "Exact Method: SetPrimarySelectionText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.59108dc4e722414a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetPrimarySelectionText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetPrimarySelectionText`

<a id="api-c181817752b2ecdb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetPrimarySelectionText(System.SByte*) a5e6fcba80d4869e3d71b064bb3fc3bc61e58b5d4f95347a67289715f867d094 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetPrimarySelectionText(sbyte* text)
```

Put UTF-8 text into the primary selection.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPrimarySelectionText

**See also:** SDL_HasPrimarySelectionText

**Parameter `text`:** the text to store in the primary selection.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29865).
