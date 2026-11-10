---
title: "SDLContext.RawApi — Method: ShowSimpleMessageBox"
description: "Exact Method: ShowSimpleMessageBox contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.23d42d4d75c95a3f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowSimpleMessageBox

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowSimpleMessageBox`

<a id="api-bf51307ab13da8af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowSimpleMessageBox(System.UInt32,System.SByte*,System.SByte*,Inno.Native.Sdl3.SDLWindow*) aa0b2e9c923ba63b65977e8c32e72085a4d1314683cc46c0482340fe00ffd5e6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShowSimpleMessageBox(uint flags, sbyte* title, sbyte* message, Inno.Native.Sdl3.SDLWindow* window)
```

Display a simple modal message box.
If your needs aren't complex, this function is preferred over
SDL_ShowMessageBox.
`flags` may be any of the following:
- `SDL_MESSAGEBOX_ERROR`: error dialog
- `SDL_MESSAGEBOX_WARNING`: warning dialog
- `SDL_MESSAGEBOX_INFORMATION`: informational dialog
This function should be called on the thread that created the parent
window, or on the main thread if the messagebox has no parent. It will
block execution of that thread until the user clicks a button or closes the
messagebox.
This function may be called at any time, even before SDL_Init(). This makes
it useful for reporting errors like a failure to create a renderer or
OpenGL context.
On X11, SDL rolls its own dialog box with X11 primitives instead of a
formal toolkit like GTK+ or Qt.
Note that if SDL_Init() would fail because there isn't any available video
target, this function is likely to fail for the same reasons. If this is a
concern, check the return value from this function and fall back to writing
to stderr if you can.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ShowMessageBox

**Parameter `flags`:** an SDL_MessageBoxFlags value.

**Parameter `title`:** UTF-8 title text.

**Parameter `message`:** UTF-8 message text.

**Parameter `window`:** the parent window, or NULL for no parent.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35353).
