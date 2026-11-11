---
title: Add an animation binding
description: Connect neutral samples to a host-owned target without adding a central property switch.
uid: extending.animation-bindings
kind: how-to
owners:
  - Inno.Animation
  - Inno.Animation.Runtime
contracts:
  - project.inno-animation-runtime#binding-lifetime-and-diagnostics
---
# Add an animation binding

An animation binding provider turns a neutral sampled value into a concrete host operation. Choose this boundary when your content system needs to animate a property, transform or other state that the engine's neutral animation model does not own.

## Declare a protocol

Derive from `AnimationBindingProvider` and declare `AnimationBindingProviderAttribute` with a stable extension ID, binding ID and value kind. A provider must be concrete, non-generic and constructible through the catalog's public parameterless construction policy. Duplicate extension IDs or duplicate binding/value-kind protocols reject the candidate generation.

Choose a binding ID that describes the capability your extension actually implements. Transform, Sprite, skeleton, timeline and visual-novel orchestration are not built-in contracts that should be simulated by extending a central switch.

## Apply the final sample

Implement `TryApply(target, value)` on the host's owner thread. Resolve the target to the expected `IdentityObject` contract and return false when it is missing or incompatible. Apply the already blended value through the destination's supported API; do not reflectively write an arbitrary property name.

The target is weak and generation-qualified. Do not retain a resolved object as a cross-generation shortcut. The sink groups samples by both destination and protocol, so the same binding can safely describe separate objects without merging their values.

## Integrate diagnostics and release

The standard binding runtime reports missing providers, incompatible targets and provider exceptions through its borrowed diagnostic reporter. A subsequent successful batch removes resolved warnings. Do not create a parallel global diagnostic list or dispose the reporter supplied by session composition.

The type-catalog candidate owns provider instances. Dispose subscriptions and resources owned by the provider generation synchronously at its retirement boundary. The current binding snapshot does not preserve providers for an asynchronous pending-disposal retry; extensions requiring that behavior need an explicit supported owner rather than assuming it from the audio provider protocol.

These callbacks execute at control-thread update points, never inside a native real-time audio callback. See [the neutral animation contract](../api/projects/inno-animation.md) and [binding runtime](../api/projects/inno-animation-runtime.md) for exact declarations and current limitations.
