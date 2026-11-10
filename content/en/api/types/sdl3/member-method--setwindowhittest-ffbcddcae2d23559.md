---
title: "SDLContext.RawApi — Method: SetWindowHitTest"
description: "Exact Method: SetWindowHitTest contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ffbcddcae2d23559
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowHitTest

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowHitTest`

<a id="api-dcafa001e2d4e37e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowHitTest(Inno.Native.Sdl3.SDLWindow*,,System.Void*) 8f65bfad02750dc2db071b8a668a37bc9665dc3da65af047952e1780ee056017 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowHitTest(Inno.Native.Sdl3.SDLWindow* window, delegate* unmanaged[Cdecl]<Inno.Native.Sdl3.SDLWindow*, Inno.Native.Sdl3.SDLPoint*, void*, Inno.Native.Sdl3.SDLHitTestResult> callback, void* callback_data)
```

Provide a callback that decides if a window region has special properties.
Normally windows are dragged and resized by decorations provided by the
system window manager (a title bar, borders, etc), but for some apps, it
makes sense to drag them from somewhere else inside the window itself; for
example, one might have a borderless window that wants to be draggable from
any part, or simulate its own title bar, etc.
This function lets the app provide a callback that designates pieces of a
given window as special. This callback is run during event processing if we
need to tell the OS to treat a region of the window specially; the use of
this callback is known as "hit testing."
Mouse input may not be delivered to your application if it is within a
special area; the OS will often apply that input to moving the window or
resizing the window and not deliver it to the application.
Specifying NULL for a callback disables hit-testing. Hit-testing is
disabled by default.
Platforms that don't support this functionality will return false
unconditionally, even if you're attempting to disable hit-testing.
Your callback may fire at any time, and its firing does not indicate any
specific behavior (for example, on Windows, this certainly might fire when
the OS is deciding whether to drag your window, but it fires for lots of
other reasons, too, some unrelated to anything you probably care about _and
when the mouse isn't actually at the location it is testing_). Since this
can fire at any time, you should try to keep your callback efficient,
devoid of allocations, etc.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to set hit-testing on.

**Parameter `callback`:** the function to call when doing a hit-test.

**Parameter `callback_data`:** an app-defined void pointer passed to **callback**.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37051).
