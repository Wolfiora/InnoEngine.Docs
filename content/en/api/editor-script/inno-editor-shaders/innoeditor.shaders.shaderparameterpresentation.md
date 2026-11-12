---
title: "ShaderParameterPresentation"
description: "Reference for ShaderParameterPresentation in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.editor-script.ff8c376f31b6acee
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders
  - manual.scripting.use-script-api
---
# `ShaderParameterPresentation`

This reference describes `ShaderParameterPresentation` in `Inno.Editor.Shaders`. Read the [shared contract](../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0520c507df30a393) | Method |
| [`Read`](#api-c6e2a6284d2f405a) | Method |
| [`Write`](#api-17fd0ca193ae2fde) | Method |
| [`description`](#api-2f90b76fa62077cb) | Property |
| [`group`](#api-adecda8d1a498dfc) | Property |
| [`hasRange`](#api-5ded68c586357805) | Property |
| [`maximum`](#api-024a2bb9bad9e2d7) | Property |
| [`minimum`](#api-6774e233d4df5b33) | Property |
| [`visible`](#api-7a8c370942668186) | Property |

## Type declaration

<a id="api-ff8c376f31b6acee"></a>
<!-- api: T:InnoEditor.Shaders.ShaderParameterPresentation 88f29eb3503f92c99870728c6a8fc6b543166248eb11e254bd478891ecd54a16 -->

```csharp
public sealed class InnoEditor.Shaders.ShaderParameterPresentation : InnoEngine.Serialization.ISerializable
```

Stores Editor-only parameter presentation by stable binding identity in the Shader's authoring graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L12).

## `#ctor`

<a id="api-0520c507df30a393"></a>
<!-- api: M:InnoEditor.Shaders.ShaderParameterPresentation.#ctor 83f2ae906ae2c84e53d00529019d8c74fabec3dfa9c757c7f29398f6f7a98f92 -->

```csharp
public InnoEditor.Shaders.ShaderParameterPresentation.ShaderParameterPresentation()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L12).

## `Read`

<a id="api-c6e2a6284d2f405a"></a>
<!-- api: M:InnoEditor.Shaders.ShaderParameterPresentation.Read(InnoEngine.Graphs.GraphDocument,InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) b131b6f912b0cb956c2908b399b9d1bca36d7b8c8db30f21eb233a125382113e -->

```csharp
public static InnoEditor.Shaders.ShaderParameterPresentation InnoEditor.Shaders.ShaderParameterPresentation.Read(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Rendering.ShaderPropertyId propertyId, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads detached presentation for one binding, defaulting only when no presentation was authored.

**Parameter `graph`:** Authoring graph, not a runtime Shader program.

**Parameter `propertyId`:** Stable parameter identity shared by all its nodes.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

**Returns:** The authored presentation, or ordinary visible, unbounded defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L59).

## `Write`

<a id="api-17fd0ca193ae2fde"></a>
<!-- api: M:InnoEditor.Shaders.ShaderParameterPresentation.Write(InnoEngine.Graphs.GraphDocument,InnoEngine.Rendering.ShaderPropertyId,InnoEditor.Shaders.ShaderParameterPresentation,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 047f2e87bfafbfefd332d852a2b1a845984ff5adf930ac08f3abd6c107b04313 -->

```csharp
public static void InnoEditor.Shaders.ShaderParameterPresentation.Write(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Rendering.ShaderPropertyId propertyId, InnoEditor.Shaders.ShaderParameterPresentation presentation, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Writes presentation to a detached graph without changing any default, Material, or compiled program.

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyId`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

**Throws `System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L92).

## `description`

<a id="api-2f90b76fa62077cb"></a>
<!-- api: P:InnoEditor.Shaders.ShaderParameterPresentation.description d25444fa3101f87ac2712a142e6b1ce753236b7819d5228b645ce1d61545fc48 -->

```csharp
public string InnoEditor.Shaders.ShaderParameterPresentation.description { get; set; }
```

Gets or sets the hover description without adding a permanent paragraph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L23).

## `group`

<a id="api-adecda8d1a498dfc"></a>
<!-- api: P:InnoEditor.Shaders.ShaderParameterPresentation.group d86fe3fba3c42f3cb1be0701c59b968543bd6f60ee3019ca3f4a2d44afbf64d2 -->

```csharp
public string InnoEditor.Shaders.ShaderParameterPresentation.group { get; set; }
```

Gets or sets the Material Inspector section; empty uses the standard Parameters section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L19).

## `hasRange`

<a id="api-5ded68c586357805"></a>
<!-- api: P:InnoEditor.Shaders.ShaderParameterPresentation.hasRange 8bca0680f00949e56fc534347007fb5fef1ceaedbf1751e0dc14d94da8736c0c -->

```csharp
public bool InnoEditor.Shaders.ShaderParameterPresentation.hasRange { get; set; }
```

Gets or sets whether a scalar Float control uses the declared editing bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L31).

## `maximum`

<a id="api-024a2bb9bad9e2d7"></a>
<!-- api: P:InnoEditor.Shaders.ShaderParameterPresentation.maximum 098d2832b82de13890ca3036dc4794a19c61b0de4bfe0e2e80d166bf4262ea6d -->

```csharp
public double InnoEditor.Shaders.ShaderParameterPresentation.maximum { get; set; }
```

Gets or sets the inclusive editing maximum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L39).

## `minimum`

<a id="api-6774e233d4df5b33"></a>
<!-- api: P:InnoEditor.Shaders.ShaderParameterPresentation.minimum 7ae887c8ff2aca5643bc50381955ae19f4edcdd974dfe86973342c540b56519e -->

```csharp
public double InnoEditor.Shaders.ShaderParameterPresentation.minimum { get; set; }
```

Gets or sets the inclusive editing minimum; existing values are not changed by presentation metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L35).

## `visible`

<a id="api-7a8c370942668186"></a>
<!-- api: P:InnoEditor.Shaders.ShaderParameterPresentation.visible 847cc5f72dc2324a24ba54e564b4815727eb1ebdcaf0d44e32f60507ff3c7fdb -->

```csharp
public bool InnoEditor.Shaders.ShaderParameterPresentation.visible { get; set; }
```

Gets or sets whether this Material-owned parameter appears in ordinary Material Inspectors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Shaders/Materials/ShaderParameterPresentation.cs#L27).
