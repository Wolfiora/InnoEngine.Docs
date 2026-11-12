---
title: Inno.Animation
description: Neutral clip sampling, explicit targets, value bindings and generation-checked playback.
uid: project.inno-animation
kind: project
owners:
  - Inno.Animation
---
# Inno.Animation

This project defines value sampling that different content systems can consume. It does not depend on Scene, Rendering, Audio, Editor or a concrete backend, and does not impose a Transform, Sprite, skeleton, timeline or visual-novel model.

## Start with a task

[Play a clip against an explicit target](../../manual/animation/play-clips.md) explains session setup, clocks, markers and handle lifetime. [Add an animation binding](../../extending/animation-bindings.md) connects sampled values to a host-owned destination.

## Sampling model

An `AnimationClipAsset` contains a positive duration, ordered tracks and ordered event markers. Each track selects an open stable binding identity, a Step or Linear sampling policy and keyframes of one compatible value kind. Supported kinds are scalar, Vector2, Vector3, Vector4 and quaternion. The sampler normalizes quaternion output.

`AnimationPlayOptions` selects scaled/unscaled time, speed, looping, layer and weight. Runtime blending groups values by both target and binding, selects the highest contributing layer and combines its weighted samples. Identical binding names on different targets do not merge their values.

## Target and service contract

`AnimationTarget` captures a live identity's original domain-qualified runtime destination without retaining the object. It is distinct from a detached persistent ID. A target does not automatically follow a new runtime slot after retirement. Pure sampling and markers use the explicit `samplingOnly` target rather than a missing sink or default target.

The static `Animation` facade borrows the active session's `IAnimationService` through `AnimationExecutionContext`. Runtime scripts use the actual `InnoEngine.Animation` projection; host services and provider composition are separate surfaces. Playback handles are opaque generation-checked values and become stale after stop or natural completion.

Binding sinks receive final samples instead of writing reflected property names. Binding providers declare a stable ID and value kind and apply values on the owner thread. They are not native audio callbacks. A marker carries a stable event ID and neutral payload through the session's event dispatcher.

## Validation and reference

Clips are validated before import/play, and playback captures independent track, keyframe and marker payload copies. Later editing of the authoring asset does not change a running snapshot. Exact constructor, validation, sampling and facade contracts are listed in the generated reference; use the task guides for complete workflows.

[Browse animation types](../types/animation/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-animation/index.md)
