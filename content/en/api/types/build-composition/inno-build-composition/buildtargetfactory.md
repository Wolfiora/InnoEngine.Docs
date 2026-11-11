---
title: "BuildTargetFactory"
description: "Reference for BuildTargetFactory in Inno.Build.Composition."
uid: api.inno.build.composition.fc13ccd2c8248070
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `BuildTargetFactory`

This reference describes `BuildTargetFactory` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b0024b8a5cdcd14c) | Method |
| [`BeginInvoke`](#api-aaf1f87d73f7dfaf) | Method |
| [`EndInvoke`](#api-c4daafebeb3c9a9b) | Method |
| [`Invoke`](#api-ed951b174f811459) | Method |

## Type declaration

<a id="api-fc13ccd2c8248070"></a>
<!-- api: T:Inno.Build.Composition.BuildTargetFactory cc01359deafd042bb96500e87de33aae3da766ffd914e53efd946c6bb52dbde1 -->

```csharp
public delegate Inno.Build.IGameBuildTarget Inno.Build.Composition.BuildTargetFactory()
```

Creates a platform packager without borrowing authoring or content compiler services.

**Returns:** A non-null packaging implementation retained by the pipeline without a separate lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildTargetFactory.cs#L9).

## `#ctor`

<a id="api-b0024b8a5cdcd14c"></a>
<!-- api: M:Inno.Build.Composition.BuildTargetFactory.#ctor(System.Object,System.IntPtr) 54ebbe9166e5dafe725732d98882308ed1dcda0022b5c37cda3df79b8c4aed69 -->

```csharp
public Inno.Build.Composition.BuildTargetFactory.BuildTargetFactory(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildTargetFactory.cs#L9).

## `BeginInvoke`

<a id="api-aaf1f87d73f7dfaf"></a>
<!-- api: M:Inno.Build.Composition.BuildTargetFactory.BeginInvoke(System.AsyncCallback,System.Object) ebb8b93157f5661093281e74397984c6e501d7edf83d451ced40f016525f5e63 -->

```csharp
public virtual System.IAsyncResult Inno.Build.Composition.BuildTargetFactory.BeginInvoke(System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildTargetFactory.cs#L9).

## `EndInvoke`

<a id="api-c4daafebeb3c9a9b"></a>
<!-- api: M:Inno.Build.Composition.BuildTargetFactory.EndInvoke(System.IAsyncResult) e01098ef278a090a5b2cd8ed407ea7fbfe9c50e2fb0452dd99a7662b27c33933 -->

```csharp
public virtual Inno.Build.IGameBuildTarget Inno.Build.Composition.BuildTargetFactory.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildTargetFactory.cs#L9).

## `Invoke`

<a id="api-ed951b174f811459"></a>
<!-- api: M:Inno.Build.Composition.BuildTargetFactory.Invoke c35b05255cf2b50d0b413ba4e2f4d8b90f424766de3b1d26cf198a15779c9117 -->

```csharp
public virtual Inno.Build.IGameBuildTarget Inno.Build.Composition.BuildTargetFactory.Invoke()
```

Creates a platform packager without borrowing authoring or content compiler services.

**Returns:** A non-null packaging implementation retained by the pipeline without a separate lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildTargetFactory.cs#L9).
