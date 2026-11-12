---
title: "Time"
description: "Reference for Time in Inno.Runtime."
uid: api.inno.runtime.runtime-script.0cb718723b4ea1f9
kind: api
owners:
  - Inno.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-runtime
  - manual.scripting.use-script-api
---
# `Time`

This reference describes `Time` in `Inno.Runtime`. Read the [shared contract](../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`deltaTime`](#api-d12303d22e299b52) | Property |
| [`fixedDeltaTime`](#api-a3fb1600884fecaf) | Property |
| [`fixedTime`](#api-9f280bb322e79015) | Property |
| [`frameCount`](#api-9ef45ee9b6e9b3a4) | Property |
| [`isPaused`](#api-507f58545cfd78ff) | Property |
| [`time`](#api-0db2f9d1165b98b9) | Property |
| [`timeScale`](#api-c79a5472508465a1) | Property |
| [`unscaledDeltaTime`](#api-92f90b6a46975377) | Property |
| [`unscaledTime`](#api-952168aef8f5fdaf) | Property |

## Type declaration

<a id="api-0cb718723b4ea1f9"></a>
<!-- api: T:InnoEngine.Core.Time ce025cba10fccb7a0dce44e44a9be7833c835793ce3dcff5826ed422a64cdee8 -->

```csharp
public static class InnoEngine.Core.Time
```

Provides Unity-style timing values for the runtime session bound to the current execution context.

**Constraints:** This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve
that clock through the active `InnoEngine.Core.RuntimeSession` scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L15).

## `deltaTime`

<a id="api-d12303d22e299b52"></a>
<!-- api: P:InnoEngine.Core.Time.deltaTime 30e49f4691525b777e385bc82f906ad6e9924af3601a817d804bb34039904335 -->

```csharp
public static float InnoEngine.Core.Time.deltaTime { get; }
```

Gets the current variable frame interval in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L31).

## `fixedDeltaTime`

<a id="api-a3fb1600884fecaf"></a>
<!-- api: P:InnoEngine.Core.Time.fixedDeltaTime 981f87545b13930d8a8b9502fafac0a9b74867c22ee73e92847a82b8701cc0b6 -->

```csharp
public static float InnoEngine.Core.Time.fixedDeltaTime { get; }
```

Gets the interval of the active fixed simulation step in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L63).

## `fixedTime`

<a id="api-9f280bb322e79015"></a>
<!-- api: P:InnoEngine.Core.Time.fixedTime cd360462e7e732a355d0e80ec346eb4d959bcca67d419b09452869d1c6480038 -->

```csharp
public static float InnoEngine.Core.Time.fixedTime { get; }
```

Gets the accumulated fixed simulation time in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L55).

## `frameCount`

<a id="api-9ef45ee9b6e9b3a4"></a>
<!-- api: P:InnoEngine.Core.Time.frameCount a9ae4d8164844aba9298a8a07a4ba6e55b814047de950fbf8e9f3f937be05909 -->

```csharp
public static long InnoEngine.Core.Time.frameCount { get; }
```

Gets the number of variable frames begun by this session.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L95).

## `isPaused`

<a id="api-507f58545cfd78ff"></a>
<!-- api: P:InnoEngine.Core.Time.isPaused 6be0054092c4dd6a25d6f417cc1463e2bd88926e600f989a2342c9691a7651ce -->

```csharp
public static bool InnoEngine.Core.Time.isPaused { get; set; }
```

Gets whether scaled simulation is paused.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L83).

## `time`

<a id="api-0db2f9d1165b98b9"></a>
<!-- api: P:InnoEngine.Core.Time.time 243286aef7eaa2cdf3b3536011cee605d7b6f4f748762139af9bd62d55c003c7 -->

```csharp
public static float InnoEngine.Core.Time.time { get; }
```

Gets the total elapsed session time in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L23).

## `timeScale`

<a id="api-c79a5472508465a1"></a>
<!-- api: P:InnoEngine.Core.Time.timeScale 3eea4d32080d0f603578d33e002d48b1562073f89e6024c1de96247f56e13928 -->

```csharp
public static float InnoEngine.Core.Time.timeScale { get; set; }
```

Gets the current simulation time multiplier.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L71).

## `unscaledDeltaTime`

<a id="api-92f90b6a46975377"></a>
<!-- api: P:InnoEngine.Core.Time.unscaledDeltaTime cbbfb9a4029a0120963ed97671f94dff3a4c579007544fe15fa8bb3b0b3d8ea4 -->

```csharp
public static float InnoEngine.Core.Time.unscaledDeltaTime { get; }
```

Gets the current frame interval unaffected by pause or time scaling.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L47).

## `unscaledTime`

<a id="api-952168aef8f5fdaf"></a>
<!-- api: P:InnoEngine.Core.Time.unscaledTime b3ad4c2c3e29bf7a06e51db5ed6ba840c19d05d8bb4ae506f04769979bb508da -->

```csharp
public static float InnoEngine.Core.Time.unscaledTime { get; }
```

Gets total elapsed session time unaffected by pause or time scaling.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L39).
