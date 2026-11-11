---
title: "IPresentationContext"
description: "Reference for IPresentationContext in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.929c87336b7b3e6c
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `IPresentationContext`

This reference describes `IPresentationContext` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.Rendering.IRenderFrameGraphContributor`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`DrawImage`](#api-95c1e356f4be8d97) | Method |
| [`LoadLayout`](#api-d9ea213c2bfd0adc) | Method |
| [`RegisterTexture`](#api-0536dd4854ec7a43) | Method |
| [`RenderFrame`](#api-29075e9e2effb367) | Method |
| [`SetLayoutFile`](#api-50967e31ee7ec4cd) | Method |
| [`TryCaptureLayout`](#api-567cefa5b2db04b1) | Method |
| [`TryGetWindowId`](#api-7e96655fbd0d86de) | Method |
| [`UnregisterTexture`](#api-4a1b75d0840f9e2c) | Method |

## Type declaration

<a id="api-929c87336b7b3e6c"></a>
<!-- api: T:Inno.Adapter.Presentation.IPresentationContext c02062b9be1a8e513c7d1a28e3f194f13ceb151bf718091e04ad4ffd4e9a9937 -->

```csharp
public interface Inno.Adapter.Presentation.IPresentationContext : Inno.Rendering.IRenderFrameGraphContributor, System.IDisposable
```

Defines the backend-neutral lifecycle used by a graphical composition host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L10).

## `DrawImage`

<a id="api-95c1e356f4be8d97"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.DrawImage(Inno.Adapter.Presentation.PresentationTextureHandle,System.Numerics.Vector2) f29eadfc05c39366f95abb71a588d23241753e727249a7725a1b6a69fd25a252 -->

```csharp
void Inno.Adapter.Presentation.IPresentationContext.DrawImage(Inno.Adapter.Presentation.PresentationTextureHandle texture, System.Numerics.Vector2 size)
```

Draws a registered texture in the active presentation surface.

**Parameter `texture`:** Opaque presentation texture token.

**Parameter `size`:** Destination size in logical presentation units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L114).

## `LoadLayout`

<a id="api-d9ea213c2bfd0adc"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.LoadLayout(System.String) 61105756d748a01d3dcc7e87cb6444e8005665604071524e8a12f94f31abf034 -->

```csharp
void Inno.Adapter.Presentation.IPresentationContext.LoadLayout(string? settings)
```

Loads complete layout text captured by the host.

**Parameter `settings`:** Layout text, or an empty value when no layout exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L43).

## `RegisterTexture`

<a id="api-0536dd4854ec7a43"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.RegisterTexture(Inno.Rendering.PersistentTextureHandle) b1705ef7dce9bee8f0ad128456172035e4f6f73472bd57d4e846c5d443a77f9d -->

```csharp
Inno.Adapter.Presentation.PresentationTextureHandle Inno.Adapter.Presentation.IPresentationContext.RegisterTexture(Inno.Rendering.PersistentTextureHandle texture)
```

Registers a persistent render texture for presentation drawing.

**Parameter `texture`:** Texture owned by the active rendering-device generation.

**Returns:** An opaque presentation token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L92).

## `RenderFrame`

<a id="api-29075e9e2effb367"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.RenderFrame(System.Action,System.Action) da10b0baa577bdd304514f883125991fa9fac5493619717cd3d03a1da53df21b -->

```csharp
void Inno.Adapter.Presentation.IPresentationContext.RenderFrame(System.Action drawFrame, System.Action? prepareFrame = null)
```

Builds one presentation frame by invoking the host draw callback.

**Parameter `drawFrame`:** Callback that emits presentation commands for the current frame.

**Parameter `prepareFrame`:** Optional synchronous preparation after the owned context and display metrics are selected,
before frame creation. Failure prevents drawing and no partial frame is published.

**Throws `System.ArgumentNullException`:** The draw callback is null.

**Throws `System.InvalidOperationException`:** Another frame operation is active on this context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L78).

## `SetLayoutFile`

<a id="api-50967e31ee7ec4cd"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.SetLayoutFile(System.String) 55629daab68df078349c37a23c6358355f1dc29935f0b16bc556170688cbe463 -->

```csharp
void Inno.Adapter.Presentation.IPresentationContext.SetLayoutFile(string? filePath)
```

Disables or redirects backend-owned layout-file persistence.

**Parameter `filePath`:** Layout path, or `null` when the host persists layout text itself.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L35).

## `TryCaptureLayout`

<a id="api-567cefa5b2db04b1"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.TryCaptureLayout(System.String@,System.Boolean) a3e53722867d112ea6016d37b3f446500d02aacee1eea5f1362580272e87ab52 -->

```csharp
bool Inno.Adapter.Presentation.IPresentationContext.TryCaptureLayout(out string settings, bool force = false)
```

Captures complete layout text when persistence is required.

**Parameter `settings`:** Complete layout text when capture succeeds.

**Parameter `force`:** Whether to capture even when the backend did not mark the layout dirty.

**Returns:** `true` when layout text was captured.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L57).

## `TryGetWindowId`

<a id="api-7e96655fbd0d86de"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.TryGetWindowId(System.UInt32,System.UInt32@) 0cfbcfee0f20fe7f702c91f95b848d3f2c79e69bddcc728d270653586bf5232f -->

```csharp
bool Inno.Adapter.Presentation.IPresentationContext.TryGetWindowId(uint viewportId, out uint windowId)
```

Resolves the platform window that owns a presentation viewport.

**Parameter `viewportId`:** The presentation viewport identity.

**Parameter `windowId`:** The owning platform window identity when available.

**Returns:** `true` when the viewport has a live platform window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L24).

## `UnregisterTexture`

<a id="api-4a1b75d0840f9e2c"></a>
<!-- api: M:Inno.Adapter.Presentation.IPresentationContext.UnregisterTexture(Inno.Adapter.Presentation.PresentationTextureHandle) a54698fe16def23b163400cbb62c2b39886d374f5792ae5fee97a6673de8bd1f -->

```csharp
bool Inno.Adapter.Presentation.IPresentationContext.UnregisterTexture(Inno.Adapter.Presentation.PresentationTextureHandle texture)
```

Releases a presentation token without taking ownership of the source texture.

**Parameter `texture`:** Previously allocated presentation token.

**Returns:** `true` when the token was registered and released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/IPresentationContext.cs#L103).
