---
uid: api.10a456e8dadd73de334227484c06c6ca63b5ecf95f0d710b79829a2c2c06f6a6
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuSourceAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 6b73f1dad48ee171eeffc5050f8951948b8cbaa75b1cf22bda47dcae3b522167
title: "EditorMenuSourceAttribute.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a dynamic menu-source registration for an exact interaction surface.

## Parameters

**Parameter `area`:** The exact menu area that receives placements from the source.

**Parameter `priority`:** The ordering priority used when multiple dynamic sources contribute to the surface.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
