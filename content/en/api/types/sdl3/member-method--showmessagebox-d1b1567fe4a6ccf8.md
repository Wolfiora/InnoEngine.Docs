---
title: "SDLContext.RawApi — Method: ShowMessageBox"
description: "Exact Method: ShowMessageBox contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1b1567fe4a6ccf8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowMessageBox

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowMessageBox`

<a id="api-ec8ee165b2ae5440"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowMessageBox(Inno.Native.Sdl3.SDLMessageBoxData*,System.Int32*) 767e60744c4ced78f3e1ec9c86a86ec003d1eb259924bf9158e1ce4151b3468c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShowMessageBox(Inno.Native.Sdl3.SDLMessageBoxData* messageboxdata, int* buttonid)
```

Create a modal message box.
If your needs aren't complex, it might be easier to use
SDL_ShowSimpleMessageBox.
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

**See also:** SDL_ShowSimpleMessageBox

**Parameter `messageboxdata`:** the SDL_MessageBoxData structure with title, text and
other options.

**Parameter `buttonid`:** the pointer to which user id of hit button should be
copied.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17819).
