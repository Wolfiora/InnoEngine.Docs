---
title: "SDLContext.RawApi — Method: SetTextInputArea"
description: "Exact Method: SetTextInputArea contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17d1e997dc125548
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTextInputArea

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTextInputArea`

<a id="api-ddb48f61900390aa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTextInputArea(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLRect*,System.Int32) 9c85afefdd70d51922e8b8fc65b38bd3d1bc762b7cf993646881b048446c2050 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTextInputArea(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLRect* rect, int cursor)
```

Set the area used to type Unicode text input.
Native input methods may place a window with word suggestions near the
cursor, without covering the text being entered.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextInputArea

**See also:** SDL_StartTextInput

**Parameter `window`:** the window for which to set the text input area.

**Parameter `rect`:** the SDL_Rect representing the text input area, in window
coordinates, or NULL to clear it.

**Parameter `cursor`:** the offset of the current cursor location relative to
`rect->x`, in window coordinates.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47533).
