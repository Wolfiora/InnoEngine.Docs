---
title: Choose a behavior or a scene system
description: Attach per-object behavior or serializable scene-wide coordination
  with explicit lifecycle rules.
uid: manual.scenes.behaviors
kind: how-to
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#scene-ownership-contract
  - project.inno-scene#lifecycle-and-recovery-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Scene
---
# Choose a behavior or a scene system

Use GameBehavior for independently enabled functionality on an object. Use GameSystem for serializable coordination owned by one scene. Neither is a universal owner for devices, compilers, asset databases, the player loop or Editor services.

## Understand the lifecycle

| Concern | GameBehavior | GameSystem |
| --- | --- | --- |
| Owner | GameObject | GameScene |
| First activation / first update | Awake / Start | Awake / Start |
| Activation transitions | OnEnable / OnDisable | OnEnable / OnDisable |
| Frame phases | FixedUpdate / Update / LateUpdate | OnFixedUpdate / OnUpdate / OnLateUpdate |
| Final lifecycle cleanup | OnDestroy | OnDestroy |
| Explicit scheduling priority | No component display-order promise | Ascending `order` |

Changing `enabled` in a loaded scene immediately reconciles activation; it does not wait for the next frame. A behavior also depends on hierarchy activation. Awake and Start are one-time lifecycle phases, not per-enable callbacks. Only implement the callbacks the feature needs.

## Declare scene-level priority

This runtime-script system establishes an early priority. Override the required phase methods to implement actual work; the empty example deliberately does not invent a game feature.

```csharp
using InnoEngine.Scene;

public sealed class EarlySceneSystem : GameSystem
{
    public override int order => -100;
}
```

By default, one concrete system type may appear once per scene. `AllowMultipleSystem` explicitly changes multiplicity. Systems are useful for persistent scene-level coordination or extraction state. A graphics device or render graph must retain its independent host owner rather than inherit GameSystem to gain callbacks.

## Separate display order from execution order

Component `GetComponents` order matches Inspector and serialization order. Moving a component header does not define GameBehavior update priority. A required Transform may be reordered but not removed.

System `GetSystems` / `SetSystemIndex` order is the display and serialization order. `order` remains the primary execution priority; display order is the stable tie-breaker. The scheduler reads current priority before each stage. Changing the Inspector order does not rewrite the declared priority.

Protected system queries and object snapshots support scene-level consumers. A snapshot of structure does not freeze Transform, material or color values: read current values during the bounded operation and release old generation references at the reload safe point.
