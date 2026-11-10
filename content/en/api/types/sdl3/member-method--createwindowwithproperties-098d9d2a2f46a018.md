---
title: "SDLContext.RawApi — Method: CreateWindowWithProperties"
description: "Exact Method: CreateWindowWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.098d9d2a2f46a018
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateWindowWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateWindowWithProperties`

<a id="api-20b087d5a5312b81"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateWindowWithProperties(System.UInt32) c5e1fa52a0227ecf7e19740d1a8840fb166d55cd29ac4c1b84c4025bdd1d5b88 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.CreateWindowWithProperties(uint props)
```

Create a window with the specified properties.
The window size is a request and may be different than expected based on
the desktop layout and window manager policies. Your application should be
prepared to handle a window of any size.
These are the supported properties:
- `SDL_PROP_WINDOW_CREATE_ALWAYS_ON_TOP_BOOLEAN`: true if the window should
be always on top
- `SDL_PROP_WINDOW_CREATE_BORDERLESS_BOOLEAN`: true if the window has no
window decoration
- `SDL_PROP_WINDOW_CREATE_CONSTRAIN_POPUP_BOOLEAN`: true if the "tooltip"
and "menu" window types should be automatically constrained to be
entirely within display bounds (default), false if no constraints on the
position are desired.
- `SDL_PROP_WINDOW_CREATE_EXTERNAL_GRAPHICS_CONTEXT_BOOLEAN`: true if the
window will be used with an externally managed graphics context.
- `SDL_PROP_WINDOW_CREATE_FOCUSABLE_BOOLEAN`: true if the window should
accept keyboard input (defaults true)
- `SDL_PROP_WINDOW_CREATE_FULLSCREEN_BOOLEAN`: true if the window should
start in fullscreen mode at desktop resolution
- `SDL_PROP_WINDOW_CREATE_HEIGHT_NUMBER`: the height of the window
- `SDL_PROP_WINDOW_CREATE_HIDDEN_BOOLEAN`: true if the window should start
hidden
- `SDL_PROP_WINDOW_CREATE_HIGH_PIXEL_DENSITY_BOOLEAN`: true if the window
uses a high pixel density buffer if possible
- `SDL_PROP_WINDOW_CREATE_MAXIMIZED_BOOLEAN`: true if the window should
start maximized
- `SDL_PROP_WINDOW_CREATE_MENU_BOOLEAN`: true if the window is a popup menu
- `SDL_PROP_WINDOW_CREATE_METAL_BOOLEAN`: true if the window will be used
with Metal rendering
- `SDL_PROP_WINDOW_CREATE_MINIMIZED_BOOLEAN`: true if the window should
start minimized
- `SDL_PROP_WINDOW_CREATE_MODAL_BOOLEAN`: true if the window is modal to
its parent
- `SDL_PROP_WINDOW_CREATE_MOUSE_GRABBED_BOOLEAN`: true if the window starts
with grabbed mouse focus
- `SDL_PROP_WINDOW_CREATE_OPENGL_BOOLEAN`: true if the window will be used
with OpenGL rendering
- `SDL_PROP_WINDOW_CREATE_PARENT_POINTER`: an SDL_Window that will be the
parent of this window, required for windows with the "tooltip", "menu",
and "modal" properties
- `SDL_PROP_WINDOW_CREATE_RESIZABLE_BOOLEAN`: true if the window should be
resizable
- `SDL_PROP_WINDOW_CREATE_TITLE_STRING`: the title of the window, in UTF-8
encoding
- `SDL_PROP_WINDOW_CREATE_TRANSPARENT_BOOLEAN`: true if the window show
transparent in the areas with alpha of 0
- `SDL_PROP_WINDOW_CREATE_TOOLTIP_BOOLEAN`: true if the window is a tooltip
- `SDL_PROP_WINDOW_CREATE_UTILITY_BOOLEAN`: true if the window is a utility
window, not showing in the task bar and window list
- `SDL_PROP_WINDOW_CREATE_VULKAN_BOOLEAN`: true if the window will be used
with Vulkan rendering
- `SDL_PROP_WINDOW_CREATE_WIDTH_NUMBER`: the width of the window
- `SDL_PROP_WINDOW_CREATE_X_NUMBER`: the x position of the window, or
`SDL_WINDOWPOS_CENTERED`, defaults to `SDL_WINDOWPOS_UNDEFINED`. This is
relative to the parent for windows with the "tooltip" or "menu" property
set.
- `SDL_PROP_WINDOW_CREATE_Y_NUMBER`: the y position of the window, or
`SDL_WINDOWPOS_CENTERED`, defaults to `SDL_WINDOWPOS_UNDEFINED`. This is
relative to the parent for windows with the "tooltip" or "menu" property
set.
These are additional supported properties on macOS:
- `SDL_PROP_WINDOW_CREATE_COCOA_WINDOW_POINTER`: the
`(__unsafe_unretained)` NSWindow associated with the window, if you want
to wrap an existing window.
- `SDL_PROP_WINDOW_CREATE_COCOA_VIEW_POINTER`: the `(__unsafe_unretained)`
NSView associated with the window, defaults to `[window contentView]`
These are additional supported properties on iOS, tvOS, and visionOS:
- `SDL_PROP_WINDOW_CREATE_WINDOWSCENE_POINTER`: the `(__unsafe_unretained)`
UIWindowScene associated with the window, defaults to the active window
scene.
These are additional supported properties on Wayland:
- `SDL_PROP_WINDOW_CREATE_WAYLAND_SURFACE_ROLE_CUSTOM_BOOLEAN` - true if
the application wants to use the Wayland surface for a custom role and
does not want it attached to an XDG toplevel window. See
[README-wayland](https://wiki.libsdl.org/SDL3/README-wayland) for more information on using custom
surfaces.
- `SDL_PROP_WINDOW_CREATE_WAYLAND_CREATE_EGL_WINDOW_BOOLEAN` - true if the
application wants an associated `wl_egl_window` object to be created and
attached to the window, even if the window does not have the OpenGL
property or `SDL_WINDOW_OPENGL` flag set.
- `SDL_PROP_WINDOW_CREATE_WAYLAND_WL_SURFACE_POINTER` - the wl_surface
associated with the window, if you want to wrap an existing window. See
[README-wayland](https://wiki.libsdl.org/SDL3/README-wayland) for more information.
These are additional supported properties on Windows:
- `SDL_PROP_WINDOW_CREATE_WIN32_HWND_POINTER`: the HWND associated with the
window, if you want to wrap an existing window.
- `SDL_PROP_WINDOW_CREATE_WIN32_PIXEL_FORMAT_HWND_POINTER`: optional,
another window to share pixel format with, useful for OpenGL windows
These are additional supported properties with X11:
- `SDL_PROP_WINDOW_CREATE_X11_WINDOW_NUMBER`: the X11 Window associated
with the window, if you want to wrap an existing window.
The window is implicitly shown if the "hidden" property is not set.
These are additional supported properties with Emscripten:
- `SDL_PROP_WINDOW_CREATE_EMSCRIPTEN_CANVAS_ID_STRING`: the id given to the
canvas element. This should start with a '#' sign
- `SDL_PROP_WINDOW_CREATE_EMSCRIPTEN_KEYBOARD_ELEMENT_STRING`: override the
binding element for keyboard inputs for this canvas. The variable can be
one of:
- "#window": the javascript window object (default)
- "#document": the javascript document object
- "#screen": the javascript window.screen object
- "#canvas": the WebGL canvas element
- "#none": Don't bind anything at all
- any other string without a leading # sign applies to the element on the
page with that ID. Windows with the "tooltip" and "menu" properties are
popup windows and have the behaviors and guidelines outlined in
SDL_CreatePopupWindow().
If this window is being created to be used with an SDL_Renderer, you should
not add a graphics API specific property
(`SDL_PROP_WINDOW_CREATE_OPENGL_BOOLEAN`, etc), as SDL will handle that
internally when it chooses a renderer. However, SDL might need to recreate
your window at that point, which may cause the window to appear briefly,
and then flicker as it is recreated. The correct approach to this is to
create the window with the `SDL_PROP_WINDOW_CREATE_HIDDEN_BOOLEAN` property
set to true, then create the renderer, then show the window with
SDL_ShowWindow().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProperties

**See also:** SDL_CreateWindow

**See also:** SDL_DestroyWindow

**Parameter `props`:** the properties to use.

**Returns:** the window that was created or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28421).
