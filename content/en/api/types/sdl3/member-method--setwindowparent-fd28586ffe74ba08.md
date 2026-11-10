---
title: "SDLContext.RawApi — Method: SetWindowParent"
description: "Exact Method: SetWindowParent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fd28586ffe74ba08
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowParent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowParent`

<a id="api-73b1e8b17a3eca0b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowParent(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLWindow*) 3e0959ee62851bf54b824151786b9b85bfef1e44304277269ff09db5d0ea27aa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowParent(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLWindow* parent)
```

Set the window as a child of a parent window.
If the window is already the child of an existing window, it will be
reparented to the new owner. Setting the parent window to NULL unparents
the window and removes child window status.
If a parent window is hidden or destroyed, the operation will be
recursively applied to child windows. Child windows hidden with the parent
that did not have their hidden status explicitly set will be restored when
the parent is shown.
Attempting to set the parent of a window that is currently in the modal
state will fail. Use SDL_SetWindowModal() to cancel the modal status before
attempting to change the parent.
Popup windows cannot change parents and attempts to do so will fail.
Setting a parent window that is currently the sibling or descendent of the
child window results in undefined behavior.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowModal

**Parameter `window`:** the window that should become the child of a parent.

**Parameter `parent`:** the new parent window for the child window.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51471).
