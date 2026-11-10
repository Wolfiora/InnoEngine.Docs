---
title: "SDLContext.RawApi — Method: CreateWindow"
description: "Exact Method: CreateWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b58f8ad641dbb04a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateWindow`

<a id="api-b0efc52e031ca540"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateWindow(System.SByte*,System.Int32,System.Int32,System.UInt64) fdf02036ed1b4834fcb4edc72efa23ebb88f1b9c447b77d89c4cd434fe7eb417 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.CreateWindow(sbyte* title, int w, int h, ulong flags)
```

Create a window with the specified dimensions and flags.
The window size is a request and may be different than expected based on
the desktop layout and window manager policies. Your application should be
prepared to handle a window of any size.
`flags` may be any of the following OR'd together:
- `SDL_WINDOW_FULLSCREEN`: fullscreen window at desktop resolution
- `SDL_WINDOW_OPENGL`: window usable with an OpenGL context
- `SDL_WINDOW_HIDDEN`: window is not visible
- `SDL_WINDOW_BORDERLESS`: no window decoration
- `SDL_WINDOW_RESIZABLE`: window can be resized
- `SDL_WINDOW_MINIMIZED`: window is minimized
- `SDL_WINDOW_MAXIMIZED`: window is maximized
- `SDL_WINDOW_MOUSE_GRABBED`: window has grabbed mouse focus
- `SDL_WINDOW_INPUT_FOCUS`: window has input focus
- `SDL_WINDOW_MOUSE_FOCUS`: window has mouse focus
- `SDL_WINDOW_EXTERNAL`: window not created by SDL
- `SDL_WINDOW_MODAL`: window is modal
- `SDL_WINDOW_HIGH_PIXEL_DENSITY`: window uses high pixel density back
buffer if possible
- `SDL_WINDOW_MOUSE_CAPTURE`: window has mouse captured (unrelated to
MOUSE_GRABBED)
- `SDL_WINDOW_ALWAYS_ON_TOP`: window should always be above others
- `SDL_WINDOW_UTILITY`: window should be treated as a utility window, not
showing in the task bar and window list
- `SDL_WINDOW_TOOLTIP`: window should be treated as a tooltip and does not
get mouse or keyboard focus, requires a parent window
- `SDL_WINDOW_POPUP_MENU`: window should be treated as a popup menu,
requires a parent window
- `SDL_WINDOW_KEYBOARD_GRABBED`: window has grabbed keyboard input
- `SDL_WINDOW_VULKAN`: window usable with a Vulkan instance
- `SDL_WINDOW_METAL`: window usable with a Metal instance
- `SDL_WINDOW_TRANSPARENT`: window with transparent buffer
- `SDL_WINDOW_NOT_FOCUSABLE`: window should not be focusable
The SDL_Window will be shown if SDL_WINDOW_HIDDEN is not set. If hidden at
creation time, SDL_ShowWindow() can be used to show it later.
On Apple's macOS, you **must** set the NSHighResolutionCapable Info.plist
property to YES, otherwise you will not receive a High-DPI OpenGL canvas.
The window pixel size may differ from its window coordinate size if the
window is on a high pixel density display. Use SDL_GetWindowSize() to query
the client area's size in window coordinates, and
SDL_GetWindowSizeInPixels() or SDL_GetRenderOutputSize() to query the
drawable size in pixels. Note that the drawable size can vary after the
window is created and should be queried again if you get an
SDL_EVENT_WINDOW_PIXEL_SIZE_CHANGED event.
If the window is created with any of the SDL_WINDOW_OPENGL or
SDL_WINDOW_VULKAN flags, then the corresponding LoadLibrary function
(SDL_GL_LoadLibrary or SDL_Vulkan_LoadLibrary) is called and the
corresponding UnloadLibrary function is called by SDL_DestroyWindow().
If SDL_WINDOW_VULKAN is specified and there isn't a working Vulkan driver,
SDL_CreateWindow() will fail, because SDL_Vulkan_LoadLibrary() will fail.
If SDL_WINDOW_METAL is specified on an OS that does not support Metal,
SDL_CreateWindow() will fail.
If you intend to use this window with an SDL_Renderer, you should use
SDL_CreateWindowAndRenderer() instead of this function, to avoid window
flicker.
On non-Apple devices, SDL requires you to either not link to the Vulkan
loader or link to a dynamic library version. This limitation may be removed
in a future version of SDL.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateWindowAndRenderer

**See also:** SDL_CreatePopupWindow

**See also:** SDL_CreateWindowWithProperties

**See also:** SDL_DestroyWindow

**Parameter `title`:** the title of the window, in UTF-8 encoding.

**Parameter `w`:** the width of the window.

**Parameter `h`:** the height of the window.

**Parameter `flags`:** 0, or one or more SDL_WindowFlags OR'd together.

**Returns:** the window that was created or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29033).
