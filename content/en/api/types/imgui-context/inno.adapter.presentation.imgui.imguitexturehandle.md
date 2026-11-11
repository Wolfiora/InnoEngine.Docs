---
title: "Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle"
description: "Reference for Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.1238761f5754db87
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle`

This reference describes `Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f549b5df6e036775) | Method |
| [`Equals`](#api-399bccbec047835a) | Method |
| [`Equals`](#api-ea510de83c99ef80) | Method |
| [`GetHashCode`](#api-28d53eda64fb9407) | Method |
| [`op_Equality`](#api-17f70689e5eac4b5) | Method |
| [`op_Inequality`](#api-c329b3979315d734) | Method |
| [`ToString`](#api-eb437cf7a4ba7988) | Method |
| [`isValid`](#api-0c18d6053b5d6b9b) | Property |
| [`value`](#api-9edefbd98e821ea1) | Property |

## Type declaration

<a id="api-1238761f5754db87"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle a399ccb0a7c6abe63653599393a0a9ee2c6a8ca901fe3734143c2709782a98c7 -->

```csharp
public readonly record struct Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle : System.IEquatable<Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle>
```

Identifies a backend-owned texture through an opaque ImGui token instead of a native graphics handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `#ctor`

<a id="api-f549b5df6e036775"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.#ctor(System.UInt64) 7f5ebad0a61ba70945bdc88c877bf8464a72e9cd539bd738135652b993b7e848 -->

```csharp
public Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.ImGuiTextureHandle(ulong value)
```

Creates an opaque texture token allocated by an ImGui presentation backend.

**Parameter `value`:** Non-zero backend token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L19).

## `Equals`

<a id="api-399bccbec047835a"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.Equals(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle) e6290a09f4e3dd553f74764817ada9178c956338792bbd196b5903a2065a7f01 -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.Equals(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `Equals`

<a id="api-ea510de83c99ef80"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.Equals(System.Object) 0d2e89c2991e95b4e94de3a95f670bb47d3aac7c278ffecca0b12ba8386609d1 -->

```csharp
public override bool Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `GetHashCode`

<a id="api-28d53eda64fb9407"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.GetHashCode 6dd5d2226a5107f88ffddc0e94ac95a0b1a3f4b71df74dee0b8ceebf3bce84da -->

```csharp
public override int Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `op_Equality`

<a id="api-17f70689e5eac4b5"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.op_Equality(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle,Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle) fdf1ae759ff8faa8f7166a3c2e4f6eafb5e581e3e758e13dd9f41ced4b4c9978 -->

```csharp
public static bool Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.operator ==(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle left, Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `op_Inequality`

<a id="api-c329b3979315d734"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.op_Inequality(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle,Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle) 865058cbaeba949416f5d72caefdea6b11928db34f7d22b07151f6c665937025 -->

```csharp
public static bool Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.operator !=(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle left, Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `ToString`

<a id="api-eb437cf7a4ba7988"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.ToString edb708f8c6d7ad3f746cf051aee813fc76b58d03054e1dfc9986e4eebcd4a80f -->

```csharp
public override string Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L11).

## `isValid`

<a id="api-0c18d6053b5d6b9b"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.isValid b4d23f5ca3b9aa703a435f697ae75c09cccc6278d5bac5bc28e71f0363abd966 -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.isValid { get; }
```

Gets whether this token identifies a registered texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L37).

## `value`

<a id="api-9edefbd98e821ea1"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.value 17bd7170498c41b297b3ef2be5e48aa9798ca90dee929cff101c88e24acfb2f0 -->

```csharp
public ulong Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle.value { get; }
```

Gets the opaque token consumed only by the active ImGui backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L32).
