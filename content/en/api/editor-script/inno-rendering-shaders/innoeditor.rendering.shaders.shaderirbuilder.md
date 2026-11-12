---
title: "ShaderIrBuilder"
description: "Reference for ShaderIrBuilder in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.6b5fa6b3415167f3
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrBuilder`

This reference describes `ShaderIrBuilder` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-961b817ae93015fb) | Method |
| [`AtomicAddStorage`](#api-1bc775dd2cd37ad0) | Method |
| [`Binary`](#api-c16b7878cd140e6e) | Method |
| [`Branch`](#api-8893ecf43a5f18d5) | Method |
| [`Build`](#api-1face8960cf1ee6e) | Method |
| [`Call`](#api-32c7da59efc1c4f2) | Method |
| [`Constant`](#api-dd8014919647038f) | Method |
| [`Constant`](#api-428d6dac75402530) | Method |
| [`Constant`](#api-60215f98c2498644) | Method |
| [`Constant`](#api-4ea94f41005b930b) | Method |
| [`Construct`](#api-c4e6588d0bfb8dee) | Method |
| [`Discard`](#api-94b8316d33d91a5a) | Method |
| [`Extract`](#api-cca0d44573105828) | Method |
| [`Input`](#api-529e0798ceefa667) | Method |
| [`LoadStorage`](#api-7efa69fd1ce3970b) | Method |
| [`Loop`](#api-2af0fd7bf98a0f9b) | Method |
| [`Sample`](#api-3db3af6183a2730b) | Method |
| [`SampleLevel`](#api-67ab12a52f900fd5) | Method |
| [`Select`](#api-04f87fdea624a119) | Method |
| [`StoreStorage`](#api-b4a6da173436fdac) | Method |

## Type declaration

<a id="api-6b5fa6b3415167f3"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrBuilder 3874d91e45178566ec56921aec01b00ea9e909d0a023d746b342eec79a5b1c2b -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrBuilder
```

Builds typed shader IR instructions for graph compilation.

Builds typed instructions and structured regions. No API accepts an arbitrary backend expression or complete stage source.
This builder is transient and belongs to one lowering operation, never to a persisted document or runtime frame.

Builds typed shader IR instructions for graph compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.ControlFlow.cs#L11).

## `#ctor`

<a id="api-961b817ae93015fb"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.#ctor 627cd5aba3f066d8527acdf957c716b6a750e1779026635bcaf4906f506d6233 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrBuilder.ShaderIrBuilder()
```

Creates an independent typed region builder and value identity scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L26).

## `AtomicAddStorage`

<a id="api-1bc775dd2cd37ad0"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) 30c89bf9b78da97cfde06cdb0e82a4e7925733bdea8be302a78838a5cc1e8393 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.AtomicAddStorage(InnoEditor.Rendering.Shaders.ShaderIrValue resource, InnoEditor.Rendering.Shaders.ShaderIrValue index, InnoEditor.Rendering.Shaders.ShaderIrValue value)
```

Atomically adds to a scalar integer buffer element and returns its previous value.

**Parameter `resource`:** A read-write int or uint storage buffer.

**Parameter `index`:** Unsigned element index.

**Parameter `value`:** Addition operand matching the buffer element type.

**Returns:** The original scalar value observed by the atomic operation.

**Throws `System.ArgumentException`:** The resource is not an appropriate read-write integer buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L140).

## `Binary`

<a id="api-c16b7878cd140e6e"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Binary(InnoEditor.Rendering.Shaders.ShaderIrOperation,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) 6486c15d855dad0251fdda0a6fa523dc193a59e2fe9e4f8c95dabd86e7d0e6c8 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Binary(InnoEditor.Rendering.Shaders.ShaderIrOperation operation, InnoEditor.Rendering.Shaders.ShaderIrValue left, InnoEditor.Rendering.Shaders.ShaderIrValue right)
```

Applies an explicitly typed binary arithmetic or scalar comparison operation.

**Parameter `operation`:** Add, Subtract, Multiply, Divide, Minimum, Maximum, Equal or LessThan.

**Parameter `left`:** Left operand from this builder.

**Parameter `right`:** Right operand of the same complete type.

**Returns:** The result; comparisons produce a scalar Boolean.

**Throws `System.ArgumentException`:** Operands belong to another builder, differ in type, or the operation is invalid for them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L140).

## `Branch`

<a id="api-8893ecf43a5f18d5"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Branch(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}}) 43cc3cba6cc27700de04926ef4ddcd553a81947ef028315bcb7106d08835fb15 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderIrBuilder.Branch(InnoEditor.Rendering.Shaders.ShaderIrValue condition, System.Func<InnoEditor.Rendering.Shaders.ShaderIrBuilder, System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue>> whenTrue, System.Func<InnoEditor.Rendering.Shaders.ShaderIrBuilder, System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue>> whenFalse)
```

Builds a real conditional: only the selected region executes, including its memory and source-call effects.

**Parameter `condition`:** Scalar Boolean visible in this region.

**Parameter `whenTrue`:** Transient callback building the true region and its named outputs.

**Parameter `whenFalse`:** Transient callback building the false region with exactly matching output names/types.

**Returns:** Values merged into the enclosing scope; empty output maps represent effect-only branches.

**Throws `System.ArgumentException`:** The condition or branch output contracts are incompatible.

**Throws `System.InvalidOperationException`:** A callback mutates the enclosing scope or declares a nested stage input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.ControlFlow.cs#L34).

## `Build`

<a id="api-1face8960cf1ee6e"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}) de5d2a044aee3298c6eda2287bcb0b09fafdc33916b43a11c4a6ded934007425 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrBlock InnoEditor.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> outputs)
```

Freezes the current region without pruning unused calls or retaining this mutable builder.

**Parameter `outputs`:** Named values returned by the enclosing region.

**Returns:** An immutable block unaffected by later builder changes.

**Throws `System.ArgumentException`:** An output name is empty or a value belongs to another builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L364).

## `Call`

<a id="api-32c7da59efc1c4f2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Call(InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}) 45efa6eb084b9c8d728c05d8a54fc7f7940b31e8a70d60e60a0fb92f15d03ef2 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderIrBuilder.Call(InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis module, string implementationId, System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> inputs)
```

Calls a validated source implementation using semantic parameter names, preserving all call side effects.

**Parameter `module`:** A module whose selected implementations and variants share the same interface.

**Parameter `implementationId`:** The exact implementation/configuration selected by the target.

**Parameter `inputs`:** Exactly the input/inout parameters by public name; output-only parameters are not supplied.

**Returns:** Named results: `return`, followed by `output.<name>` for out/inout parameters.

**Throws `System.ArgumentException`:** The module failed, implementation is absent, or input names/types do not match.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L315).

## `Constant`

<a id="api-dd8014919647038f"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(System.Boolean) 26a3a00adff49886d26b83e66e6bdceda894d7cc12153d639d0b78385beab255 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(bool value)
```

Produces a scalar Boolean constant.

**Parameter `value`:** Scalar Boolean value.

**Returns:** A bool-typed intermediate value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L120).

## `Constant`

<a id="api-428d6dac75402530"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(System.Int32) 1b1d8f784d72eea8eb5c2a25985975b669917bf9ae097c08b914206d2459e681 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(int value)
```

Produces an exact signed 32-bit integer constant.

**Parameter `value`:** Scalar integer value.

**Returns:** An int-typed intermediate value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L98).

## `Constant`

<a id="api-60215f98c2498644"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(System.Single) 94ca68bb672d53f2288a22f47521371b59cd0a3f630c12fda9968b627f6d95b2 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(float value)
```

Produces a finite, exact 32-bit floating-point constant.

**Parameter `value`:** Finite scalar value, including signed zero.

**Returns:** A float-typed intermediate value.

**Throws `System.ArgumentOutOfRangeException`:** The value is NaN or infinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L82).

## `Constant`

<a id="api-4ea94f41005b930b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(System.UInt32) 3ecded86ca61da80663dc89569a13149936b43a7a037128f306902a898d8f29c -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Constant(uint value)
```

Produces an exact unsigned 32-bit integer constant.

**Parameter `value`:** Scalar unsigned integer value.

**Returns:** A uint-typed intermediate value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L109).

## `Construct`

<a id="api-c4e6588d0bfb8dee"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Construct(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderIrValue[]) 66c7fcdd1d6288b3d7f830fbe6c185bfd082545ead181e3222c2f4fedd08a676 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Construct(InnoEditor.Rendering.Shaders.ShaderSourceType type, params InnoEditor.Rendering.Shaders.ShaderIrValue[] members)
```

Constructs a complete vector, column-major matrix, structure or fixed array from typed members.

**Parameter `type`:** The complete aggregate type.

**Parameter `members`:** Scalar vector/matrix components, declaration-ordered structure fields, or array elements.

**Returns:** A value of the requested type.

**Throws `System.ArgumentException`:** The type is not an aggregate or members have incorrect count or types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L217).

## `Discard`

<a id="api-94b8316d33d91a5a"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Discard(InnoEditor.Rendering.Shaders.ShaderIrValue) ff83cabe5f65b39077844f3ee33a2ce84f5e430f64ea5b63ba7e768d0afb17bb -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderIrBuilder.Discard(InnoEditor.Rendering.Shaders.ShaderIrValue condition)
```

Discards a fragment when the Boolean condition is true; other stages reject this instruction.

**Parameter `condition`:** Scalar Boolean from this block.

**Throws `System.ArgumentException`:** The condition is not a Boolean or belongs to another builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L165).

## `Extract`

<a id="api-cca0d44573105828"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Extract(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Int32) 89f15e11b748358bfe66518ea14768af6e3dc53472abffb4db83c5f763e42264 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Extract(InnoEditor.Rendering.Shaders.ShaderIrValue value, int memberIndex)
```

Extracts one static component, structure member or array element without source-language member syntax.

**Parameter `value`:** Aggregate value from this builder.

**Parameter `memberIndex`:** Zero-based member index; a matrix index selects a column vector.

**Returns:** The precisely typed selected member.

**Throws `System.ArgumentException`:** The input is not an aggregate.

**Throws `System.ArgumentOutOfRangeException`:** The member index is outside the aggregate layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L262).

## `Input`

<a id="api-529e0798ceefa667"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Input(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType) 2fb6f412f98faa152f9e811b8663bd5301527df8cd843bf86483b10390545821 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Input(string name, InnoEditor.Rendering.Shaders.ShaderSourceType type)
```

Reads a named input from the enclosing typed function or stage interface.

**Parameter `name`:** Stable interface identity; it is not emitted as native source verbatim.

**Parameter `type`:** Complete non-void input type.

**Returns:** The shared input value for this name and type.

**Throws `System.ArgumentException`:** The name is empty, type is void, or this input was already declared with another type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L49).

## `LoadStorage`

<a id="api-7efa69fd1ce3970b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.LoadStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) a7067f8615cf380be08c6de20156190e6a1141891bcf0cf341f3774ba883c994 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.LoadStorage(InnoEditor.Rendering.Shaders.ShaderIrValue resource, InnoEditor.Rendering.Shaders.ShaderIrValue coordinate)
```

Loads a storage value at this exact point in the block's memory-effect sequence.

**Parameter `resource`:** A readable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Returns:** The declared buffer element or float4 image value.

**Throws `System.ArgumentException`:** The resource is write-only or the coordinate is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L83).

## `Loop`

<a id="api-2af0fd7bf98a0f9b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Loop(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,InnoEditor.Rendering.Shaders.ShaderIrValue,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue},System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}}) eb2a7de627c11a54a2d312411202d23d1ab02314d4d6f8a0f85a34c2b476ea10 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderIrBuilder.Loop(InnoEditor.Rendering.Shaders.ShaderIrValue iterations, System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> initialState, System.Func<InnoEditor.Rendering.Shaders.ShaderIrBuilder, InnoEditor.Rendering.Shaders.ShaderIrValue, System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue>, System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue>> body)
```

Builds a counted loop; each iteration receives the preceding iteration's complete carried state.

**Parameter `iterations`:** Unsigned iteration count, evaluated once before entering the loop.

**Parameter `initialState`:** Named values used before the first iteration and returned unchanged for zero iterations.

**Parameter `body`:** Transient callback receiving its builder, uint iteration index and typed carried values.

**Returns:** Final carried values in the enclosing scope; an empty state map permits effect-only loops.

**Throws `System.ArgumentException`:** The count is not uint or the body's output state changes names or types.

**Throws `System.InvalidOperationException`:** The body mutates the enclosing builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.ControlFlow.cs#L82).

## `Sample`

<a id="api-3db3af6183a2730b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Sample(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) 0215c53c973115336600f8db1cf819ceb35d18f7835e3ad23939e10087ee3700 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Sample(InnoEditor.Rendering.Shaders.ShaderIrValue texture, InnoEditor.Rendering.Shaders.ShaderIrValue coordinate)
```

Samples a texture using implicit derivatives; the enclosing stage must be Fragment.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Returns:** The sampled float4 value.

**Throws `System.ArgumentException`:** Operands have incompatible types or owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L26).

## `SampleLevel`

<a id="api-67ab12a52f900fd5"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.SampleLevel(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) 61f456817395b6cfbc26cdda56aec4ca02e213c07c71fcee2e89d0f081d2e9a7 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.SampleLevel(InnoEditor.Rendering.Shaders.ShaderIrValue texture, InnoEditor.Rendering.Shaders.ShaderIrValue coordinate, InnoEditor.Rendering.Shaders.ShaderIrValue level)
```

Samples a texture at an explicit floating-point mip level without implicit derivatives.

**Parameter `texture`:** A sampled 2D, 2D-array, 3D or cube texture.

**Parameter `coordinate`:** float2 for 2D, or float3 for an array, volume or cube.

**Parameter `level`:** Scalar floating-point mip level.

**Returns:** The sampled float4 value.

**Throws `System.ArgumentException`:** Operands have incompatible types or owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L54).

## `Select`

<a id="api-04f87fdea624a119"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Select(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) 1e6becb397ac63db31647d7ee481dd48d3c83c084db112eeb88529aa648d2eb8 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrValue InnoEditor.Rendering.Shaders.ShaderIrBuilder.Select(InnoEditor.Rendering.Shaders.ShaderIrValue condition, InnoEditor.Rendering.Shaders.ShaderIrValue whenTrue, InnoEditor.Rendering.Shaders.ShaderIrValue whenFalse)
```

Selects between equal typed values without conditionally executing their producers.

**Parameter `condition`:** Scalar Boolean condition from this builder.

**Parameter `whenTrue`:** Value selected when true.

**Parameter `whenFalse`:** Value selected when false.

**Returns:** A value with the selected operands' complete type.

**Throws `System.ArgumentException`:** The condition is not bool or selected value types differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.cs#L185).

## `StoreStorage`

<a id="api-b4a6da173436fdac"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.StoreStorage(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue) 92c7b23fba014de05b3d1c4d381be1b11cb990e727364907258ef80ca731ccfc -->

```csharp
public void InnoEditor.Rendering.Shaders.ShaderIrBuilder.StoreStorage(InnoEditor.Rendering.Shaders.ShaderIrValue resource, InnoEditor.Rendering.Shaders.ShaderIrValue coordinate, InnoEditor.Rendering.Shaders.ShaderIrValue value)
```

Stores a storage value without pruning unused writes or reordering surrounding memory operations.

**Parameter `resource`:** A writable typed storage input.

**Parameter `coordinate`:** uint buffer index; int2 image coordinate, or int3 for an image array/volume.

**Parameter `value`:** Exactly the declared element or image value type.

**Throws `System.ArgumentException`:** The resource is read-only or operands have incompatible types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBuilder.Resources.cs#L110).
