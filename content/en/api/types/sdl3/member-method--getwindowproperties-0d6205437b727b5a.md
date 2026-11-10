---
title: "SDLContext.RawApi — Method: GetWindowProperties"
description: "Exact Method: GetWindowProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0d6205437b727b5a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowProperties`

<a id="api-3e7f1db82a183fe7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowProperties(Inno.Native.Sdl3.SDLWindow*) 45cf64bbf5f02199224c5d800a273eea009f9ce66a1c43d801467240f9a867b8 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetWindowProperties(Inno.Native.Sdl3.SDLWindow* window)
```

Get the properties associated with a window.
The following read-only properties are provided by SDL:
- `SDL_PROP_WINDOW_SHAPE_POINTER`: the surface associated with a shaped
window
- `SDL_PROP_WINDOW_HDR_ENABLED_BOOLEAN`: true if the window has HDR
headroom above the SDR white point. This property can change dynamically
when SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
- `SDL_PROP_WINDOW_SDR_WHITE_LEVEL_FLOAT`: the value of SDR white in the
SDL_COLORSPACE_SRGB_LINEAR colorspace. On Windows this corresponds to the
SDR white level in scRGB colorspace, and on Apple platforms this is
always 1.0 for EDR content. This property can change dynamically when
SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
- `SDL_PROP_WINDOW_HDR_HEADROOM_FLOAT`: the additional high dynamic range
that can be displayed, in terms of the SDR white point. When HDR is not
enabled, this will be 1.0. This property can change dynamically when
SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
On Android:
- `SDL_PROP_WINDOW_ANDROID_WINDOW_POINTER`: the ANativeWindow associated
with the window
- `SDL_PROP_WINDOW_ANDROID_SURFACE_POINTER`: the EGLSurface associated with
the window
On iOS:
- `SDL_PROP_WINDOW_UIKIT_WINDOW_POINTER`: the `(__unsafe_unretained)`
UIWindow associated with the window
- `SDL_PROP_WINDOW_UIKIT_METAL_VIEW_TAG_NUMBER`: the NSInteger tag
associated with metal views on the window
- `SDL_PROP_WINDOW_UIKIT_OPENGL_FRAMEBUFFER_NUMBER`: the OpenGL view's
framebuffer object. It must be bound when rendering to the screen using
OpenGL.
- `SDL_PROP_WINDOW_UIKIT_OPENGL_RENDERBUFFER_NUMBER`: the OpenGL view's
renderbuffer object. It must be bound when SDL_GL_SwapWindow is called.
- `SDL_PROP_WINDOW_UIKIT_OPENGL_RESOLVE_FRAMEBUFFER_NUMBER`: the OpenGL
view's resolve framebuffer, when MSAA is used.
On KMS/DRM:
- `SDL_PROP_WINDOW_KMSDRM_DEVICE_INDEX_NUMBER`: the device index associated
with the window (e.g. the X in /dev/dri/cardX)
- `SDL_PROP_WINDOW_KMSDRM_DRM_FD_NUMBER`: the DRM FD associated with the
window
- `SDL_PROP_WINDOW_KMSDRM_GBM_DEVICE_POINTER`: the GBM device associated
with the window
On macOS:
- `SDL_PROP_WINDOW_COCOA_WINDOW_POINTER`: the `(__unsafe_unretained)`
NSWindow associated with the window
- `SDL_PROP_WINDOW_COCOA_METAL_VIEW_TAG_NUMBER`: the NSInteger tag
associated with metal views on the window
On OpenVR:
- `SDL_PROP_WINDOW_OPENVR_OVERLAY_ID_NUMBER`: the OpenVR Overlay Handle ID
for the associated overlay window.
On QNX:
- `SDL_PROP_WINDOW_QNX_WINDOW_POINTER`: the screen_window_t associated with
the window.
- `SDL_PROP_WINDOW_QNX_SURFACE_POINTER`: the EGLSurface associated with the
window
On Vivante:
- `SDL_PROP_WINDOW_VIVANTE_DISPLAY_POINTER`: the EGLNativeDisplayType
associated with the window
- `SDL_PROP_WINDOW_VIVANTE_WINDOW_POINTER`: the EGLNativeWindowType
associated with the window
- `SDL_PROP_WINDOW_VIVANTE_SURFACE_POINTER`: the EGLSurface associated with
the window
On Windows:
- `SDL_PROP_WINDOW_WIN32_HWND_POINTER`: the HWND associated with the window
- `SDL_PROP_WINDOW_WIN32_HDC_POINTER`: the HDC associated with the window
- `SDL_PROP_WINDOW_WIN32_INSTANCE_POINTER`: the HINSTANCE associated with
the window
On Wayland:
Note: The `xdg_*` window objects do not internally persist across window
show/hide calls. They will be null if the window is hidden and must be
queried each time it is shown.
- `SDL_PROP_WINDOW_WAYLAND_DISPLAY_POINTER`: the wl_display associated with
the window
- `SDL_PROP_WINDOW_WAYLAND_SURFACE_POINTER`: the wl_surface associated with
the window
- `SDL_PROP_WINDOW_WAYLAND_VIEWPORT_POINTER`: the wp_viewport associated
with the window
- `SDL_PROP_WINDOW_WAYLAND_EGL_WINDOW_POINTER`: the wl_egl_window
associated with the window
- `SDL_PROP_WINDOW_WAYLAND_XDG_SURFACE_POINTER`: the xdg_surface associated
with the window
- `SDL_PROP_WINDOW_WAYLAND_XDG_TOPLEVEL_POINTER`: the xdg_toplevel role
associated with the window
- 'SDL_PROP_WINDOW_WAYLAND_XDG_TOPLEVEL_EXPORT_HANDLE_STRING': the export
handle associated with the window
- `SDL_PROP_WINDOW_WAYLAND_XDG_POPUP_POINTER`: the xdg_popup role
associated with the window
- `SDL_PROP_WINDOW_WAYLAND_XDG_POSITIONER_POINTER`: the xdg_positioner
associated with the window, in popup mode
On X11:
- `SDL_PROP_WINDOW_X11_DISPLAY_POINTER`: the X11 Display associated with
the window
- `SDL_PROP_WINDOW_X11_SCREEN_NUMBER`: the screen number associated with
the window
- `SDL_PROP_WINDOW_X11_WINDOW_NUMBER`: the X11 Window associated with the
window
On Emscripten:
- `SDL_PROP_WINDOW_EMSCRIPTEN_CANVAS_ID_STRING`: the id the canvas element
will have
- `SDL_PROP_WINDOW_EMSCRIPTEN_KEYBOARD_ELEMENT_STRING`: the keyboard
element that associates keyboard events to this window

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22425).
