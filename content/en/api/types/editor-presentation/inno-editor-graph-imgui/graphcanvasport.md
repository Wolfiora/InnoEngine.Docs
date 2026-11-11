---
title: "GraphCanvasPort"
description: "Reference for GraphCanvasPort in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.0dea23aa9b23e474
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasPort`

This reference describes `GraphCanvasPort` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Graph.ImGui.GraphCanvasPort>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c5fa41718360bef8) | Method |
| [`Equals`](#api-59c44a2e938151e4) | Method |
| [`Equals`](#api-81ac0f5793621a3d) | Method |
| [`GetHashCode`](#api-db218f95f48a5024) | Method |
| [`op_Equality`](#api-b49f218d36c740bc) | Method |
| [`op_Inequality`](#api-bc1f9318a24ec85e) | Method |
| [`ToString`](#api-49a9099ff20cc07c) | Method |
| [`direction`](#api-6cf489615a937431) | Property |
| [`endpoint`](#api-e5c4912bc829e81c) | Property |
| [`isMissing`](#api-c0ee0fd5780ab8dc) | Property |
| [`isOptional`](#api-997a7e5136ca9542) | Property |
| [`label`](#api-fcf3470761367592) | Property |
| [`labelBounds`](#api-fc05c40eaf761f1f) | Property |
| [`position`](#api-d16b1baa65e2c82b) | Property |

## Type declaration

<a id="api-0dea23aa9b23e474"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasPort a396cf71dbc4169676fc4fe9771a8881800a9c0304f66a7bb9eba3c931679f01 -->

```csharp
public readonly record struct Inno.Editor.Graph.ImGui.GraphCanvasPort : System.IEquatable<Inno.Editor.Graph.ImGui.GraphCanvasPort>
```

Describes a neutral port's node-relative geometry and display state without retaining extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `#ctor`

<a id="api-c5fa41718360bef8"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.#ctor(Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphPortDirection,System.Numerics.Vector2,System.String,System.Boolean,System.Boolean,System.Nullable{System.ValueTuple{System.Numerics.Vector2,System.Numerics.Vector2}}) 8b7959b499d9a04594aaeb1e47bf51d203b10c5a417258afbb750dbb47b409f4 -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasPort.GraphCanvasPort(Inno.Core.Graphs.GraphEndpoint endpoint, Inno.Core.Graphs.GraphPortDirection direction, System.Numerics.Vector2 position, string label, bool isOptional = false, bool isMissing = false, (System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum)? labelBounds = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L45).

## `Equals`

<a id="api-59c44a2e938151e4"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.Equals(Inno.Editor.Graph.ImGui.GraphCanvasPort) 8bc655e26139079d2ae646c37f32702e569fbdf0d31388de2472916729c25ba9 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPort.Equals(Inno.Editor.Graph.ImGui.GraphCanvasPort other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `Equals`

<a id="api-81ac0f5793621a3d"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.Equals(System.Object) df747394a6aa92b4e9b291a43f007b919f07b08843fd85e6dfc260f5fc32c3a1 -->

```csharp
public override bool Inno.Editor.Graph.ImGui.GraphCanvasPort.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `GetHashCode`

<a id="api-db218f95f48a5024"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.GetHashCode ad0879f9b7128f39abaf5109173dafaa200154ce9fd6d4e2efcc7c16cfb858f0 -->

```csharp
public override int Inno.Editor.Graph.ImGui.GraphCanvasPort.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `op_Equality`

<a id="api-b49f218d36c740bc"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.op_Equality(Inno.Editor.Graph.ImGui.GraphCanvasPort,Inno.Editor.Graph.ImGui.GraphCanvasPort) 21289bb862814bbf9c602386c1e132e2c4ec95631a657b375076204650806ad0 -->

```csharp
public static bool Inno.Editor.Graph.ImGui.GraphCanvasPort.operator ==(Inno.Editor.Graph.ImGui.GraphCanvasPort left, Inno.Editor.Graph.ImGui.GraphCanvasPort right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `op_Inequality`

<a id="api-bc1f9318a24ec85e"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.op_Inequality(Inno.Editor.Graph.ImGui.GraphCanvasPort,Inno.Editor.Graph.ImGui.GraphCanvasPort) d7cce46742b17e3472a6b4517feef8fd0bef6be5c15eacca77c474b1d079042f -->

```csharp
public static bool Inno.Editor.Graph.ImGui.GraphCanvasPort.operator !=(Inno.Editor.Graph.ImGui.GraphCanvasPort left, Inno.Editor.Graph.ImGui.GraphCanvasPort right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `ToString`

<a id="api-49a9099ff20cc07c"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPort.ToString 1bca32d089a7eb85f378c4f69ce885feae70cd5e5f2f9ad388c821f121e30113 -->

```csharp
public override string Inno.Editor.Graph.ImGui.GraphCanvasPort.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L10).

## `direction`

<a id="api-6cf489615a937431"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.direction b2692d60f2be3e2a1a39605ce74ea339f8ccacd39ebcc059472674663479791b -->

```csharp
public Inno.Core.Graphs.GraphPortDirection Inno.Editor.Graph.ImGui.GraphCanvasPort.direction { get; }
```

Gets the neutral connection direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L82).

## `endpoint`

<a id="api-e5c4912bc829e81c"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.endpoint 6f485e5f3d888fffea5bdf4a331601286aa0e7daf0d18e2a6a9d0e8ad590821a -->

```csharp
public Inno.Core.Graphs.GraphEndpoint Inno.Editor.Graph.ImGui.GraphCanvasPort.endpoint { get; }
```

Gets the document endpoint; it does not identify a live engine object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L77).

## `isMissing`

<a id="api-c0ee0fd5780ab8dc"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.isMissing 03baca94fba9b67ea81f0b9846ad0e55ccc61ee7748166a756c0684eb4803cb7 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPort.isMissing { get; }
```

Gets whether this retained endpoint currently lacks an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L102).

## `isOptional`

<a id="api-997a7e5136ca9542"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.isOptional 587f32a5b4c2bc7df81ca0ca5236ea7946fe058efa5b229bb9573ba94b1913b9 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPort.isOptional { get; }
```

Gets whether the input is visually optional.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L97).

## `label`

<a id="api-fcf3470761367592"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.label 608c5129ee2534daa133b909e5a1be3ca27eb2f694b16c5316ecfff1fa1890ef -->

```csharp
public string Inno.Editor.Graph.ImGui.GraphCanvasPort.label { get; }
```

Gets the current display label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L92).

## `labelBounds`

<a id="api-fc05c40eaf761f1f"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.labelBounds 7ab5ea69354aa82a0899a94bf2f93714126f288843cc4c821cf6abb772354fd2 -->

```csharp
public (System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum)? Inno.Editor.Graph.ImGui.GraphCanvasPort.labelBounds { get; }
```

Gets optional node-relative label geometry shared by rendering and row hit testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L107).

## `position`

<a id="api-d16b1baa65e2c82b"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPort.position 239fe93f28c6c6c2159bd6795bf0f99ed832d4347c1355f8172c5d7b770d2a20 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Graph.ImGui.GraphCanvasPort.position { get; }
```

Gets the node-relative center in graph coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPort.cs#L87).
