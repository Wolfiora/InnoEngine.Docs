---
title: "GraphCanvasPort"
description: "Reference for GraphCanvasPort in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.b2761bed51fcece7
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasPort`

This reference describes `GraphCanvasPort` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Graph.GraphCanvasPort>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6cc8bed050eae5ea) | Method |
| [`Equals`](#api-999a5d020d75ad3a) | Method |
| [`Equals`](#api-9c7a5bc2c298edda) | Method |
| [`GetHashCode`](#api-82fab8262320cbc0) | Method |
| [`op_Equality`](#api-9586bc3cd22483a6) | Method |
| [`op_Inequality`](#api-1388811f6615aaa7) | Method |
| [`ToString`](#api-96019f43d42689c6) | Method |
| [`direction`](#api-5770d777fae81ed4) | Property |
| [`endpoint`](#api-bc626b84099ac11c) | Property |
| [`isMissing`](#api-ec0ec0851112b72f) | Property |
| [`isOptional`](#api-b2041d9da36112b3) | Property |
| [`label`](#api-2778571755b7f5e9) | Property |
| [`labelBounds`](#api-24762f79f6024cdc) | Property |
| [`position`](#api-f5d5969795cc826b) | Property |

## Type declaration

<a id="api-b2761bed51fcece7"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasPort dd219c2d843d9a69e35bbaf701d812b6456dbb3fb376a70c325679583e4b37cf -->

```csharp
public readonly struct InnoEditor.Graph.GraphCanvasPort : System.IEquatable<InnoEditor.Graph.GraphCanvasPort>
```

Describes a neutral port's node-relative geometry and display state without retaining extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `#ctor`

<a id="api-6cc8bed050eae5ea"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.#ctor(InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphPortDirection,System.Numerics.Vector2,System.String,System.Boolean,System.Boolean,System.Nullable{System.ValueTuple{System.Numerics.Vector2,System.Numerics.Vector2}}) 09f496b41350b95c132ee16141c6b02ea442584834083d3eb4ea61f18c51f78b -->

```csharp
public InnoEditor.Graph.GraphCanvasPort.GraphCanvasPort(InnoEngine.Graphs.GraphEndpoint endpoint, InnoEngine.Graphs.GraphPortDirection direction, System.Numerics.Vector2 position, string label, bool isOptional = false, bool isMissing = false, (System.Numerics.Vector2, System.Numerics.Vector2)? labelBounds = null)
```

Creates a port presentation whose position is measured in unscaled node coordinates.

**Parameter `endpoint`:** The existing document endpoint represented by this port.

**Parameter `direction`:** The connection direction, independent of any domain-specific type system.

**Parameter `position`:** Node-relative graph coordinates of the port center.

**Parameter `label`:** The current display label, without domain objects or callbacks.

**Parameter `isOptional`:** Whether to distinguish an optional input visually.

**Parameter `isMissing`:** Whether retained document structure currently lacks its domain implementation.

**Parameter `labelBounds`:** Optional node-relative label bounds used by drawing and row hit testing; null limits hits to the socket.

**Throws `System.ArgumentException`:** An endpoint identity is empty.

**Throws `System.ArgumentNullException`:** The label is null.

**Throws `System.ArgumentOutOfRangeException`:** The position or direction is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L45).

## `Equals`

<a id="api-999a5d020d75ad3a"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.Equals(InnoEditor.Graph.GraphCanvasPort) 077e118a9c4710b6675d4fed58ec8d1877aa2020f34db0df9a0cb61e96a0bf75 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPort.Equals(InnoEditor.Graph.GraphCanvasPort other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `Equals`

<a id="api-9c7a5bc2c298edda"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.Equals(System.Object) 56bbe94f6f49bcaede48901de3e9db85562ab99736927f7e4f6c86f203bcdf8d -->

```csharp
public override bool InnoEditor.Graph.GraphCanvasPort.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `GetHashCode`

<a id="api-82fab8262320cbc0"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.GetHashCode 703d09e2238240da47bf0516a1d572b5474457851a0cca8ba8c4e8acdbbc04e0 -->

```csharp
public override int InnoEditor.Graph.GraphCanvasPort.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `op_Equality`

<a id="api-9586bc3cd22483a6"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.op_Equality(InnoEditor.Graph.GraphCanvasPort,InnoEditor.Graph.GraphCanvasPort) 44aa037025ab9ce68357c055862530ca721f0c4f0fe7e8b97dd6ee585e3b711e -->

```csharp
public static bool InnoEditor.Graph.GraphCanvasPort.operator ==(InnoEditor.Graph.GraphCanvasPort left, InnoEditor.Graph.GraphCanvasPort right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `op_Inequality`

<a id="api-1388811f6615aaa7"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.op_Inequality(InnoEditor.Graph.GraphCanvasPort,InnoEditor.Graph.GraphCanvasPort) 2d239a24373c2e87b467144fccd56d8fbdfcda552b730ac8b02257431a9eb6db -->

```csharp
public static bool InnoEditor.Graph.GraphCanvasPort.operator !=(InnoEditor.Graph.GraphCanvasPort left, InnoEditor.Graph.GraphCanvasPort right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `ToString`

<a id="api-96019f43d42689c6"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPort.ToString 76a206a567c694b1ea87e1ea25e7895a43310bdab17fcbc190308f8b62a43d43 -->

```csharp
public override string InnoEditor.Graph.GraphCanvasPort.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `direction`

<a id="api-5770d777fae81ed4"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.direction 080ca8fd6c13777f5ff0d867a29c204b29c017f40d5442d00b0c6edf7b09d4c0 -->

```csharp
public InnoEngine.Graphs.GraphPortDirection InnoEditor.Graph.GraphCanvasPort.direction { get; }
```

Gets the neutral connection direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L82).

## `endpoint`

<a id="api-bc626b84099ac11c"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.endpoint f338fe5741f70c5e2689d799227b576674fe8ae5bcf52db6cbe43e1228396eda -->

```csharp
public InnoEngine.Graphs.GraphEndpoint InnoEditor.Graph.GraphCanvasPort.endpoint { get; }
```

Gets the document endpoint; it does not identify a live engine object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L77).

## `isMissing`

<a id="api-ec0ec0851112b72f"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.isMissing 5dff85f6c42e078fc87f2ef4b643324e47851e04e951bd52fb402e6f6a2090e9 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPort.isMissing { get; }
```

Gets whether this retained endpoint currently lacks an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L102).

## `isOptional`

<a id="api-b2041d9da36112b3"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.isOptional 74a2f577ead7251c5830e2bd09c019225bc18ed733ba52b6a39cc51cffde8cef -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPort.isOptional { get; }
```

Gets whether the input is visually optional.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L97).

## `label`

<a id="api-2778571755b7f5e9"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.label 4625140df178cc129e84e925c5194399e57eb5c19f873fc2f54148eac673ad0e -->

```csharp
public string InnoEditor.Graph.GraphCanvasPort.label { get; }
```

Gets the current display label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L92).

## `labelBounds`

<a id="api-24762f79f6024cdc"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.labelBounds 64236a684f9b530cbb31b877f1e69fa850c0deca6175d18eb33cd5e6b67ec2e8 -->

```csharp
public (System.Numerics.Vector2, System.Numerics.Vector2)? InnoEditor.Graph.GraphCanvasPort.labelBounds { get; }
```

Gets optional node-relative label geometry shared by rendering and row hit testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L107).

## `position`

<a id="api-f5d5969795cc826b"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPort.position 5a89331ac41b3267eff9bf745675cdbd409786a4bc37f1fe5e2a0dbe65b0c0d0 -->

```csharp
public System.Numerics.Vector2 InnoEditor.Graph.GraphCanvasPort.position { get; }
```

Gets the node-relative center in graph coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L87).
