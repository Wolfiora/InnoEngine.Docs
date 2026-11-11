---
title: "InspectionDrawerFactory"
description: "Reference for InspectionDrawerFactory in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.c40f722122401247
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `InspectionDrawerFactory`

This reference describes `InspectionDrawerFactory` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-03ea580155776a5b) | Method |
| [`BeginInvoke`](#api-84a683a6b06db517) | Method |
| [`EndInvoke`](#api-08597c8b25e8d025) | Method |
| [`Invoke`](#api-19b43da9dfd163ca) | Method |

## Type declaration

<a id="api-c40f722122401247"></a>
<!-- api: T:Inno.Editor.Inspection.InspectionDrawerFactory c9bee7861e5d06f2273f385bd98ec7091545b07f7eca3388804baaf0394b9823 -->

```csharp
public delegate Inno.Editor.Inspection.IInspectionDrawer Inno.Editor.Inspection.InspectionDrawerFactory(System.Type drawerType)
```

Creates one discovered inspection drawer through the owning editor composition root.

**Parameter `drawerType`:** The concrete drawer type selected from the active type catalog.

**Returns:** A new drawer instance whose runtime type is `drawerType`.

**Throws `System.ArgumentNullException`:** Implementations may throw when `drawerType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerFactory.cs#L17).

## `#ctor`

<a id="api-03ea580155776a5b"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerFactory.#ctor(System.Object,System.IntPtr) 4884a5d1e7243975856b1cc39276b83540223965f455d94d6898dd2e183c99b9 -->

```csharp
public Inno.Editor.Inspection.InspectionDrawerFactory.InspectionDrawerFactory(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerFactory.cs#L17).

## `BeginInvoke`

<a id="api-84a683a6b06db517"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerFactory.BeginInvoke(System.Type,System.AsyncCallback,System.Object) 2caf336145e34748da53034706780d9a0d9f0b01491eeb4bd89ab045518dae25 -->

```csharp
public virtual System.IAsyncResult Inno.Editor.Inspection.InspectionDrawerFactory.BeginInvoke(System.Type drawerType, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerFactory.cs#L17).

## `EndInvoke`

<a id="api-08597c8b25e8d025"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerFactory.EndInvoke(System.IAsyncResult) 1d692387b1dd8a9ced7855e4a60a527b3571aa7da5407bd7408ecfefbc632d55 -->

```csharp
public virtual Inno.Editor.Inspection.IInspectionDrawer Inno.Editor.Inspection.InspectionDrawerFactory.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerFactory.cs#L17).

## `Invoke`

<a id="api-19b43da9dfd163ca"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawerFactory.Invoke(System.Type) d02237d6d8ca6216dced21511443dbbe500d553768ae30db59520b3af3f773bd -->

```csharp
public virtual Inno.Editor.Inspection.IInspectionDrawer Inno.Editor.Inspection.InspectionDrawerFactory.Invoke(System.Type drawerType)
```

Creates one discovered inspection drawer through the owning editor composition root.

**Parameter `drawerType`:** The concrete drawer type selected from the active type catalog.

**Returns:** A new drawer instance whose runtime type is `drawerType`.

**Throws `System.ArgumentNullException`:** Implementations may throw when `drawerType` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawerFactory.cs#L17).
