---
title: "Inno.Adapter.Presentation.ImGui.PlatformImGuiContext"
description: "Reference for Inno.Adapter.Presentation.ImGui.PlatformImGuiContext in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.e04833cfcd7e830d
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.PlatformImGuiContext`

This reference describes `Inno.Adapter.Presentation.ImGui.PlatformImGuiContext` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-3828c87aeed8a438) | Method |
| [`DrawImage`](#api-fbe3ab469126a8e3) | Method |
| [`LoadIniSettings`](#api-e55d3c393b7d43e0) | Method |
| [`RegisterFontStyle`](#api-152df2c66dd0dc7c) | Method |
| [`RenderFrame`](#api-67fb9dba2b8e149d) | Method |
| [`SetIniFile`](#api-8f61f11617ce061a) | Method |
| [`TryCaptureIniSettings`](#api-bb1b4b1c56059515) | Method |
| [`TryGetWindowId`](#api-1124a2f25ba43703) | Method |

## Type declaration

<a id="api-e04833cfcd7e830d"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext fc23723cc2c6def17df324fa4e6c76c6aac4da7b3c95ecb19976b2d002459dad -->

```csharp
public sealed class Inno.Adapter.Presentation.ImGui.PlatformImGuiContext : System.IDisposable
```

Manages Dear ImGui frame lifecycle and rendering integration for a platform window.

Routes clipboard operations through the SDL owner of this ImGui context.

Provides operation-scoped platform im gui context services and state without transferring their ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L9).

## `Dispose`

<a id="api-3828c87aeed8a438"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.Dispose d4c038d433399287c10d9507df8e4136e8acce284d19fe5db38c6f0d249d1a48 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.Dispose()
```

Retires the context and its owned resources after the current frame operation has completed.

**Constraints:** Successful retirement removes this context's application registration and releases its borrowed font data.
Pending or failed retirement preserves both registration and ownership for a subsequent retry.

**Throws `System.InvalidOperationException`:** A frame operation still owns the context; the caller must retry after that operation completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L148).

## `DrawImage`

<a id="api-fbe3ab469126a8e3"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.DrawImage(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle,System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2) 9d915920ad1a61bf6bf51ee6c8535a9b77f5e44347a5d5a60313a3a93010a8e2 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.DrawImage(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle texture, System.Numerics.Vector2 size, System.Numerics.Vector2 uv0 = default(System.Numerics.Vector2), System.Numerics.Vector2 uv1 = default(System.Numerics.Vector2))
```

Renders the image presentation for the current editor frame.

**Parameter `texture`:** The texture consumed by draw image; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `size`:** The size consumed by draw image; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `uv0`:** The uv0 consumed by draw image; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `uv1`:** The uv1 consumed by draw image; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L135).

## `LoadIniSettings`

<a id="api-e55d3c393b7d43e0"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.LoadIniSettings(System.String) 761284eff1562388f1b0bf52b558c671ff19ec2c5c06323b145616188f3dc5cc -->

```csharp
public void Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.LoadIniSettings(string? settings)
```

Loads the current editor layout text into Dear ImGui without retaining the source string.

**Parameter `settings`:** The validated configuration that controls this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L72).

## `RegisterFontStyle`

<a id="api-152df2c66dd0dc7c"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.RegisterFontStyle(Inno.Adapter.Presentation.ImGui.ImGuiFontStyle,System.String,System.Single) fc3ce6570fa14c455c96d854858d04e3b3eaef84c64b0f2861dc47e8d1f01a4f -->

```csharp
public void Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.RegisterFontStyle(Inno.Adapter.Presentation.ImGui.ImGuiFontStyle style, string filePath, float fontSizePixels = 16)
```

Registers or replaces a context-owned text face before the first frame, merging only the bundled icons.

**Parameter `style`:** The composable style represented by the supplied font.

**Parameter `filePath`:** Path to a caller-provided TrueType or OpenType font containing the required language glyphs.

**Parameter `fontSizePixels`:** Positive, finite, unscaled font size in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L46).

## `RenderFrame`

<a id="api-67fb9dba2b8e149d"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.RenderFrame(System.Action,System.Action) e3b8c8e8a70f77aeedef350832be225d517f9a9d85fafe01453467d9fcfea1ea -->

```csharp
public nint Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.RenderFrame(System.Action drawFrame, System.Action? prepareFrame = null)
```

Records frame rendering for the current frame.

**Parameter `drawFrame`:** The callback invoked by render frame within the operation's owned lifetime.

**Parameter `prepareFrame`:** Optional callback invoked with the owned context before native frame creation.

**Returns:** Borrowed native draw data for the completed frame, valid until the next frame or retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L112).

## `SetIniFile`

<a id="api-8f61f11617ce061a"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.SetIniFile(System.String) 8d138552aa15758cb2eb961e2bbc723a962045d79d375d118493fcd146cde0ac -->

```csharp
public void Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.SetIniFile(string? filePath)
```

Updates the ini file state and applies the resulting invariants.

**Parameter `filePath`:** The file path text validated by the set ini file operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L61).

## `TryCaptureIniSettings`

<a id="api-bb1b4b1c56059515"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.TryCaptureIniSettings(System.String@,System.Boolean) 3a84c12c060eace20a633aa429db1e74fcca7227c91512572e3314d2208b25f6 -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.TryCaptureIniSettings(out string settings, bool force = false)
```

Attempts to capture ini settings without changing state when the operation cannot complete.

**Parameter `settings`:** The validated configuration that controls this operation.

**Parameter `force`:** Whether force behavior is enabled while try capture ini settings executes.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L86).

## `TryGetWindowId`

<a id="api-1124a2f25ba43703"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.TryGetWindowId(System.UInt32,System.UInt32@) fbd79083fffada7ca2cf071451090d2c14c5816539f29f0d547dbc38b638dec7 -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.TryGetWindowId(uint viewportId, out uint windowId)
```

Resolves the SDL window currently owned by an ImGui viewport.

**Parameter `viewportId`:** The ImGui viewport identity.

**Parameter `windowId`:** The SDL window identity when available.

**Returns:** `true` when the viewport has a live SDL window.

**Throws `System.ObjectDisposedException`:** Thrown after the presentation context has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/PlatformImGuiContext.Api.cs#L26).
