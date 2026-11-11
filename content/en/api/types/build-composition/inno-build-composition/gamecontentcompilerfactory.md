---
title: "GameContentCompilerFactory"
description: "Reference for GameContentCompilerFactory in Inno.Build.Composition."
uid: api.inno.build.composition.ad995aebfba1a445
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `GameContentCompilerFactory`

This reference describes `GameContentCompilerFactory` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08fd47241d7f6484) | Method |
| [`BeginInvoke`](#api-fdcd84a40fa3fac0) | Method |
| [`EndInvoke`](#api-1962fb798ade77cd) | Method |
| [`Invoke`](#api-5f93f2e3efb87431) | Method |

## Type declaration

<a id="api-ad995aebfba1a445"></a>
<!-- api: T:Inno.Build.Composition.GameContentCompilerFactory 7dcc571a8d52c3e67ed7bed330d93cd76426137118368c952b84d3dc79cf313a -->

```csharp
public delegate Inno.Build.IGameContentCompiler Inno.Build.Composition.GameContentCompilerFactory(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types)
```

Creates a content compiler borrowing the active authoring services for one pipeline.

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

**Returns:** A non-null scoped compiler that never disposes or globally retains these services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameContentCompilerFactory.cs#L22).

## `#ctor`

<a id="api-08fd47241d7f6484"></a>
<!-- api: M:Inno.Build.Composition.GameContentCompilerFactory.#ctor(System.Object,System.IntPtr) 121e6c134b64240521699b8ef3679ada6737f424aadd3ad9cc8c2cf36830f73e -->

```csharp
public Inno.Build.Composition.GameContentCompilerFactory.GameContentCompilerFactory(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameContentCompilerFactory.cs#L22).

## `BeginInvoke`

<a id="api-fdcd84a40fa3fac0"></a>
<!-- api: M:Inno.Build.Composition.GameContentCompilerFactory.BeginInvoke(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,System.AsyncCallback,System.Object) 8de295d57e948c755d9e8802d450c7d015cdb387c358264e25336d07afee6b97 -->

```csharp
public virtual System.IAsyncResult Inno.Build.Composition.GameContentCompilerFactory.BeginInvoke(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameContentCompilerFactory.cs#L22).

## `EndInvoke`

<a id="api-1962fb798ade77cd"></a>
<!-- api: M:Inno.Build.Composition.GameContentCompilerFactory.EndInvoke(System.IAsyncResult) 5e75c63dfd27a76ed9c052d991ca515ef3bc739ae96836df57d61ce96a0a6885 -->

```csharp
public virtual Inno.Build.IGameContentCompiler Inno.Build.Composition.GameContentCompilerFactory.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameContentCompilerFactory.cs#L22).

## `Invoke`

<a id="api-5f93f2e3efb87431"></a>
<!-- api: M:Inno.Build.Composition.GameContentCompilerFactory.Invoke(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog) 9c53151756ad5704e6953ff6aca13216e60f04e020cfda82fee55983e158195a -->

```csharp
public virtual Inno.Build.IGameContentCompiler Inno.Build.Composition.GameContentCompilerFactory.Invoke(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types)
```

Creates a content compiler borrowing the active authoring services for one pipeline.

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

**Returns:** A non-null scoped compiler that never disposes or globally retains these services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/GameContentCompilerFactory.cs#L22).
