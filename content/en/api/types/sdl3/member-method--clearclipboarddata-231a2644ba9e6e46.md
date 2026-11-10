---
title: "SDLContext.RawApi — Method: ClearClipboardData"
description: "Exact Method: ClearClipboardData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.231a2644ba9e6e46
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClearClipboardData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearClipboardData`

<a id="api-fe3ab68539d73f94"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClearClipboardData 22177485b8f22b3e67bda717489da03a3b3e5bda636ffd8e5920f10737721906 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClearClipboardData()
```

Clear the clipboard data.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetClipboardData

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40309).
