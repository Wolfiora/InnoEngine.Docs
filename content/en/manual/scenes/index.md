---
title: Scenes, objects and behaviors
description: Choose the Scene workflow for loading content, arranging objects or adding behavior.
uid: manual.scenes.home
kind: landing
owners:
  - Inno.Scene
---
# Scenes, objects and behaviors

A scene groups live objects and scene-level systems inside one runtime world. Objects carry components; Transform supplies their hierarchy and position. GameBehavior adds independent activation and frame callbacks. Saved scenes and prefabs preserve this model without persisting a runtime generation.

## Common tasks

- [Load scenes and move an object](manage-scenes.md): additive loading, active selection and unloading.
- [Arrange a hierarchy and transform points](transforms.md): local values, world matrices and singular parents.
- [Choose a behavior or system](behaviors.md): lifecycle, enabling and execution order.
- [Instantiate a prefab](prefabs.md): authored assets, connected instances and parent boundaries.
- [Assign tags and layers](tags-and-layers.md): object assignments versus project definitions.
- [Recover missing scene scripts](missing.md): preserve unavailable types and diagnose restoration.

## Host and Editor integration

[Scene ownership and reload](../../architecture/scene-lifecycle.md) explains the underlying model. [Capture the smallest scene state](../../extending/scene-state.md) covers persistence and History infrastructure. The [project reference](../../architecture/projects/inno-scene.md) contains exact CLR contracts; game-script namespaces and host-only operations are identified separately.

Scene-level systems can support features supplied by an extension. The presence of layers, queries or a GameSystem base is not a claim that a physics, navigation or networking implementation ships with the engine.
